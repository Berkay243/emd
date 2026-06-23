/**
 * app.js — EMD Quiz Uygulaması
 * Ana uygulama mantığı: ekran yönetimi, quiz motoru, timer, skor
 */

/* =============================================
   STATE
   ============================================= */
const state = {
    currentTest: null,
    currentQuestionIndex: 0,
    answers: [],          // kullanıcı cevapları (index, -1 = cevapsız)
    answered: [],         // bool[] — her soru cevaplandı mı
    startTime: null,
    timerInterval: null,
    elapsed: 0,
    scores: {},           // { testId: score }
    reviewingTest: null,  // sonuç ekranından çözüm görme
};

/* =============================================
   SCREEN MANAGEMENT
   ============================================= */
function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('screen-' + id).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showHome() {
    stopTimer();
    renderHomeCards();
    showScreen('home');
}

function showResults() {
    showScreen('results');
}

/* =============================================
   HOME SCREEN RENDER
   ============================================= */
function renderHomeCards() {
    const container = document.getElementById('test-list-home');
    container.innerHTML = '';

    // Referans kart
    const refCard = document.createElement('div');
    refCard.className = 'test-card special';
    refCard.id = 'card-reference';
    refCard.innerHTML = `
        <div class="test-card-icon">📖</div>
        <div class="test-card-type">Kaynak</div>
        <div class="test-card-title">Referans Sorular & Çözümler</div>
        <div class="test-card-desc">10 sınav sorusu ve adım adım detaylı çözümleri</div>
        <div class="test-card-footer">
            <span class="test-card-q">📋 10 soru</span>
        </div>`;
    refCard.onclick = () => renderReferenceScreen();
    container.appendChild(refCard);

    // Test kartları
    ALL_TESTS.forEach(test => {
        const score = state.scores[test.id];
        const card = document.createElement('div');
        card.className = 'test-card';
        card.id = 'card-' + test.id;

        let scoreHtml = '<span class="test-card-score score-none">—</span>';
        if (score !== undefined) {
            const pct = Math.round((score / test.questions.length) * 100);
            const cls = pct >= 70 ? 'score-great' : pct >= 50 ? 'score-ok' : 'score-low';
            scoreHtml = `<span class="test-card-score ${cls}">✓ ${score}/${test.questions.length}</span>`;
        }

        const timeTxt = test.timeLimit > 0 ? `⏱ ${test.timeLimit/60} dk` : '∞ Süresiz';

        card.innerHTML = `
            <div class="test-card-icon">${test.icon}</div>
            <div class="test-card-type">Test</div>
            <div class="test-card-title">${test.title}</div>
            <div class="test-card-desc">${test.description}</div>
            <div class="test-card-footer">
                <span class="test-card-q">📝 ${test.questions.length} soru · ${timeTxt}</span>
                ${scoreHtml}
            </div>`;
        card.onclick = () => startQuiz(test);
        container.appendChild(card);
    });

    // Stat pillars
    document.getElementById('stat-total').textContent = `📚 ${ALL_TESTS.length} test · ${ALL_REFERENCE.length} referans soru`;
    const done = Object.keys(state.scores).length;
    document.getElementById('stat-done').textContent = `✅ ${done} test tamamlandı`;
}

/* =============================================
   REFERENCE SCREEN
   ============================================= */
function renderReferenceScreen() {
    const container = document.getElementById('ref-container');
    container.innerHTML = '';

    ALL_REFERENCE.forEach((q, idx) => {
        const card = document.createElement('div');
        card.className = 'ref-card';
        card.id = 'refcard-' + q.id;

        const stepsHtml = q.solution.steps.map((s, i) =>
            `<div class="solution-step"><strong>${i+1}.</strong> ${s}</div>`
        ).join('');

        card.innerHTML = `
            <div class="ref-card-header" onclick="toggleRefCard('${q.id}')">
                <div class="ref-card-num">${idx+1}</div>
                <div>
                    <div class="ref-card-topic">${q.topic}</div>
                    <div class="ref-card-q-short">${q.shortTitle}</div>
                </div>
                <div class="ref-card-toggle">▼</div>
            </div>
            <div class="ref-card-body">
                <div class="ref-question-full">${q.question}</div>
                <div class="ref-solution">
                    <h4>✅ Çözüm</h4>
                    ${stepsHtml}
                    <div class="solution-result">🎯 Sonuç: ${q.solution.result}</div>
                </div>
            </div>`;

        container.appendChild(card);
    });

    showScreen('reference');
    // MathJax render
    if (window.MathJax) MathJax.typesetPromise && MathJax.typesetPromise([container]);
}

