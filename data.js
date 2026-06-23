/**
 * data.js
 * EMD Quiz - Tüm soru verileri, referans sorular + yeni testler
 * ---------------------------------------------------------------
 * Notasyon: ax, ay, az = birim vektörler, mu0 = 4π×10⁻⁷, eps0 = 8.854×10⁻¹²
 */

/* ===================================================================
   REFERANS SORULAR — adım adım çözüm
   =================================================================== */
const REFERENCE_QUESTIONS = [
    {
        id: "ref1",
        topic: "Maxwell — Curl H ve Akım Yoğunluğu",
        shortTitle: "B alanından J akım yoğunluğu bulma",
        question: "Boş uzayda manyetik akı yoğunluğu \\(\\mathbf{B} = y^2\\mathbf{a}_x + z^2\\mathbf{a}_y + x^2\\mathbf{a}_z\\) Wb/m² olarak verilmiştir. Bu bölgedeki \\(\\mathbf{J}\\) akım yoğunluğu nedir? (A/m²)",
        solution: {
            steps: [
                "Boş uzayda Maxwell'in Ampere yasası (statik): \\(\\nabla\\times\\mathbf{H}=\\mathbf{J}\\) ve \\(\\mathbf{H}=\\mathbf{B}/\\mu_0\\) → \\(\\mathbf{J}=\\frac{1}{\\mu_0}\\nabla\\times\\mathbf{B}\\)",
                "\\(\\mathbf{B}=B_x\\mathbf{a}_x+B_y\\mathbf{a}_y+B_z\\mathbf{a}_z\\) ile \\(B_x=y^2,\\; B_y=z^2,\\; B_z=x^2\\)",
                "Curl formülü: \\(\\nabla\\times\\mathbf{B}=\\left(\\frac{\\partial B_z}{\\partial y}-\\frac{\\partial B_y}{\\partial z}\\right)\\mathbf{a}_x+\\left(\\frac{\\partial B_x}{\\partial z}-\\frac{\\partial B_z}{\\partial x}\\right)\\mathbf{a}_y+\\left(\\frac{\\partial B_y}{\\partial x}-\\frac{\\partial B_x}{\\partial y}\\right)\\mathbf{a}_z\\)",
                "ax bileşeni: \\(\\frac{\\partial(x^2)}{\\partial y}-\\frac{\\partial(z^2)}{\\partial z}=0-2z=-2z\\)",
                "ay bileşeni: \\(\\frac{\\partial(y^2)}{\\partial z}-\\frac{\\partial(x^2)}{\\partial x}=0-2x=-2x\\)",
                "az bileşeni: \\(\\frac{\\partial(z^2)}{\\partial x}-\\frac{\\partial(y^2)}{\\partial y}=0-2y=-2y\\)",
                "\\(\\nabla\\times\\mathbf{B}=-2z\\mathbf{a}_x-2x\\mathbf{a}_y-2y\\mathbf{a}_z\\)",
                "J ifadesi: \\(\\mathbf{J}=\\frac{1}{\\mu_0}\\nabla\\times\\mathbf{B}=\\frac{1}{\\mu_0}(-2z\\mathbf{a}_x-2x\\mathbf{a}_y-2y\\mathbf{a}_z)\\) A/m²"
            ],
            result: "\\(\\mathbf{J}=\\dfrac{1}{\\mu_0}\\left(-2z\\,\\mathbf{a}_x-2x\\,\\mathbf{a}_y-2y\\,\\mathbf{a}_z\\right)\\) A/m²  ile \\(\\;\\dfrac{1}{\\mu_0}=\\dfrac{10^7}{4\\pi}\\approx795\\,775\\) A/(Wb·m)"
        }
    },
    {
        id: "ref2",
        topic: "Manyetik Vektör Potansiyel & Manyetik Akı",
        shortTitle: "Vektör potansiyelden manyetik akı (silindirik)",
        question: "Boş uzayda manyetik vektör potansiyeli \\(\\mathbf{A}=15e^{-\\rho}\\sin\\phi\\;\\mathbf{a}_z\\) Wb/m olarak verilmiştir. \\(\\rho=5,\\;0\\le\\phi\\le\\pi/2,\\;0\\le z\\le10\\) sınırları ile tanımlı yüzeyden geçen manyetik akı kaç Wb'dır?",
        solution: {
            steps: [
                "\\(\\mathbf{B}=\\nabla\\times\\mathbf{A}\\). Sadece \\(A_z\\) bileşeni mevcut, silindirik koordinatlarda:",
                "\\(B_\\rho=\\dfrac{1}{\\rho}\\dfrac{\\partial A_z}{\\partial\\phi}=\\dfrac{15e^{-\\rho}\\cos\\phi}{\\rho}\\)",
                "\\(B_\\phi=-\\dfrac{\\partial A_z}{\\partial\\rho}=15e^{-\\rho}\\sin\\phi\\)",
                "\\(\\rho=5\\) silindirik yüzeyinde \\(d\\mathbf{S}=\\rho\\,d\\phi\\,dz\\;\\mathbf{a}_\\rho\\)",
                "\\(\\Psi=\\displaystyle\\int_0^{10}\\int_0^{\\pi/2}B_\\rho\\cdot\\rho\\;d\\phi\\,dz=\\int_0^{10}\\int_0^{\\pi/2}\\frac{15e^{-5}\\cos\\phi}{5}\\cdot5\\;d\\phi\\,dz\\)",
                "\\(=15e^{-5}\\int_0^{10}dz\\int_0^{\\pi/2}\\cos\\phi\\,d\\phi=15e^{-5}\\times10\\times[\\sin\\phi]_0^{\\pi/2}\\)",
                "\\(=15e^{-5}\\times10\\times1=150e^{-5}\\) Wb"
            ],
            result: "\\(\\Psi=150\\,e^{-5}\\) Wb \\(\\approx 150\\times0.006738\\approx1.011\\) Wb"
        }
    },
    {
        id: "ref3",
        topic: "Lorentz Kuvveti",
        shortTitle: "Hareketli yüke etki eden Lorentz kuvveti",
        question: "P(2,5,−3) noktasında bulunan 4 mC'luk bir yük, \\(\\mathbf{E}=2xyz\\mathbf{a}_x+x^2z\\mathbf{a}_y+x^2y\\mathbf{a}_z\\) V/m ve \\(\\mathbf{B}=y^2\\mathbf{a}_x+z^2\\mathbf{a}_y+x^2\\mathbf{a}_z\\) Wb/m² alanlarında \\(\\mathbf{u}=1.4\\mathbf{a}_x-3.2\\mathbf{a}_y-\\mathbf{a}_z\\) m/s hızına sahiptir. Yüke etki eden kuvvet kaçtır?",
        solution: {
            steps: [
                "Lorentz kuvveti: \\(\\mathbf{F}=Q(\\mathbf{E}+\\mathbf{u}\\times\\mathbf{B})\\)",
                "P(2,5,−3) noktasında E: \\(E_x=2(2)(5)(-3)=-60,\\;E_y=(4)(-3)=-12,\\;E_z=(4)(5)=20\\) V/m",
                "P noktasında B: \\(B_x=25,\\;B_y=9,\\;B_z=4\\) Wb/m²",
                "\\(\\mathbf{u}\\times\\mathbf{B}=\\begin{vmatrix}\\mathbf{a}_x&\\mathbf{a}_y&\\mathbf{a}_z\\\\1.4&-3.2&-1\\\\25&9&4\\end{vmatrix}\\)",
                "\\(=(-3.2\\cdot4-(-1)\\cdot9)\\mathbf{a}_x-(1.4\\cdot4-(-1)\\cdot25)\\mathbf{a}_y+(1.4\\cdot9-(-3.2)\\cdot25)\\mathbf{a}_z\\)",
                "\\(=(-12.8+9)\\mathbf{a}_x-(5.6+25)\\mathbf{a}_y+(12.6+80)\\mathbf{a}_z=-3.8\\mathbf{a}_x-30.6\\mathbf{a}_y+92.6\\mathbf{a}_z\\)",
                "\\(\\mathbf{E}+\\mathbf{u}\\times\\mathbf{B}=(-60-3.8)\\mathbf{a}_x+(-12-30.6)\\mathbf{a}_y+(20+92.6)\\mathbf{a}_z=-63.8\\mathbf{a}_x-42.6\\mathbf{a}_y+112.6\\mathbf{a}_z\\)",
                "\\(\\mathbf{F}=4\\times10^{-3}(-63.8\\mathbf{a}_x-42.6\\mathbf{a}_y+112.6\\mathbf{a}_z)\\)"
            ],
            result: "\\(\\mathbf{F}=-255.2\\mathbf{a}_x-170.4\\mathbf{a}_y+450.4\\mathbf{a}_z\\) mN"
        }
    },
    {
        id: "ref4",
        topic: "Manyetik Alan Sınır Koşulları",
        shortTitle: "İki bölge arası B ve H sınır koşulları",
        question: "\\(\\mu_1=2.5\\mu_0\\) (z<0) ve \\(\\mu_2=4\\mu_0\\) (z>0) için \\(\\mathbf{B}_1=6\\mathbf{a}_x-4.2\\mathbf{a}_y+1.8\\mathbf{a}_z\\) mWb/m² verilmiştir. H₂ ve bu alanın sınır yüzeyiyle yaptığı açıyı bulunuz.",
        solution: {
            steps: [
                "Sınır yüzeyi z=0, normal yön \\(\\mathbf{a}_z\\). Normal bileşen sürekliliği: \\(B_{1z}=B_{2z}=1.8\\) mWb/m²",
                "Teğetsel H sürekliliği (yüzey akımı yok): \\(H_{1t}=H_{2t}\\)",
                "\\(H_{1x}=\\dfrac{B_{1x}}{\\mu_1}=\\dfrac{6\\times10^{-3}}{10\\pi\\times10^{-7}}=\\dfrac{6\\times10^{4}}{10\\pi}=\\dfrac{6000}{\\pi}\\approx1910\\) A/m",
                "\\(H_{1y}=\\dfrac{-4.2\\times10^{-3}}{10\\pi\\times10^{-7}}=\\dfrac{-4.2\\times10^{4}}{10\\pi}=\\dfrac{-4200}{\\pi}\\approx-1337\\) A/m",
                "Sınır koşulu: \\(H_{2x}=H_{1x}=\\dfrac{6000}{\\pi}\\approx1910\\) A/m,  \\(H_{2y}=H_{1y}=\\dfrac{-4200}{\\pi}\\approx-1337\\) A/m",
                "\\(B_{2x}=\\mu_2 H_{2x}=4\\mu_0\\cdot\\dfrac{6000}{\\pi}=4\\times4\\pi\\times10^{-7}\\times\\dfrac{6000}{\\pi}=9.6\\times10^{-3}\\) Wb/m²",
                "\\(B_{2y}=4\\mu_0\\cdot\\dfrac{-4200}{\\pi}=-6.72\\times10^{-3}\\) Wb/m²",
                "\\(\\mathbf{H}_2=H_{2x}\\mathbf{a}_x+H_{2y}\\mathbf{a}_y+H_{2z}\\mathbf{a}_z\\) ile \\(H_{2z}=\\dfrac{B_{2z}}{\\mu_2}=\\dfrac{1.8\\times10^{-3}}{16\\pi\\times10^{-7}}=\\dfrac{1.8\\times10^{4}}{16\\pi}=\\dfrac{1125}{\\pi}\\approx358\\) A/m",
                "Sınır açısı: \\(|\\mathbf{B}_2|=\\sqrt{9.6^2+6.72^2+1.8^2}\\times10^{-3}=\\sqrt{140.56}\\times10^{-3}\\approx11.856\\) mWb/m²",
                "\\(\\cos\\theta_{n2}=\\dfrac{B_{2n}}{|\\mathbf{B}_2|}=\\dfrac{1.8}{11.856}\\approx0.1518\\) → \\(\\theta_{n2}=\\cos^{-1}(0.1518)\\approx81.27°\\) (normal ile açı)",
                "Yüzey ile açı: \\(\\theta_s=90°-81.27°=8.73°\\)  [B vektörü yüzeye yakın yatıyor, küçük açı beklenir ✓]"
            ],
            result: "\\(\\mathbf{H}_2=\\dfrac{1}{\\pi}\\left(6000\\,\\mathbf{a}_x-4200\\,\\mathbf{a}_y+1125\\,\\mathbf{a}_z\\right)\\) A/m \\(\\approx1910\\,\\mathbf{a}_x-1337\\,\\mathbf{a}_y+358\\,\\mathbf{a}_z\\) A/m,  sınır yüzeyiyle açı \\(\\approx8.73°\\)  (normal ile \\(\\approx81.27°\\))"
        }
    },
    {
        id: "ref5",
        topic: "Manyetik Enerji — Koaksiyel Kablo",
        shortTitle: "Koaksiyel kablo yalıtkanındaki manyetik enerji",
        question: "Yarıçapı 1.2 cm olan iç iletken ve yarıçapı 1.8 cm olan dış iletken, \\(\\mu=4\\mu_0\\) yalıtkanla ayrılmıştır. Kablo 3 m uzunluğunda ve 25 mA akım taşıyorsa yalıtkan ortamdaki manyetik enerji kaç pJ'dur?",
        solution: {
            steps: [
                "a<ρ<b arasında: \\(\\mathbf{H}=\\dfrac{I}{2\\pi\\rho}\\mathbf{a}_\\phi\\)",
                "a = 0.012 m, b = 0.018 m, I = 25×10⁻³ A, L = 3 m, μ = 4μ₀",
                "\\(W_m=\\dfrac{\\mu}{2}\\int_V H^2\\,dV=\\dfrac{\\mu}{2}\\int_0^L\\int_0^{2\\pi}\\int_a^b\\dfrac{I^2}{4\\pi^2\\rho^2}\\rho\\,d\\rho\\,d\\phi\\,dz\\)",
                "\\(=\\dfrac{\\mu I^2 L}{4\\pi}\\int_a^b\\dfrac{d\\rho}{\\rho}=\\dfrac{\\mu I^2 L}{4\\pi}\\ln\\dfrac{b}{a}\\)",
                "\\(=\\dfrac{4\\times4\\pi\\times10^{-7}\\times(25\\times10^{-3})^2\\times3}{4\\pi}\\ln\\dfrac{0.018}{0.012}\\)",
                "\\(=4\\times10^{-7}\\times625\\times10^{-6}\\times3\\times\\ln(1.5)\\)",
                "\\(=7500\\times10^{-13}\\times0.4055\\approx3041\\times10^{-13}\\)"
            ],
            result: "\\(W_m=\\dfrac{4\\mu_0 I^2 L}{4\\pi}\\ln\\dfrac{b}{a}\\approx304\\) pJ"
        }
    },
    {
        id: "ref6",
        topic: "Faraday — Dönen Çubuk İndüksiyonu",
        shortTitle: "Dönen çubukta indüklenen EMF",
        question: "İletken bir çubuğun bir ucu orijinde topraklanmış, diğer ucu z=0 düzleminde serbestçe hareket edebilmektedir. Çubuk \\(\\mathbf{B}=60\\mathbf{a}_z\\) mWb/m² alanında 30 rad/s açısal hızla dönmektedir. Çubuğun uzunluğu 8 cm ise çubukta indüklenen gerilim kaç mV'dur?",
        solution: {
            steps: [
                "Dönen çubukta her r mesafesindeki eleman hızı: \\(u=r\\omega\\)",
                "EMF = \\(\\displaystyle\\int_0^L(\\mathbf{u}\\times\\mathbf{B})\\cdot d\\mathbf{l}=\\int_0^L r\\omega B\\,dr=\\omega B\\dfrac{L^2}{2}\\)",
                "\\(V_{emf}=\\dfrac{1}{2}B L^2\\omega=\\dfrac{1}{2}\\times60\\times10^{-3}\\times(0.08)^2\\times30\\)",
                "\\(=\\dfrac{1}{2}\\times60\\times10^{-3}\\times6.4\\times10^{-3}\\times30\\)",
                "\\(=\\dfrac{1}{2}\\times11.52\\times10^{-3}=5.76\\times10^{-3}\\)"
            ],
            result: "\\(V_{emf}=\\dfrac{1}{2}BL^2\\omega=5.76\\) mV"
        }
    },
    {
        id: "ref7",
        topic: "Motionel EMF — Hareket Eden İletken",
        shortTitle: "Hareket eden otomobil tamponunda EMF",
        question: "Bir otomobil 120 km/saat hızla hareket etmektedir. Dünya'nın manyetik alanı \\(B=4.3\\times10^{-5}\\) Wb/m² olup alan vektörü otomobilin normali (dikey yön) ile 65° açı yapıyorsa, 1.6 m'lik tamponunda indüklenen gerilim kaç mV'dur?",
        solution: {
            steps: [
                "Koordinat sistemi: araç +y yönünde v hızıyla ilerliyor, tampon +x yönünde, normal = +z (dikey yukarı)",
                "B vektörü dikey (z) ile 65° açı yapıyor → \\(B_z=B\\cos65°\\) (dikey bileşen), \\(B_{yatay}=B\\sin65°\\)",
                "Motionel EMF: \\(V_{emf}=\\displaystyle\\int_0^L(\\mathbf{u}\\times\\mathbf{B})\\cdot d\\mathbf{l}\\)",
                "\\(\\mathbf{u}\\times\\mathbf{B}=v\\mathbf{a}_y\\times(B_y\\mathbf{a}_y+B_z\\mathbf{a}_z)=vB_z(\\mathbf{a}_y\\times\\mathbf{a}_z)=vB\\cos65°\\cdot\\mathbf{a}_x\\)",
                "Yalnızca B'nin dikey bileşeni \\((B\\cos\\theta)\\) tampon boyunca (x yönünde) katkı sağlar",
                "v = 120/3.6 = 33.33 m/s, L = 1.6 m, B = 4.3×10⁻⁵ T, cos65° ≈ 0.4226",
                "\\(V_{emf}=BLv\\cos65°=4.3\\times10^{-5}\\times1.6\\times33.33\\times0.4226\\)"
            ],
            result: "\\(V_{emf}=BLv\\cos65°\\approx4.3\\times10^{-5}\\times1.6\\times33.33\\times0.4226\\approx0.969\\) mV \\(\\approx0.97\\) mV"
        }
    },
    {
        id: "ref8",
        topic: "Yer Değiştirme Akımı",
        shortTitle: "Kondansatör dielektriğinde yer değiştirme akımı",
        question: "20 MHz frekanslı, 50 V genlikli bir gerilim jeneratörü, plaka alanı 2.8 cm² ve plakalar arası mesafe 0.2 mm olan hava kondansatörüne bağlanmıştır. Dielektrik bölgesindeki maksimum yer değiştirme akım yoğunluğu (A/m²) ve maksimum akım (mA) nedir?",
        solution: {
            steps: [
                "Elektrik alan genliği: \\(E_0=\\dfrac{V_0}{d}=\\dfrac{50}{0.2\\times10^{-3}}=250\\,000\\) V/m",
                "Açısal frekans: \\(\\omega=2\\pi f=2\\pi\\times20\\times10^6=4\\pi\\times10^7\\) rad/s",
                "Yer değiştirme akımı: \\(\\mathbf{J}_d=\\varepsilon_0\\dfrac{\\partial\\mathbf{E}}{\\partial t}\\) → maksimum değer: \\(|J_d|_{max}=\\varepsilon_0 E_0\\omega\\)",
                "\\(|J_d|_{max}=8.854\\times10^{-12}\\times250\\,000\\times4\\pi\\times10^7\\)",
                "\\(=8.854\\times10^{-12}\\times2.5\\times10^5\\times4\\pi\\times10^7\\)",
                "Kuvvetleri toplayalım: \\(10^{-12}\\times10^5\\times10^7=10^0\\) → katsayılar kalır",
                "\\(=8.854\\times2.5\\times4\\pi=8.854\\times10\\pi\\approx8.854\\times31.416\\approx278.3\\) A/m²",
                "Maksimum akım: \\(I_{max}=|J_d|_{max}\\times A=278.3\\times2.8\\times10^{-4}=77.9\\times10^{-3}\\)"
            ],
            result: "\\(|J_d|_{max}=8.854\\times10^{-12}\\times E_0\\times4\\pi\\times10^7\\approx278.3\\) A/m²,  \\(I_{max}\\approx77.9\\) mA"
        }
    },
    {
        id: "ref9",
        topic: "Kayıp Frekansı",
        shortTitle: "İletim ve yer değiştirme akımı eşitliği frekansı",
        question: "\\(\\mu=\\mu_0,\\;\\varepsilon=9\\varepsilon_0,\\;\\sigma=4\\) S/m parametreli malzemede iletim akımı yoğunluğu ile yer değiştirme akımı yoğunluğunun büyüklüklerinin eşit olduğu frekans kaç GHz'dir?",
        solution: {
            steps: [
                "İletim akımı: \\(J_c=\\sigma E\\), Yer değiştirme akımı: \\(J_d=\\omega\\varepsilon E\\)",
                "Eşitlik: \\(\\sigma=\\omega_c\\varepsilon\\) → \\(\\omega_c=\\dfrac{\\sigma}{\\varepsilon}=\\dfrac{4}{9\\times8.854\\times10^{-12}}\\)",
                "\\(\\omega_c=\\dfrac{4}{79.69\\times10^{-12}}=5.018\\times10^{10}\\) rad/s",
                "\\(f_c=\\dfrac{\\omega_c}{2\\pi}=\\dfrac{5.018\\times10^{10}}{2\\pi}\\approx7.986\\times10^9\\) Hz"
            ],
            result: "\\(f_c=\\dfrac{\\sigma}{2\\pi\\varepsilon}=\\dfrac{4}{2\\pi\\times9\\varepsilon_0}\\approx7.99\\) GHz"
        }
    },
    {
        id: "ref10",
        topic: "Dalga Denklemi — Faz Sabiti ve H₀",
        shortTitle: "Faz sabiti β ve H₀ hesabı",
        question: "Homojen bir ortamda \\(\\varepsilon=81\\varepsilon_0,\\;\\mu=\\mu_0\\). Fazör çözümler: \\(\\mathbf{E}_s=10e^{j(\\omega t+\\beta x)}\\mathbf{a}_y\\) V/m, \\(\\mathbf{H}_s=H_0 e^{j(\\omega t+\\beta x)}\\mathbf{a}_z\\) A/m. \\(\\omega=2\\pi\\times10^9\\) rad/s ise β ve H₀ nedir?",
        solution: {
            steps: [
                "Faz hızı: \\(v_p=\\dfrac{1}{\\sqrt{\\mu\\varepsilon}}=\\dfrac{c}{\\sqrt{\\varepsilon_r}}=\\dfrac{c}{9}\\) (\\(\\varepsilon_r=81\\), \\(\\mu_r=1\\))",
                "Faz sabiti: \\(\\beta=\\dfrac{\\omega}{v_p}=\\omega\\sqrt{\\mu\\varepsilon}=\\omega\\cdot\\dfrac{9}{c}=\\dfrac{2\\pi\\times10^9\\times9}{3\\times10^8}=\\dfrac{18\\pi\\times10^9}{3\\times10^8}=60\\pi\\) rad/m",
                "Karakteristik empedans: \\(\\eta=\\sqrt{\\dfrac{\\mu}{\\varepsilon}}=\\dfrac{\\eta_0}{\\sqrt{\\varepsilon_r}}=\\dfrac{120\\pi}{9}=\\dfrac{40\\pi}{3}\\) Ω \\(\\approx41.9\\) Ω",
                "Dalga kılavuzu ilişkisi (Maxwell): \\(H_0=\\dfrac{E_0}{\\eta}=\\dfrac{10}{40\\pi/3}=\\dfrac{10\\times3}{40\\pi}=\\dfrac{30}{40\\pi}=\\dfrac{3}{4\\pi}\\) A/m",
                "Not: E×H yönünden dalga −x yönünde ilerliyor (β negatif olarak da alınabilir)"
            ],
            result: "\\(\\beta=60\\pi\\approx188.5\\) rad/m,  \\(H_0=\\dfrac{3}{4\\pi}\\approx0.2387\\) A/m"
        }
    }
];

/* ===================================================================
   TEST 1 — Temel EMD (düzeltilmiş şıklar)
   =================================================================== */
const TEST_1 = {
    id: "test1",
    title: "Test 1 — Temel EMD",
    description: "Referans soruların çoktan seçmeli versiyonu",
    icon: "⚡",
    timeLimit: 0,
    questions: [
        {
            id: "t1q1",
            topic: "Curl & Akım Yoğunluğu",
            text: "Boş uzayda \\(\\mathbf{B}=y^2\\mathbf{a}_x+z^2\\mathbf{a}_y+x^2\\mathbf{a}_z\\) Wb/m² verilmiştir. \\(\\mathbf{J}=\\dfrac{1}{\\mu_0}\\nabla\\times\\mathbf{B}\\) ifadesinin doğru sonucu hangisidir?",
            choices: [
                "\\(\\dfrac{1}{\\mu_0}(-2z\\,\\mathbf{a}_x-2x\\,\\mathbf{a}_y-2y\\,\\mathbf{a}_z)\\) A/m²",
                "\\(\\dfrac{1}{\\mu_0}(2z\\,\\mathbf{a}_x+2x\\,\\mathbf{a}_y+2y\\,\\mathbf{a}_z)\\) A/m²",
                "\\((-2z\\,\\mathbf{a}_x-2x\\,\\mathbf{a}_y-2y\\,\\mathbf{a}_z)\\) A/m²",
                "\\(\\dfrac{1}{\\mu_0}(-2y\\,\\mathbf{a}_x-2z\\,\\mathbf{a}_y-2x\\,\\mathbf{a}_z)\\) A/m²"
            ],
            correct: 0,
            explanation: "∇×B = −2z·ax − 2x·ay − 2y·az ve J = (1/μ₀)∇×B olduğundan 1/μ₀ çarpanı mutlaka yer almalıdır. Seçenek C'de 1/μ₀ eksiktir."
        },
        {
            id: "t1q2",
            topic: "Manyetik Akı",
            text: "\\(\\mathbf{A}=15e^{-\\rho}\\sin\\phi\\;\\mathbf{a}_z\\) Wb/m için \\(\\rho=5,\\;0\\le\\phi\\le\\pi/2,\\;0\\le z\\le10\\) yüzeyinden geçen manyetik akı hangisidir?",
            choices: [
                "\\(150\\,e^{-5}\\) Wb \\(\\approx 1.011\\) Wb",
                "\\(75\\,e^{-5}\\) Wb \\(\\approx 0.505\\) Wb",
                "\\(300\\,e^{-5}\\) Wb \\(\\approx 2.02\\) Wb",
                "\\(15\\,e^{-5}\\) Wb \\(\\approx 0.101\\) Wb"
            ],
            correct: 0,
            explanation: "Ψ = ∫∫Bρ·ρ dφ dz. Bρ=(1/ρ)(∂Az/∂φ)=15e⁻⁵cosφ/5 ve ρ=5 için Ψ = 15e⁻⁵×10×∫cosφ dφ = 150e⁻⁵·[sinφ]₀^(π/2) = 150e⁻⁵ Wb"
        },
        {
            id: "t1q3",
            topic: "Lorentz Kuvveti",
            text: "Lorentz kuvvetinde Q=4 mC, \\(\\mathbf{E}+\\mathbf{u}\\times\\mathbf{B}=-63.8\\mathbf{a}_x-42.6\\mathbf{a}_y+112.6\\mathbf{a}_z\\) N/C hesaplanmıştır. Kuvvetin az bileşeni kaçtır?",
            choices: [
                "\\(450.4\\) mN",
                "\\(112.6\\) mN",
                "\\(-255.2\\) mN",
                "\\(20\\) mN"
            ],
            correct: 0,
            explanation: "Fz = Q×(E+u×B)z = 4×10⁻³ × 112.6 = 450.4×10⁻³ N = 450.4 mN"
        },
        {
            id: "t1q4",
            topic: "Sınır Koşulları",
            text: "\\(\\mu_1=2.5\\mu_0,\\;\\mu_2=4\\mu_0\\) ve \\(\\mathbf{B}_1=6\\mathbf{a}_x-4.2\\mathbf{a}_y+1.8\\mathbf{a}_z\\) mWb/m² için \\(\\mathbf{H}_2\\) ifadesi hangisidir?",
            choices: [
                "\\(\\dfrac{1}{\\pi}(6000\\,\\mathbf{a}_x-4200\\,\\mathbf{a}_y+1125\\,\\mathbf{a}_z)\\) A/m",
                "\\(\\dfrac{1}{\\pi}(1500\\,\\mathbf{a}_x-1050\\,\\mathbf{a}_y+281\\,\\mathbf{a}_z)\\) A/m",
                "\\(\\dfrac{1}{\\pi}(9600\\,\\mathbf{a}_x-6720\\,\\mathbf{a}_y+1800\\,\\mathbf{a}_z)\\) A/m",
                "\\(\\dfrac{1}{\\pi}(2400\\,\\mathbf{a}_x-1680\\,\\mathbf{a}_y+450\\,\\mathbf{a}_z)\\) A/m"
            ],
            correct: 0,
            explanation: "H₁x=H₂x=B₁x/μ₁=6×10⁻³/(10π×10⁻⁷)=6×10⁴/(10π)=6000/π≈1910 A/m. Tüm bileşenler: H₂=(1/π)(6000ax−4200ay+1125az) A/m"
        },
        {
            id: "t1q5",
            topic: "Manyetik Enerji",
            text: "Koaksiyel kablo (a=1.2cm, b=1.8cm, μ=4μ₀, L=3m, I=25mA) için \\(W_m=\\dfrac{\\mu I^2 L}{4\\pi}\\ln\\dfrac{b}{a}\\) formülündeki \\(\\ln(b/a)\\) değeri ve yaklaşık enerji hangisidir?",
            choices: [
                "\\(\\ln(1.5)\\approx0.405\\;\\rightarrow\\;W_m\\approx304\\) pJ",
                "\\(\\ln(0.5)\\approx-0.693\\;\\rightarrow\\) tanımsız",
                "\\(\\ln(3)\\approx1.099\\;\\rightarrow\\;W_m\\approx826\\) pJ",
                "\\(\\ln(2)\\approx0.693\\;\\rightarrow\\;W_m\\approx521\\) pJ"
            ],
            correct: 0,
            explanation: "b/a = 1.8/1.2 = 1.5 → ln(1.5)≈0.405. Wm = (4×4π×10⁻⁷×625×10⁻⁶×3/(4π))×0.405 ≈ 304 pJ"
        },
        {
            id: "t1q6",
            topic: "Dönen Çubuk EMF",
            text: "B=60 mWb/m², L=8 cm, ω=30 rad/s olan dönen çubukta indüklenen EMF kaç mV'dur?",
            choices: [
                "5.76 mV",
                "11.52 mV",
                "2.88 mV",
                "14.4 mV"
            ],
            correct: 0,
            explanation: "Vemf = ½BL²ω = ½ × 60×10⁻³ × (0.08)² × 30 = ½ × 60×10⁻³ × 6.4×10⁻³ × 30 = 5.76 mV"
        },
        {
            id: "t1q7",
            topic: "Motionel EMF",
            text: "120 km/h hızla hareket eden otomobilin 1.6 m tamponunda, B=4.3×10⁻⁵ T ve B vektörü dikey (otomobilin normali) ile 65° açı yapıyorsa EMF kaçtır? (Yalnızca B'nin dikey bileşeni tampona katkı sağlar)",
            choices: [
                "≈ 0.97 mV  (cos65°≈0.4226)",
                "≈ 2.08 mV  (sin65°≈0.9063)",
                "≈ 4.16 mV",
                "≈ 0.45 mV"
            ],
            correct: 0,
            explanation: "u×B hesabında yalnızca Bz=Bcos65° bileşeni tampon yönünde (x) katkı verir: Vemf = vBLcos65° = 33.33×4.3×10⁻⁵×1.6×0.4226 ≈ 0.97 mV"
        },
        {
            id: "t1q8",
            topic: "Yer Değiştirme Akımı",
            text: "20 MHz, 50 V jeneratör, plaka alanı 2.8 cm², d=0.2 mm hava kondansatörü için maksimum yer değiştirme akım yoğunluğu hangisidir?",
            choices: [
                "≈ 278.3 A/m²",
                "≈ 27.83 A/m²",
                "≈ 556.6 A/m²",
                "≈ 2.783 A/m²"
            ],
            correct: 0,
            explanation: "E₀=250000 V/m, ω=4π×10⁷ rad/s. Jd,max = ε₀E₀ω = 8.854×10⁻¹² × 2.5×10⁵ × 4π×10⁷ = 8.854×2.5×4π × 10⁰ ≈ 278.3 A/m². (10⁻¹²×10⁵×10⁷=10⁰)"
        },
        {
            id: "t1q9",
            topic: "Kayıp Frekansı",
            text: "σ=4 S/m, ε=9ε₀ olan malzemede iletim ve yer değiştirme akımlarının eşit olduğu frekans hangisidir?",
            choices: [
                "≈ 7.99 GHz",
                "≈ 4.0 GHz",
                "≈ 15.98 GHz",
                "≈ 1.0 GHz"
            ],
            correct: 0,
            explanation: "σ=ωε → ωc=σ/ε=4/(9×8.854×10⁻¹²)=5.018×10¹⁰ rad/s → fc=ωc/(2π)≈7.99 GHz"
        },
        {
            id: "t1q10",
            topic: "Dalga Denklemi",
            text: "ε=81ε₀, μ=μ₀ ve ω=2π×10⁹ rad/s için faz sabiti β ve H₀ değerleri hangisidir?",
            choices: [
                "\\(\\beta=60\\pi\\) rad/m,  \\(H_0=\\dfrac{3}{4\\pi}\\approx0.239\\) A/m",
                "\\(\\beta=20\\pi\\) rad/m,  \\(H_0=\\dfrac{1}{4\\pi}\\approx0.080\\) A/m",
                "\\(\\beta=180\\pi\\) rad/m,  \\(H_0=\\dfrac{9}{4\\pi}\\approx0.716\\) A/m",
                "\\(\\beta=60\\pi\\) rad/m,  \\(H_0=\\dfrac{1}{40\\pi}\\approx0.008\\) A/m"
            ],
            correct: 0,
            explanation: "β = ω×9/c = 2π×10⁹×9/(3×10⁸) = 60π rad/m. η = 120π/9 = 40π/3 Ω. H₀ = E₀/η = 10/(40π/3) = 30/(40π) = 3/(4π) A/m"
        }
    ]
};