function toggleRefCard(id) {
    const card = document.getElementById('refcard-' + id);
    card.classList.toggle('open');
    if (card.classList.contains('open') && window.MathJax) {
        MathJax.typesetPromise && MathJax.typesetPromise([card]);
    }
}

/* =============================================
   QUIZ ENGINE
   ============================================= */
function startQuiz(test) {
    state.currentTest = test;
    state.currentQuestionIndex = 0;
    state.answers = new Array(test.questions.length).fill(-1);
    state.answered = new Array(test.questions.length).fill(false);
    state.elapsed = 0;
    state.startTime = Date.now();

    document.getElementById('quiz-title-top').textContent = test.title;

    renderDotNav();
    renderQuestion(0);
    showScreen('quiz');

    startTimer(test.timeLimit);
}

function renderQuestion(idx) {
    const test = state.currentTest;
    const q = test.questions[idx];
    state.currentQuestionIndex = idx;

    // Progress bar
    const pct = ((idx + 1) / test.questions.length) * 100;
    document.getElementById('quiz-progress-fill').style.width = pct + '%';
    document.getElementById('quiz-progress-text').textContent = `${idx+1}/${test.questions.length}`;

    // Question card
    document.getElementById('question-num').textContent = `Soru ${idx + 1} — ${q.topic}`;
    document.getElementById('question-text').innerHTML = q.text;

    // Choices
    const choicesCont = document.getElementById('choices-container');
    choicesCont.innerHTML = '';
    const labels = ['A', 'B', 'C', 'D'];

    q.choices.forEach((choice, ci) => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.id = `choice-${idx}-${ci}`;

        if (state.answered[idx]) {
            btn.disabled = true;
            if (ci === q.correct) btn.classList.add('correct');
            else if (ci === state.answers[idx]) btn.classList.add('wrong');
        } else if (state.answers[idx] === ci) {
            btn.classList.add('selected');
        }

        btn.innerHTML = `<span class="choice-label">${labels[ci]}</span><span>${choice}</span>`;
        btn.onclick = () => selectChoice(ci);
        choicesCont.appendChild(btn);
    });

    // Nav buttons
    document.getElementById('btn-prev').disabled = idx === 0;
    document.getElementById('btn-next').disabled = idx === test.questions.length - 1;

    // Finish button visibility
    const allAnswered = state.answers.every(a => a !== -1);
    document.getElementById('btn-finish').style.display = allAnswered ? 'block' : 'none';

    updateDotNav(idx);

    // MathJax
    if (window.MathJax) {
        const card = document.getElementById('question-card');
        MathJax.typesetPromise && MathJax.typesetPromise([card]);
    }

    // Animation
    const card = document.getElementById('question-card');
    card.style.animation = 'none';
    void card.offsetWidth;
    card.style.animation = 'fadeIn 0.35s ease';
}

function selectChoice(ci) {
    const idx = state.currentQuestionIndex;
    if (state.answered[idx]) return;

    state.answers[idx] = ci;
    state.answered[idx] = true;

    // Visual feedback
    const q = state.currentTest.questions[idx];
    const labels = ['A', 'B', 'C', 'D'];
    const choicesCont = document.getElementById('choices-container');
    const btns = choicesCont.querySelectorAll('.choice-btn');

    btns.forEach((btn, i) => {
        btn.disabled = true;
        btn.classList.remove('selected');
        if (i === q.correct) btn.classList.add('correct');
        else if (i === ci && ci !== q.correct) btn.classList.add('wrong');
    });

    updateDotNav(idx);

    // Otomatik ilerle (0.8s sonra)
    setTimeout(() => {
        if (idx < state.currentTest.questions.length - 1) {
            nextQuestion();
        } else {
            // Son soru
            const allAnswered = state.answers.every(a => a !== -1);
            document.getElementById('btn-finish').style.display = 'block';
        }
    }, 900);
}