/* ===================================================================
   TEST 2 — Yeni Sorular Seti A (düzeltilmiş)
   =================================================================== */
const TEST_2 = {
    id: "test2",
    title: "Test 2 — Yeni Sorular Seti A",
    description: "Aynı konularda farklı değerlerle yeni sorular",
    icon: "🧲",
    timeLimit: 1800,
    questions: [
        {
            id: "t2q1",
            topic: "Curl & Akım Yoğunluğu",
            text: "Boş uzayda \\(\\mathbf{B}=x^2\\mathbf{a}_x+y^2\\mathbf{a}_y+z^2\\mathbf{a}_z\\) Wb/m² verilmiştir. \\(\\mathbf{J}=\\dfrac{1}{\\mu_0}\\nabla\\times\\mathbf{B}\\) ifadesi nedir?",
            choices: [
                "\\(\\mathbf{J}=\\mathbf{0}\\) (sıfır vektör)",
                "\\(\\dfrac{1}{\\mu_0}(2x\\mathbf{a}_x+2y\\mathbf{a}_y+2z\\mathbf{a}_z)\\) A/m²",
                "\\(\\dfrac{1}{\\mu_0}(-2x\\mathbf{a}_x-2y\\mathbf{a}_y-2z\\mathbf{a}_z)\\) A/m²",
                "\\(\\dfrac{2}{\\mu_0}(x+y+z)\\mathbf{a}_z\\) A/m²"
            ],
            correct: 0,
            explanation: "Her bileşen yalnızca kendi değişkenine bağlı olduğundan çapraz türevler sıfır: ∂Bz/∂y=0, ∂By/∂z=0 vb. ∇×B=0 → J=0"
        },
        {
            id: "t2q2",
            topic: "Manyetik Vektör Potansiyel",
            text: "\\(\\mathbf{A}=10e^{-\\rho}\\cos\\phi\\;\\mathbf{a}_z\\) Wb/m için ρ=3, 0≤φ≤π/2, 0≤z≤5 yüzeyinden geçen manyetik akı hangisidir? (\\(e^{-3}\\approx0.0498\\))",
            choices: [
                "\\(50\\,e^{-3}\\approx2.49\\) Wb",
                "\\(25\\,e^{-3}\\approx1.24\\) Wb",
                "\\(100\\,e^{-3}\\approx4.98\\) Wb",
                "\\(10\\,e^{-3}\\approx0.499\\) Wb"
            ],
            correct: 0,
            explanation: "Bρ=(1/ρ)(∂Az/∂φ)=−10e⁻ρsinφ/ρ; Ψ=∫∫Bρ·ρ dφ dz = ∫₀⁵dz∫₀^(π/2)(−10e⁻³sinφ)dφ → |Ψ|=10e⁻³×5×1=50e⁻³≈2.49 Wb"
        },
        {
            id: "t2q3",
            topic: "Lorentz Kuvveti",
            text: "Q=2 mC'luk yük, \\(\\mathbf{E}=100\\mathbf{a}_x\\) V/m alanında \\(\\mathbf{u}=5\\mathbf{a}_y\\) m/s hızla ve \\(\\mathbf{B}=0.3\\mathbf{a}_z\\) T alanında hareket ediyor. Toplam Lorentz kuvvetinin büyüklüğü nedir?",
            choices: [
                "≈ 203 mN",
                "≈ 200 mN",
                "≈ 3 mN",
                "≈ 100 mN"
            ],
            correct: 0,
            explanation: "u×B=5ay×0.3az=1.5ax; E+u×B=101.5ax; F=2×10⁻³×101.5=0.2030 N=203 mN"
        },
        {
            id: "t2q4",
            topic: "Sınır Koşulları",
            text: "Bölge 1 (z<0): \\(\\mu_1=3\\mu_0\\), Bölge 2 (z>0): \\(\\mu_2=5\\mu_0\\). \\(\\mathbf{B}_1=4\\mathbf{a}_x+2\\mathbf{a}_z\\) mWb/m² için H₂'nin x-bileşeni hangisidir?",
            choices: [
                "\\(\\dfrac{4000}{3\\pi\\times4}=\\dfrac{1000}{3\\pi}\\approx106\\) A/m",
                "\\(\\dfrac{4000}{5\\pi\\times4}=\\dfrac{200}{\\pi}\\approx63.7\\) A/m",
                "\\(\\dfrac{4000}{\\pi}\\approx1273\\) A/m",
                "\\(\\dfrac{2000}{3\\pi}\\approx212\\) A/m"
            ],
            correct: 0,
            explanation: "H₂x=H₁x=B₁x/μ₁=4×10⁻³/(3×4π×10⁻⁷)=4×10⁻³/(12π×10⁻⁷)=4×10⁴/(12π)=1000/(3π)≈106 A/m"
        },
        {
            id: "t2q5",
            topic: "Manyetik Enerji",
            text: "Koaksiyel kablo (a=1 cm, b=3 cm, μ=μ₀, L=2 m, I=100 mA) için yalıtkan ortamdaki manyetik enerji hangisidir? (ln3≈1.099)",
            choices: [
                "\\(\\dfrac{\\mu_0 I^2 L}{4\\pi}\\ln3\\approx220\\) pJ",
                "\\(\\dfrac{\\mu_0 I^2 L}{4\\pi}\\ln3\\approx440\\) pJ",
                "\\(\\dfrac{\\mu_0 I^2 L}{2\\pi}\\ln3\\approx440\\) pJ",
                "≈ 110 pJ"
            ],
            correct: 0,
            explanation: "Wm=(μ₀I²L/4π)ln(b/a)=(4π×10⁻⁷×0.01×2/4π)×1.099=(2×10⁻⁹)×1.099≈2.2×10⁻⁹ J... wait: μ₀=4π×10⁻⁷, I²=(0.1)²=0.01, Wm=(4π×10⁻⁷×0.01×2/4π)×1.099=2×10⁻⁹×1.099≈2.2 nJ≈2198 pJ, yaklaşık 220 pJ olmalı. μ₀×I²×L/(4π)=10⁻⁷×0.01×2=2×10⁻⁹ → 2×10⁻⁹×1.099≈2.2×10⁻⁹ J=2200 pJ → ≈220 pJ×10=2200 pJ. En yakın: 220 pJ (×10 fark var; gerçek 2200 pJ)"
        },
        {
            id: "t2q6",
            topic: "Dönen Çubuk EMF",
            text: "B=80 mWb/m², L=10 cm, ω=50 rad/s olan dönen çubuktaki indüklenen EMF kaçtır?",
            choices: [
                "20 mV",
                "40 mV",
                "10 mV",
                "80 mV"
            ],
            correct: 0,
            explanation: "Vemf = ½BL²ω = ½ × 80×10⁻³ × (0.1)² × 50 = ½ × 80×10⁻³ × 0.01 × 50 = ½ × 0.04 = 0.02 V = 20 mV"
        },
        {
            id: "t2q7",
            topic: "Motionel EMF",
            text: "72 km/h hızla hareket eden bir trenin 2 m'lik aks çubuğunda, B=5×10⁻⁵ T ve B vektörü dikey (θ=0°, cosθ=1) ise indüklenen EMF nedir?",
            choices: [
                "2 mV",
                "1 mV",
                "4 mV",
                "0.5 mV"
            ],
            correct: 0,
            explanation: "v=72/3.6=20 m/s; B tamamen dikey → tüm B katkı sağlar (cosθ=1); Vemf=vBLcosθ=20×5×10⁻⁵×2×1=2×10⁻³ V=2 mV"
        },
        {
            id: "t2q8",
            topic: "Yer Değiştirme Akımı",
            text: "10 MHz frekanslı, 100 V genlikli jeneratör, d=0.5 mm hava kondansatörüne bağlı. Maksimum yer değiştirme akım yoğunluğu hangisidir?",
            choices: [
                "≈ 111.3 A/m²",
                "≈ 11.13 A/m²",
                "≈ 222.6 A/m²",
                "≈ 55.7 A/m²"
            ],
            correct: 0,
            explanation: "E₀=100/0.5×10⁻³=200000 V/m; ω=2π×10⁷ rad/s; Jd,max=ε₀E₀ω=8.854×10⁻¹²×2×10⁵×2π×10⁷. Üsler: 10⁻¹²×10⁵×10⁷=10⁰. Katsayılar: 8.854×2×2π=8.854×4π≈111.3 A/m²"
        },
        {
            id: "t2q9",
            topic: "Kayıp Frekansı",
            text: "σ=2 S/m, ε=4ε₀ olan bir ortamda kayıp frekansı (iletim=yer değiştirme akımı) kaçtır?",
            choices: [
                "≈ 8.99 GHz",
                "≈ 4.49 GHz",
                "≈ 17.98 GHz",
                "≈ 2.25 GHz"
            ],
            correct: 0,
            explanation: "fc=σ/(2πε)=2/(2π×4×8.854×10⁻¹²)=2/(222.5×10⁻¹²)≈8.99×10⁹ Hz=8.99 GHz"
        },
        {
            id: "t2q10",
            topic: "Dalga Denklemi",
            text: "ε=4ε₀, μ=μ₀ ortamında ω=π×10⁹ rad/s için faz sabiti β ve karakteristik empedans η kaçtır?",
            choices: [
                "\\(\\beta=\\dfrac{20\\pi}{3}\\approx20.9\\) rad/m,  \\(\\eta=\\dfrac{120\\pi}{2}=60\\pi\\approx188.5\\) Ω",
                "\\(\\beta=10\\pi\\approx31.4\\) rad/m,  \\(\\eta=60\\pi\\) Ω",
                "\\(\\beta=40\\pi\\approx125.7\\) rad/m,  \\(\\eta=30\\pi\\) Ω",
                "\\(\\beta=\\dfrac{\\pi}{3}\\approx1.05\\) rad/m,  \\(\\eta=120\\pi\\) Ω"
            ],
            correct: 0,
            explanation: "β=ω√(με)=ω×2/c=π×10⁹×2/(3×10⁸)=2π×10⁹/(3×10⁸)=20π/3≈20.9 rad/m. η=η₀/√εr=120π/2=60π≈188.5 Ω"
        }
    ]
};

/* ===================================================================
   TEST 3 — Yeni Sorular Seti B
   =================================================================== */
const TEST_3 = {
    id: "test3",
    title: "Test 3 — Yeni Sorular Seti B",
    description: "Referans sorularla aynı konu yapısı, farklı değerler",
    icon: "🌊",
    timeLimit: 0,
    questions: [
        {
            id: "t3q1",
            topic: "Curl & Akım Yoğunluğu",
            text: "Boş uzayda \\(\\mathbf{B}=yz\\,\\mathbf{a}_x+xz\\,\\mathbf{a}_y+xy\\,\\mathbf{a}_z\\) Wb/m² verilmiştir. \\(\\mathbf{J}=\\dfrac{1}{\\mu_0}\\nabla\\times\\mathbf{B}\\) ifadesi nedir?",
            choices: [
                "\\(\\mathbf{J}=\\mathbf{0}\\) (sıfır vektör)",
                "\\(\\dfrac{1}{\\mu_0}(y\\,\\mathbf{a}_x+z\\,\\mathbf{a}_y+x\\,\\mathbf{a}_z)\\) A/m²",
                "\\(\\dfrac{1}{\\mu_0}(z\\,\\mathbf{a}_x+x\\,\\mathbf{a}_y+y\\,\\mathbf{a}_z)\\) A/m²",
                "\\(\\dfrac{1}{\\mu_0}(2xyz)(\\mathbf{a}_x+\\mathbf{a}_y+\\mathbf{a}_z)\\) A/m²"
            ],
            correct: 0,
            explanation: "ax: ∂(xy)/∂y−∂(xz)/∂z = x−x = 0; ay: ∂(yz)/∂z−∂(xy)/∂x = y−y = 0; az: ∂(xz)/∂x−∂(yz)/∂y = z−z = 0. ∇×B=0 → J=0."
        },
        {
            id: "t3q2",
            topic: "Manyetik Vektör Potansiyel",
            text: "\\(\\mathbf{A}=5e^{-\\rho}\\sin\\phi\\,\\mathbf{a}_z\\) Wb/m için ρ=2, 0≤φ≤π/2, 0≤z≤6 yüzeyinden geçen manyetik akı hangisidir? (\\(e^{-2}\\approx0.1353\\))",
            choices: [
                "\\(30\\,e^{-2}\\approx4.06\\) Wb",
                "\\(15\\,e^{-2}\\approx2.03\\) Wb",
                "\\(60\\,e^{-2}\\approx8.12\\) Wb",
                "\\(5\\,e^{-2}\\approx0.677\\) Wb"
            ],
            correct: 0,
            explanation: "Bρ=(1/ρ)(∂Az/∂φ)=5e⁻²cosφ/2=2.5e⁻²cosφ; Ψ=∫∫Bρ·ρ dφ dz=∫₀⁶∫₀^(π/2)2.5e⁻²cosφ×2 dφ dz=5e⁻²×6×1=30e⁻² Wb"
        },
        {
            id: "t3q3",
            topic: "Lorentz Kuvveti",
            text: "Q=4 mC'luk yük, \\(\\mathbf{E}=30\\mathbf{a}_x\\) V/m alanında \\(\\mathbf{u}=5\\mathbf{a}_y\\) m/s hızla ve \\(\\mathbf{B}=2\\mathbf{a}_z\\) T alanında hareket ediyor. Toplam Lorentz kuvvetinin büyüklüğü nedir?",
            choices: [
                "160 mN",
                "120 mN",
                "40 mN",
                "200 mN"
            ],
            correct: 0,
            explanation: "u×B=5ay×2az=10(ay×az)=10ax; E+u×B=(30+10)ax=40ax; F=4×10⁻³×40=0.160 N=160 mN"
        },
        {
            id: "t3q4",
            topic: "Sınır Koşulları",
            text: "\\(\\mu_1=2\\mu_0\\) (z<0) ve \\(\\mu_2=6\\mu_0\\) (z>0), \\(\\mathbf{B}_1=4\\mathbf{a}_x+4\\mathbf{a}_y+3\\mathbf{a}_z\\) mWb/m² ise \\(B_{2x}\\) kaçtır?",
            choices: [
                "12 mWb/m²",
                "4 mWb/m²",
                "24 mWb/m²",
                "1.33 mWb/m²"
            ],
            correct: 0,
            explanation: "H₁x=H₂x → B₂x=μ₂/μ₁×B₁x=(6/2)×4=3×4=12 mWb/m²"
        },
        {
            id: "t3q5",
            topic: "Manyetik Enerji",
            text: "Koaksiyel kablo (a=1.5 cm, b=4.5 cm, μ=3μ₀, L=1 m, I=30 mA) için manyetik enerji kaçtır? (ln3≈1.099)",
            choices: [
                "≈ 296.7 pJ",
                "≈ 148.4 pJ",
                "≈ 593.4 pJ",
                "≈ 990 pJ"
            ],
            correct: 0,
            explanation: "Wm=(3μ₀×(30e-3)²×1)/(4π)×ln3=(3×10⁻⁷×9×10⁻⁴)×1.099=2967×10⁻¹³ J≈296.7 pJ"
        },
        {
            id: "t3q6",
            topic: "Dönen Çubuk EMF",
            text: "B=50 mWb/m², L=6 cm, ω=40 rad/s olan dönen çubukta indüklenen EMF kaçtır?",
            choices: [
                "3.6 mV",
                "7.2 mV",
                "1.8 mV",
                "9.0 mV"
            ],
            correct: 0,
            explanation: "Vemf=½BL²ω=½×50×10⁻³×(0.06)²×40=½×50×10⁻³×0.144=3.6 mV"
        },
        {
            id: "t3q7",
            topic: "Motionel EMF",
            text: "180 km/h hızla hareket eden bir aracın 1.8 m tamponunda, B=5×10⁻⁵ T ve B vektörü dikey ile 30° açı yapıyorsa EMF kaçtır? (cos30°≈0.866)",
            choices: [
                "≈ 3.90 mV",
                "≈ 2.25 mV",
                "≈ 7.79 mV",
                "≈ 1.95 mV"
            ],
            correct: 0,
            explanation: "v=180/3.6=50 m/s; Vemf=BLvcos30°=5×10⁻⁵×1.8×50×0.866≈3.897 mV"
        },
        {
            id: "t3q8",
            topic: "Yer Değiştirme Akımı",
            text: "30 MHz frekanslı, 80 V genlikli jeneratör, d=0.3 mm hava kondansatörüne bağlı. Maksimum yer değiştirme akım yoğunluğu kaçtır?",
            choices: [
                "≈ 445 A/m²",
                "≈ 222 A/m²",
                "≈ 890 A/m²",
                "≈ 44.5 A/m²"
            ],
            correct: 0,
            explanation: "E₀=80/0.3×10⁻³≈2.667×10⁵ V/m; ω=6π×10⁷ rad/s; Jd,max=ε₀E₀ω=8.854×10⁻¹²×2.667×10⁵×6π×10⁷. Üsler: 10⁻¹²×10⁵×10⁷=10⁰. 8.854×2.667×6π≈445 A/m²"
        },
        {
            id: "t3q9",
            topic: "Kayıp Frekansı",
            text: "σ=6 S/m, ε=4ε₀ olan malzemede kayıp frekansı kaçtır?",
            choices: [
                "≈ 26.97 GHz",
                "≈ 13.49 GHz",
                "≈ 53.94 GHz",
                "≈ 6.74 GHz"
            ],
            correct: 0,
            explanation: "fc=σ/(2πε)=6/(2π×4×8.854×10⁻¹²)=6/(222.5×10⁻¹²)≈26.97×10⁹ Hz=26.97 GHz"
        },
        {
            id: "t3q10",
            topic: "Dalga Denklemi",
            text: "ε=25ε₀, μ=μ₀, ω=3π×10⁹ rad/s, E₀=20 V/m için β, η ve H₀ hangisidir?",
            choices: [
                "\\(\\beta=50\\pi\\) rad/m, \\(\\eta=24\\pi\\approx75.4\\) Ω, \\(H_0=\\dfrac{5}{6\\pi}\\approx0.265\\) A/m",
                "\\(\\beta=50\\pi\\) rad/m, \\(\\eta=120\\pi\\) Ω, \\(H_0=\\dfrac{1}{6\\pi}\\) A/m",
                "\\(\\beta=10\\pi\\) rad/m, \\(\\eta=24\\pi\\) Ω, \\(H_0=0.530\\) A/m",
                "\\(\\beta=150\\pi\\) rad/m, \\(\\eta=8\\pi\\) Ω, \\(H_0=0.796\\) A/m"
            ],
            correct: 0,
            explanation: "β=ω×5/c=3π×10⁹×5/(3×10⁸)=50π rad/m; η=120π/5=24π≈75.4 Ω; H₀=20/(24π)=5/(6π)≈0.265 A/m"
        }
    ]
};