function prevQuestion() {
    if (state.currentQuestionIndex > 0) {
        renderQuestion(state.currentQuestionIndex - 1);
    }
}

function nextQuestion() {
    if (state.currentQuestionIndex < state.currentTest.questions.length - 1) {
        renderQuestion(state.currentQuestionIndex + 1);
    }
}

function finishQuiz() {
    stopTimer();
    calculateResults();
}

function calculateResults() {
    const test = state.currentTest;
    let correct = 0;
    test.questions.forEach((q, i) => {
        if (state.answers[i] === q.correct) correct++;
    });

    state.scores[test.id] = correct;
    const total = test.questions.length;
    const pct = Math.round((correct / total) * 100);

    // Result screen
    let icon, title, msg;
    if (pct >= 85)      { icon='🏆'; title='Mükemmel!'; msg='Harika bir performans gösterdin! Bütünleme sınavına hazırsın.'; }
    else if (pct >= 70) { icon='🎯'; title='Çok İyi!';  msg='Güçlü bir sonuç. Birkaç konuyu daha pekiştir.'; }
    else if (pct >= 50) { icon='📚'; title='İyi!';      msg='Orta düzey. Eksik konuları referans çözümlerden gözden geçir.'; }
    else                 { icon='💪'; title='Daha Çok Çalış'; msg='Referans soruları ve çözümleri tekrar incele, bir kez daha dene!'; }

    document.getElementById('result-icon').textContent = icon;
    document.getElementById('result-title').textContent = title;
    document.getElementById('result-score').textContent = `${correct}/${total}`;
    document.getElementById('result-msg').textContent = msg;

    // Detail
    const detail = document.getElementById('result-detail');
    detail.innerHTML = '';
    test.questions.forEach((q, i) => {
        const isCorrect = state.answers[i] === q.correct;
        const item = document.createElement('div');
        item.className = `result-item ${isCorrect ? 'correct-item' : 'wrong-item'}`;
        const userAns = state.answers[i] >= 0 ? ['A','B','C','D'][state.answers[i]] : '—';
        const corrAns = ['A','B','C','D'][q.correct];
        item.innerHTML = `
            <span class="result-item-icon">${isCorrect ? '✅' : '❌'}</span>
            <span class="result-item-text">
                <strong>Soru ${i+1}:</strong> ${q.topic}<br>
                Cevabın: <strong>${userAns}</strong> · Doğru: <strong>${corrAns}</strong>
            </span>`;
        detail.appendChild(item);
    });

    showScreen('results');
}

function retryQuiz() {
    startQuiz(state.currentTest);
}

function reviewAnswers() {
    renderReviewScreen();
}

function renderReviewScreen() {
    const container = document.getElementById('review-container');
    const test = state.currentTest;
    container.innerHTML = '';

    test.questions.forEach((q, idx) => {
        const isCorrect = state.answers[idx] === q.correct;
        const card = document.createElement('div');
        card.className = 'ref-card open';
        card.id = 'reviewcard-' + idx;

        const stepsHtml = q.explanation
            ? `<div class="solution-step">${q.explanation}</div>`
            : '';

        const labels = ['A','B','C','D'];
        const userAns = state.answers[idx] >= 0 ? labels[state.answers[idx]] : '—';
        const corrAns = labels[q.correct];
        const resultBadge = isCorrect
            ? '<span style="color:var(--green);font-weight:700">✅ Doğru</span>'
            : `<span style="color:var(--red);font-weight:700">❌ Yanlış — Doğru: ${corrAns}</span>`;

        card.innerHTML = `
            <div class="ref-card-header">
                <div class="ref-card-num" style="background:${isCorrect?'var(--green)':'var(--red)'}">${idx+1}</div>
                <div>
                    <div class="ref-card-topic">${q.topic}</div>
                    <div class="ref-card-q-short">${resultBadge} · Cevabın: ${userAns}</div>
                </div>
            </div>
            <div class="ref-card-body" style="display:block">
                <div class="ref-question-full">${q.text}</div>
                <div class="ref-solution">
                    <h4>✅ Açıklama</h4>
                    ${stepsHtml}
                    <div class="solution-result">🎯 Doğru cevap: ${corrAns} — ${q.choices[q.correct]}</div>
                </div>
            </div>`;
        container.appendChild(card);
    });

    showScreen('review');
    if (window.MathJax) MathJax.typesetPromise && MathJax.typesetPromise([container]);
}