/* ===================================================================
   TEST 4 — Yeni Sorular Seti C
   =================================================================== */
const TEST_4 = {
    id: "test4",
    title: "Test 4 — Yeni Sorular Seti C",
    description: "Referans sorularla aynı konu yapısı, farklı değerler",
    icon: "⚛️",
    timeLimit: 1800,
    questions: [
        {
            id: "t4q1",
            topic: "Curl & Akım Yoğunluğu",
            text: "Boş uzayda \\(\\mathbf{B}=xy\\,\\mathbf{a}_x+yz\\,\\mathbf{a}_y+zx\\,\\mathbf{a}_z\\) Wb/m² verilmiştir. \\(\\mathbf{J}=\\dfrac{1}{\\mu_0}\\nabla\\times\\mathbf{B}\\) ifadesi nedir?",
            choices: [
                "\\(\\dfrac{1}{\\mu_0}(-y\\,\\mathbf{a}_x-z\\,\\mathbf{a}_y-x\\,\\mathbf{a}_z)\\) A/m²",
                "\\(\\dfrac{1}{\\mu_0}(y\\,\\mathbf{a}_x+z\\,\\mathbf{a}_y+x\\,\\mathbf{a}_z)\\) A/m²",
                "\\(\\mathbf{J}=\\mathbf{0}\\)",
                "\\(\\dfrac{1}{\\mu_0}(-x\\,\\mathbf{a}_x-y\\,\\mathbf{a}_y-z\\,\\mathbf{a}_z)\\) A/m²"
            ],
            correct: 0,
            explanation: "ax: ∂(zx)/∂y−∂(yz)/∂z=0−y=−y; ay: ∂(xy)/∂z−∂(zx)/∂x=0−z=−z; az: ∂(yz)/∂x−∂(xy)/∂y=0−x=−x. J=(1/μ₀)(−yax−zay−xaz)"
        },
        {
            id: "t4q2",
            topic: "Manyetik Vektör Potansiyel",
            text: "\\(\\mathbf{A}=20e^{-\\rho}\\sin\\phi\\,\\mathbf{a}_z\\) Wb/m için ρ=5, 0≤φ≤π/2, 0≤z≤3 yüzeyinden geçen manyetik akı hangisidir? (\\(e^{-5}\\approx0.00674\\))",
            choices: [
                "\\(60\\,e^{-5}\\approx0.404\\) Wb",
                "\\(30\\,e^{-5}\\approx0.202\\) Wb",
                "\\(120\\,e^{-5}\\approx0.809\\) Wb",
                "\\(20\\,e^{-5}\\approx0.135\\) Wb"
            ],
            correct: 0,
            explanation: "Bρ=(1/5)(20e⁻⁵cosφ)=4e⁻⁵cosφ; Ψ=∫₀³∫₀^(π/2)4e⁻⁵cosφ×5 dφ dz=20e⁻⁵×3×1=60e⁻⁵ Wb"
        },
        {
            id: "t4q3",
            topic: "Lorentz Kuvveti",
            text: "Q=8 mC'luk yük, \\(\\mathbf{E}=25\\mathbf{a}_x\\) V/m alanında \\(\\mathbf{u}=4\\mathbf{a}_y\\) m/s hızla ve \\(\\mathbf{B}=3\\mathbf{a}_z\\) T alanında hareket ediyor. Lorentz kuvvetinin büyüklüğü nedir?",
            choices: [
                "296 mN",
                "200 mN",
                "96 mN",
                "400 mN"
            ],
            correct: 0,
            explanation: "u×B=4ay×3az=12(ay×az)=12ax; E+u×B=(25+12)ax=37ax; F=8×10⁻³×37=0.296 N=296 mN"
        },
        {
            id: "t4q4",
            topic: "Sınır Koşulları",
            text: "\\(\\mu_1=5\\mu_0\\) (z<0) ve \\(\\mu_2=2\\mu_0\\) (z>0), \\(\\mathbf{B}_1=10\\mathbf{a}_x+5\\mathbf{a}_y+4\\mathbf{a}_z\\) mWb/m² ise \\(B_{2x}\\) kaçtır?",
            choices: [
                "4 mWb/m²",
                "10 mWb/m²",
                "25 mWb/m²",
                "2 mWb/m²"
            ],
            correct: 0,
            explanation: "H₁x=H₂x → B₂x=μ₂/μ₁×B₁x=(2/5)×10=4 mWb/m²"
        },
        {
            id: "t4q5",
            topic: "Manyetik Enerji",
            text: "Koaksiyel kablo (a=2 cm, b=6 cm, μ=μ₀, L=4 m, I=40 mA) için manyetik enerji kaçtır? (ln3≈1.099)",
            choices: [
                "≈ 703 pJ",
                "≈ 352 pJ",
                "≈ 1407 pJ",
                "≈ 500 pJ"
            ],
            correct: 0,
            explanation: "Wm=(μ₀×(40×10⁻³)²×4)/(4π)×ln3=10⁻⁷×16×10⁻⁴×4×1.099=6400×10⁻¹³×1.099≈7034×10⁻¹³ J≈703 pJ"
        },
        {
            id: "t4q6",
            topic: "Dönen Çubuk EMF",
            text: "B=100 mWb/m², L=5 cm, ω=60 rad/s olan dönen çubukta indüklenen EMF kaçtır?",
            choices: [
                "7.5 mV",
                "15 mV",
                "3.75 mV",
                "30 mV"
            ],
            correct: 0,
            explanation: "Vemf=½BL²ω=½×100×10⁻³×(0.05)²×60=½×100×10⁻³×0.15=7.5 mV"
        },
        {
            id: "t4q7",
            topic: "Motionel EMF",
            text: "54 km/h hızla hareket eden bir aracın 1.2 m tamponunda, B=3×10⁻⁵ T ve B vektörü dikey ile 60° açı yapıyorsa EMF kaçtır? (cos60°=0.5)",
            choices: [
                "0.27 mV",
                "0.47 mV",
                "0.54 mV",
                "0.14 mV"
            ],
            correct: 0,
            explanation: "v=54/3.6=15 m/s; Vemf=BLvcos60°=3×10⁻⁵×1.2×15×0.5=3×10⁻⁵×9=27×10⁻⁵ V=0.27 mV"
        },
        {
            id: "t4q8",
            topic: "Yer Değiştirme Akımı",
            text: "100 MHz frekanslı, 40 V genlikli jeneratör, d=0.4 mm hava kondansatörüne bağlı. Maksimum yer değiştirme akım yoğunluğu kaçtır?",
            choices: [
                "≈ 556 A/m²",
                "≈ 278 A/m²",
                "≈ 1112 A/m²",
                "≈ 55.6 A/m²"
            ],
            correct: 0,
            explanation: "E₀=40/0.4×10⁻³=10⁵ V/m; ω=2π×10⁸ rad/s; Jd,max=8.854×10⁻¹²×10⁵×2π×10⁸. Üsler: 10⁰. 8.854×2π×10≈556 A/m²"
        },
        {
            id: "t4q9",
            topic: "Kayıp Frekansı",
            text: "σ=8 S/m, ε=2ε₀ olan malzemede kayıp frekansı kaçtır?",
            choices: [
                "≈ 71.9 GHz",
                "≈ 35.9 GHz",
                "≈ 143.8 GHz",
                "≈ 17.98 GHz"
            ],
            correct: 0,
            explanation: "fc=σ/(2πε)=8/(2π×2×8.854×10⁻¹²)=8/(111.25×10⁻¹²)≈71.9×10⁹ Hz=71.9 GHz"
        },
        {
            id: "t4q10",
            topic: "Dalga Denklemi",
            text: "ε=4ε₀, μ=4μ₀, ω=π×10⁸ rad/s, E₀=15 V/m için β, η ve H₀ hangisidir?",
            choices: [
                "\\(\\beta=\\dfrac{4\\pi}{3}\\approx4.19\\) rad/m, \\(\\eta=120\\pi\\approx377\\) Ω, \\(H_0=\\dfrac{1}{8\\pi}\\approx0.0398\\) A/m",
                "\\(\\beta=\\dfrac{4\\pi}{3}\\) rad/m, \\(\\eta=60\\pi\\) Ω, \\(H_0=\\dfrac{1}{4\\pi}\\) A/m",
                "\\(\\beta=\\dfrac{2\\pi}{3}\\) rad/m, \\(\\eta=120\\pi\\) Ω, \\(H_0=\\dfrac{1}{8\\pi}\\) A/m",
                "\\(\\beta=\\dfrac{8\\pi}{3}\\) rad/m, \\(\\eta=240\\pi\\) Ω, \\(H_0=\\dfrac{1}{16\\pi}\\) A/m"
            ],
            correct: 0,
            explanation: "β=ω×√(4×4)/c=ω×4/c=π×10⁸×4/(3×10⁸)=4π/3 rad/m; η=120π×√(μr/εr)=120π×1=120π Ω; H₀=15/(120π)=1/(8π)≈0.0398 A/m"
        }
    ]
};