/* =============================================
   DOT NAVIGATION
   ============================================= */
function renderDotNav() {
    const nav = document.getElementById('dot-nav');
    nav.innerHTML = '';
    state.currentTest.questions.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.id = 'dot-' + i;
        dot.onclick = () => renderQuestion(i);
        nav.appendChild(dot);
    });
}

function updateDotNav(current) {
    state.currentTest.questions.forEach((_, i) => {
        const dot = document.getElementById('dot-' + i);
        if (!dot) return;
        dot.className = 'dot';
        if (i === current) dot.classList.add('current');
        else if (state.answers[i] !== -1) dot.classList.add('answered');
    });
}

/* =============================================
   TIMER
   ============================================= */
function startTimer(limit) {
    stopTimer();
    state.elapsed = 0;
    const timerEl = document.getElementById('quiz-timer');

    state.timerInterval = setInterval(() => {
        state.elapsed++;

        if (limit > 0 && state.elapsed >= limit) {
            stopTimer();
            alert('⏰ Süre doldu! Test otomatik bitirildi.');
            finishQuiz();
            return;
        }

        if (limit > 0) {
            const remaining = limit - state.elapsed;
            timerEl.textContent = `⏱ ${fmtTime(remaining)}`;
            timerEl.classList.toggle('danger', remaining <= 60);
        } else {
            timerEl.textContent = `⏱ ${fmtTime(state.elapsed)}`;
        }
    }, 1000);
}

function stopTimer() {
    if (state.timerInterval) {
        clearInterval(state.timerInterval);
        state.timerInterval = null;
    }
}

function fmtTime(s) {
    const m = Math.floor(s / 60).toString().padStart(2, '0');
    const sec = (s % 60).toString().padStart(2, '0');
    return `${m}:${sec}`;
}

/* =============================================
   LEAVE MODAL
   ============================================= */
function confirmLeave() {
    document.getElementById('modal-leave').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal-leave').style.display = 'none';
}

function leaveQuiz() {
    closeModal();
    stopTimer();
    showHome();
}

/* =============================================
   PARTICLES BACKGROUND
   ============================================= */
(function createParticles() {
    const canvas = document.createElement('canvas');
    canvas.id = 'particle-canvas';
    canvas.style.cssText = 'position:fixed;inset:0;z-index:0;pointer-events:none;opacity:0.4';
    document.getElementById('particles').appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let W, H, particles;

    function resize() {
        W = canvas.width = window.innerWidth;
        H = canvas.height = window.innerHeight;
    }

    function initParticles() {
        particles = Array.from({length: 60}, () => ({
            x: Math.random() * W,
            y: Math.random() * H,
            r: Math.random() * 1.5 + 0.3,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            a: Math.random()
        }));
    }

    function draw() {
        ctx.clearRect(0, 0, W, H);
        particles.forEach(p => {
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
            if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
            ctx.fillStyle = `rgba(99,179,237,${0.3 + Math.sin(Date.now()/2000 + p.a)*0.2})`;
            ctx.fill();
        });
        requestAnimationFrame(draw);
    }

    window.addEventListener('resize', () => { resize(); initParticles(); });
    resize();
    initParticles();
    draw();
})();

/* =============================================
   INIT
   ============================================= */
document.addEventListener('DOMContentLoaded', () => {
    renderHomeCards();
});

// ESC tuşu ile modalı kapat
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
});