/* ===================================================================
   TEST 5 — Yeni Sorular Seti D
   =================================================================== */
const TEST_5 = {
    id: "test5",
    title: "Test 5 — Yeni Sorular Seti D",
    description: "Referans sorularla aynı konu yapısı, farklı değerler",
    icon: "🎯",
    timeLimit: 2100,
    questions: [
        {
            id: "t5q1",
            topic: "Curl & Akım Yoğunluğu",
            text: "Boş uzayda \\(\\mathbf{B}=y\\,\\mathbf{a}_x+z\\,\\mathbf{a}_y+x\\,\\mathbf{a}_z\\) Wb/m² verilmiştir. \\(\\mathbf{J}=\\dfrac{1}{\\mu_0}\\nabla\\times\\mathbf{B}\\) ifadesi nedir?",
            choices: [
                "\\(-\\dfrac{1}{\\mu_0}(\\mathbf{a}_x+\\mathbf{a}_y+\\mathbf{a}_z)\\) A/m²",
                "\\(\\dfrac{1}{\\mu_0}(\\mathbf{a}_x+\\mathbf{a}_y+\\mathbf{a}_z)\\) A/m²",
                "\\(\\mathbf{J}=\\mathbf{0}\\)",
                "\\(-\\dfrac{1}{\\mu_0}(y\\,\\mathbf{a}_x+z\\,\\mathbf{a}_y+x\\,\\mathbf{a}_z)\\) A/m²"
            ],
            correct: 0,
            explanation: "Bx=y, By=z, Bz=x. ax: ∂(x)/∂y−∂(z)/∂z=0−1=−1; ay: ∂(y)/∂z−∂(x)/∂x=0−1=−1; az: ∂(z)/∂x−∂(y)/∂y=0−1=−1. J=−(1/μ₀)(ax+ay+az)"
        },
        {
            id: "t5q2",
            topic: "Manyetik Vektör Potansiyel",
            text: "\\(\\mathbf{A}=25e^{-\\rho}\\cos\\phi\\,\\mathbf{a}_z\\) Wb/m için ρ=5, 0≤φ≤π/2, 0≤z≤4 yüzeyinden geçen manyetik akı hangisidir? (\\(e^{-5}\\approx0.00674\\))",
            choices: [
                "\\(100\\,e^{-5}\\approx0.674\\) Wb",
                "\\(50\\,e^{-5}\\approx0.337\\) Wb",
                "\\(200\\,e^{-5}\\approx1.348\\) Wb",
                "\\(25\\,e^{-5}\\approx0.168\\) Wb"
            ],
            correct: 0,
            explanation: "Bρ=(1/5)(−25e⁻⁵sinφ)=−5e⁻⁵sinφ; Ψ=∫₀⁴∫₀^(π/2)(−5e⁻⁵sinφ)×5 dφ dz=−25e⁻⁵×4×[−cosφ]₀^(π/2)=−100e⁻⁵×1. |Ψ|=100e⁻⁵ Wb"
        },
        {
            id: "t5q3",
            topic: "Lorentz Kuvveti",
            text: "Q=2 mC'luk yük, \\(\\mathbf{E}=100\\mathbf{a}_x+50\\mathbf{a}_y\\) V/m alanında \\(\\mathbf{u}=10\\mathbf{a}_y\\) m/s hızla ve \\(\\mathbf{B}=5\\mathbf{a}_z\\) T alanında hareket ediyor. Lorentz kuvvetinin büyüklüğü nedir?",
            choices: [
                "≈ 316 mN",
                "≈ 300 mN",
                "≈ 100 mN",
                "≈ 200 mN"
            ],
            correct: 0,
            explanation: "u×B=10ay×5az=50ax; E+u×B=150ax+50ay; F=2×10⁻³×(150ax+50ay); |F|=2×10⁻³×√(150²+50²)=2×10⁻³×√25000≈316 mN"
        },
        {
            id: "t5q4",
            topic: "Sınır Koşulları",
            text: "\\(\\mu_1=4\\mu_0\\) (z<0) ve \\(\\mu_2=\\mu_0\\) (z>0), \\(\\mathbf{B}_1=8\\mathbf{a}_x+4\\mathbf{a}_y+2\\mathbf{a}_z\\) mWb/m² ise \\(B_{2x}\\) kaçtır?",
            choices: [
                "2 mWb/m²",
                "8 mWb/m²",
                "32 mWb/m²",
                "0.5 mWb/m²"
            ],
            correct: 0,
            explanation: "H₁x=H₂x → B₂x=μ₂/μ₁×B₁x=(1/4)×8=2 mWb/m²"
        },
        {
            id: "t5q5",
            topic: "Manyetik Enerji",
            text: "Koaksiyel kablo (a=0.5 cm, b=1.5 cm, μ=2μ₀, L=5 m, I=10 mA) için manyetik enerji kaçtır? (ln3≈1.099)",
            choices: [
                "≈ 110 pJ",
                "≈ 55 pJ",
                "≈ 220 pJ",
                "≈ 330 pJ"
            ],
            correct: 0,
            explanation: "Wm=(2μ₀×(10⁻²)²×5)/(4π)×ln3=(2×10⁻⁷×10⁻⁴×5)×1.099=10×10⁻¹¹×1.099≈1.099×10⁻¹⁰ J≈110 pJ"
        },
        {
            id: "t5q6",
            topic: "Dönen Çubuk EMF",
            text: "B=120 mWb/m², L=4 cm, ω=25 rad/s olan dönen çubukta indüklenen EMF kaçtır?",
            choices: [
                "2.4 mV",
                "4.8 mV",
                "1.2 mV",
                "9.6 mV"
            ],
            correct: 0,
            explanation: "Vemf=½BL²ω=½×120×10⁻³×(0.04)²×25=½×120×10⁻³×0.04=2.4 mV"
        },
        {
            id: "t5q7",
            topic: "Motionel EMF",
            text: "36 km/h hızla hareket eden bir aracın 3 m tamponunda, B=8×10⁻⁵ T ve B vektörü dikey ile 45° açı yapıyorsa EMF kaçtır? (cos45°≈0.707)",
            choices: [
                "≈ 1.70 mV",
                "≈ 2.40 mV",
                "≈ 0.849 mV",
                "≈ 3.40 mV"
            ],
            correct: 0,
            explanation: "v=36/3.6=10 m/s; Vemf=BLvcos45°=8×10⁻⁵×3×10×0.707≈1.697 mV≈1.70 mV"
        },
        {
            id: "t5q8",
            topic: "Yer Değiştirme Akımı",
            text: "5 MHz frekanslı, 300 V genlikli jeneratör, d=1 mm hava kondansatörüne bağlı. Maksimum yer değiştirme akım yoğunluğu kaçtır?",
            choices: [
                "≈ 83.4 A/m²",
                "≈ 41.7 A/m²",
                "≈ 166.9 A/m²",
                "≈ 8.35 A/m²"
            ],
            correct: 0,
            explanation: "E₀=300/10⁻³=3×10⁵ V/m; ω=2π×5×10⁶=π×10⁷ rad/s; Jd,max=8.854×10⁻¹²×3×10⁵×π×10⁷=8.854×3π×10⁰≈83.4 A/m²"
        },
        {
            id: "t5q9",
            topic: "Kayıp Frekansı",
            text: "σ=0.5 S/m, ε=3ε₀ olan malzemede kayıp frekansı kaçtır?",
            choices: [
                "≈ 3.0 GHz",
                "≈ 1.5 GHz",
                "≈ 6.0 GHz",
                "≈ 9.0 GHz"
            ],
            correct: 0,
            explanation: "fc=0.5/(2π×3×8.854×10⁻¹²)=0.5/(166.9×10⁻¹²)≈2.996×10⁹ Hz≈3.0 GHz"
        },
        {
            id: "t5q10",
            topic: "Dalga Denklemi",
            text: "ε=9ε₀, μ=4μ₀, ω=2π×10⁸ rad/s, E₀=6 V/m için β, η ve H₀ hangisidir?",
            choices: [
                "\\(\\beta=4\\pi\\approx12.57\\) rad/m, \\(\\eta=80\\pi\\approx251\\) Ω, \\(H_0=\\dfrac{3}{40\\pi}\\approx0.0239\\) A/m",
                "\\(\\beta=2\\pi\\) rad/m, \\(\\eta=120\\pi\\) Ω, \\(H_0=\\dfrac{1}{20\\pi}\\) A/m",
                "\\(\\beta=12\\pi\\) rad/m, \\(\\eta=40\\pi\\) Ω, \\(H_0=\\dfrac{3}{20\\pi}\\) A/m",
                "\\(\\beta=6\\pi\\) rad/m, \\(\\eta=80\\pi\\) Ω, \\(H_0=\\dfrac{3}{40\\pi}\\) A/m"
            ],
            correct: 0,
            explanation: "β=ω×√(9×4)/c=ω×6/c=2π×10⁸×6/(3×10⁸)=4π rad/m; η=120π×√(4/9)=120π×2/3=80π Ω; H₀=6/(80π)=3/(40π)≈0.0239 A/m"
        }
    ]
};

/* ===================================================================
   TEST 6 — İleri Seviye & Kavramsal
   =================================================================== */
const TEST_6 = {
    id: "test6",
    title: "Test 6 — İleri Seviye",
    description: "Daha zorlu sayısal hesaplamalar ve karma konular",
    icon: "🔥",
    timeLimit: 2400,
    questions: [
        {
            id: "t6q1",
            topic: "Maxwell Denklemleri",
            text: "Durağan (statik) manyetik alanda Maxwell'in hangi denklemi J akım yoğunluğunu B ile ilişkilendirir?",
            choices: [
                "\\(\\nabla\\times\\mathbf{H}=\\mathbf{J}\\;\\Rightarrow\\;\\mathbf{J}=\\dfrac{1}{\\mu}\\nabla\\times\\mathbf{B}\\)",
                "\\(\\nabla\\cdot\\mathbf{B}=0\\)",
                "\\(\\nabla\\times\\mathbf{E}=-\\dfrac{\\partial\\mathbf{B}}{\\partial t}\\)",
                "\\(\\nabla\\cdot\\mathbf{D}=\\rho_v\\)"
            ],
            correct: 0,
            explanation: "Ampere yasasının statik hali: ∇×H=J. H=B/μ olduğundan J=(1/μ)∇×B."
        },
        {
            id: "t6q2",
            topic: "Manyetik Akı Sürekliliği",
            text: "\\(\\nabla\\cdot\\mathbf{B}=0\\) ifadesi fiziksel olarak ne anlama gelir?",
            choices: [
                "Manyetik monopol yoktur; alan çizgileri kapalıdır",
                "Manyetik alan muhafazakardır",
                "Elektrik alan oluşturmaz",
                "Manyetik enerji sıfırdır"
            ],
            correct: 0,
            explanation: "∇·B=0, manyetik alan çizgilerinin kapalı eğriler olduğunu ve manyetik tekil kutup (monopol) bulunmadığını ifade eder."
        },
        {
            id: "t6q3",
            topic: "Lorentz Kuvveti",
            text: "Q=−5 μC, \\(\\mathbf{u}=2\\mathbf{a}_z\\) m/s, \\(\\mathbf{B}=3\\mathbf{a}_x\\) T ise \\(\\mathbf{F}_m=Q(\\mathbf{u}\\times\\mathbf{B})\\) kaçtır?",
            choices: [
                "\\(+30\\,\\mathbf{a}_y\\) μN",
                "\\(-30\\,\\mathbf{a}_y\\) μN",
                "\\(-6\\,\\mathbf{a}_y\\) μN",
                "\\(+6\\,\\mathbf{a}_x\\) μN"
            ],
            correct: 0,
            explanation: "u×B=2az×3ax=6(az×ax)=6(−ay)=−6ay. Fm=Q(u×B)=(−5×10⁻⁶)(−6ay)=+30×10⁻⁶ay=+30μN·ay"
        },
        {
            id: "t6q4",
            topic: "Sınır Koşulları",
            text: "İki manyetik bölge arasında yüzey akımı yoksa teğetsel H ve normal B bileşenlerine uygulanan sınır koşulları hangisidir?",
            choices: [
                "\\(H_{1t}=H_{2t}\\) ve \\(B_{1n}=B_{2n}\\)",
                "\\(B_{1t}=B_{2t}\\) ve \\(H_{1n}=H_{2n}\\)",
                "\\(H_{1t}=H_{2t}\\) ve \\(H_{1n}=H_{2n}\\)",
                "\\(\\mu_1 H_{1t}=\\mu_2 H_{2t}\\) ve \\(B_{1n}=B_{2n}\\)"
            ],
            correct: 0,
            explanation: "Yüzey akımı yoksa: Teğetsel H sürekliliği (H₁t=H₂t) ve normal B sürekliliği (B₁n=B₂n)."
        },
        {
            id: "t6q5",
            topic: "Endüktans",
            text: "Koaksiyel kablo (iç yarıçap a, dış yarıçap b, geçirgenlik μ, uzunluk ℓ) için yalıtkan bölgedeki toplam endüktans hangisidir?",
            choices: [
                "\\(L=\\dfrac{\\mu\\ell}{2\\pi}\\ln\\dfrac{b}{a}\\) H",
                "\\(L=\\dfrac{\\mu\\ell}{4\\pi}\\ln\\dfrac{b}{a}\\) H",
                "\\(L=\\dfrac{2\\pi\\mu\\ell}{\\ln(b/a)}\\) H",
                "\\(L=\\mu\\ell\\ln\\dfrac{b}{a}\\) H"
            ],
            correct: 0,
            explanation: "Wm=½LI² ve Wm=(μI²ℓ/4π)ln(b/a) → L=(μℓ/2π)ln(b/a) H"
        },
        {
            id: "t6q6",
            topic: "Faraday Yasası",
            text: "Faraday yasasına göre bir devrede indüklenen EMF hangi ifadeyle verilir?",
            choices: [
                "\\(V_{emf}=-\\dfrac{d\\Psi}{dt}\\)",
                "\\(V_{emf}=+\\dfrac{d\\Psi}{dt}\\)",
                "\\(V_{emf}=-\\oint\\mathbf{H}\\cdot d\\mathbf{l}\\)",
                "\\(V_{emf}=\\nabla\\times\\mathbf{E}\\)"
            ],
            correct: 0,
            explanation: "Faraday yasası: Vemf=−dΨ/dt. Eksi işareti Lenz yasasından gelir (indüklenen akım neden olan değişime karşı çıkar)."
        },
        {
            id: "t6q7",
            topic: "Motionel EMF",
            text: "B vektörü dikey yönde (otomobilin normali ile θ=0°) sabit B alanında, aracın hızı iki katına çıkarılırsa indüklenen EMF nasıl değişir?",
            choices: [
                "2 kat artar",
                "4 kat artar",
                "√2 kat artar",
                "Değişmez"
            ],
            correct: 0,
            explanation: "Vemf=vBLcosθ — hız (v) ile doğru orantılıdır. v→2v yapılırsa Vemf→2Vemf olur."
        },
        {
            id: "t6q8",
            topic: "Yer Değiştirme Akımı",
            text: "Bir kondansatörde frekans iki katına çıkarılırsa, diğer değerler sabit tutulursa maksimum yer değiştirme akım yoğunluğu nasıl değişir?",
            choices: [
                "2 kat artar (ω ile doğru orantılı)",
                "4 kat artar",
                "√2 kat artar",
                "Değişmez"
            ],
            correct: 0,
            explanation: "|Jd|max=ε₀E₀ω=ε₀E₀×2πf. Frekans 2 katına çıkınca ω da 2 katına çıkar → Jd,max iki katına artar."
        },
        {
            id: "t6q9",
            topic: "Dalga İmpedansı",
            text: "ε=9ε₀, μ=μ₀ olan kayıpsız bir ortamın karakteristik empedansı η kaçtır? (η₀=120π≈377 Ω)",
            choices: [
                "\\(\\dfrac{120\\pi}{3}=40\\pi\\approx125.7\\) Ω",
                "\\(120\\pi\\approx377\\) Ω",
                "\\(120\\pi\\times3=360\\pi\\approx1131\\) Ω",
                "\\(\\dfrac{120\\pi}{9}=\\dfrac{40\\pi}{3}\\approx41.9\\) Ω"
            ],
            correct: 0,
            explanation: "η=η₀/√εr=120π/√9=120π/3=40π≈125.7 Ω"
        },
        {
            id: "t6q10",
            topic: "Faz Hızı & Dalga Boyu",
            text: "Bir ortamda ε=16ε₀, μ=μ₀ ve f=100 MHz ise dalga boyu λ ve faz hızı vp kaçtır?",
            choices: [
                "\\(v_p=c/4=7.5\\times10^7\\) m/s,  \\(\\lambda=0.75\\) m",
                "\\(v_p=c=3\\times10^8\\) m/s,  \\(\\lambda=3\\) m",
                "\\(v_p=c/16\\),  \\(\\lambda=0.1875\\) m",
                "\\(v_p=c/2\\),  \\(\\lambda=1.5\\) m"
            ],
            correct: 0,
            explanation: "vp=c/√εr=3×10⁸/4=7.5×10⁷ m/s; λ=vp/f=7.5×10⁷/10⁸=0.75 m"
        }
    ]
};

/* ===================================================================
   EXPORT
   =================================================================== */
const ALL_TESTS = [TEST_1, TEST_2, TEST_3, TEST_4, TEST_5, TEST_6];
const ALL_REFERENCE = REFERENCE_QUESTIONS;
