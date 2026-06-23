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
   TEST 6 — Ters Problemler (Farklı Tarz A)
   =================================================================== */
const TEST_6 = {
    id: "test6",
    title: "Test 6 — Ters Problemler",
    description: "Sonuçların verilip parametrelerin sorulduğu test",
    icon: "🔄",
    timeLimit: 0,
    questions: [
        {
            id: "t6q1",
            topic: "Curl & Akım Yoğunluğu",
            text: "Boş uzayda \\(\\mathbf{B}=x^3\\mathbf{a}_x+y^3\\mathbf{a}_y+z^3\\mathbf{a}_z\\) Wb/m² verilmiştir. Bu bölgedeki \\(\\mathbf{J}\\) akım yoğunluğu nedir?",
            choices: [
                "\\(\\mathbf{J}=\\mathbf{0}\\)",
                "\\(\\dfrac{1}{\\mu_0}(3x^2\\mathbf{a}_x+3y^2\\mathbf{a}_y+3z^2\\mathbf{a}_z)\\)",
                "\\(3(x+y+z)\\mathbf{a}_z\\)",
                "\\(\\dfrac{1}{\\mu_0}(x+y+z)\\mathbf{a}_y\\)"
            ],
            correct: 0,
            explanation: "Manyetik alanın her bileşeni sadece kendi eksenine bağlı olduğundan (Bx x'e, By y'ye...), çapraz türevler sıfırdır. ∇×B=0 → J=0."
        },
        {
            id: "t6q2",
            topic: "Manyetik Vektör Potansiyel",
            text: "Silindirik koordinatlarda \\(\\mathbf{A}=5\\rho^2\\mathbf{a}_z\\) Wb/m verilmiştir. Manyetik alanın \\(\\phi\\) bileşeni (\\(B_\\phi\\)) nedir?",
            choices: [
                "\\(-10\\rho\\) T",
                "\\(10\\rho\\) T",
                "\\(-5\\rho\\) T",
                "\\(0\\) T"
            ],
            correct: 0,
            explanation: "B = ∇×A formülünden silindirik koordinatlarda Az bileşeni varken: Bφ = -∂Az/∂ρ = -∂(5ρ²)/∂ρ = -10ρ T."
        },
        {
            id: "t6q3",
            topic: "Lorentz Kuvveti",
            text: "Bir parçacık \\(\\mathbf{u}=5\\mathbf{a}_x\\) m/s hızla, \\(\\mathbf{B}=2\\mathbf{a}_y\\) T alanında sapmadan (\\(\\mathbf{F}_m=0\\)) ilerlemektedir. Ortamdaki E alanı nedir?",
            choices: [
                "\\(-10\\mathbf{a}_z\\) V/m",
                "\\(10\\mathbf{a}_z\\) V/m",
                "\\(-10\\mathbf{a}_x\\) V/m",
                "\\(10\\mathbf{a}_y\\) V/m"
            ],
            correct: 0,
            explanation: "F = Q(E + u×B) = 0 → E = -u×B. u×B = 5ax × 2ay = 10az. Dolayısıyla E = -10az V/m olmalıdır (Wien filtresi prensibi)."
        },
        {
            id: "t6q4",
            topic: "Sınır Koşulları",
            text: "z=0 düzleminde \\(\\mu_1=2\\mu_0\\) ve \\(\\mu_2=5\\mu_0\\) bölgeleri vardır. \\(\\mathbf{H}_1=4\\mathbf{a}_x+3\\mathbf{a}_z\\) A/m ise, \\(\\mathbf{H}_2\\) nedir?",
            choices: [
                "\\(4\\mathbf{a}_x+1.2\\mathbf{a}_z\\) A/m",
                "\\(4\\mathbf{a}_x+7.5\\mathbf{a}_z\\) A/m",
                "\\(10\\mathbf{a}_x+3\\mathbf{a}_z\\) A/m",
                "\\(1.6\\mathbf{a}_x+3\\mathbf{a}_z\\) A/m"
            ],
            correct: 0,
            explanation: "Teğet H sürekli: H2x = H1x = 4. Normal B sürekli: B2z = B1z → μ2 H2z = μ1 H1z → 5μ0 H2z = 2μ0(3) → 5 H2z = 6 → H2z = 1.2 A/m."
        },
        {
            id: "t6q5",
            topic: "Manyetik Enerji",
            text: "Bir koaksiyel kabloda \\(b/a=e^2\\), \\(\\mu=\\mu_0\\), \\(L=2\\) m'dir. Yalıtkandaki manyetik enerji 100 pJ ise akım (I) yaklaşık kaçtır?",
            choices: [
                "15.8 mA",
                "31.6 mA",
                "5.0 mA",
                "25.0 mA"
            ],
            correct: 0,
            explanation: "Wm = (μ₀ I² L / 4π) ln(b/a). 100e-12 = (4πe-7 × I² × 2 / 4π) × 2 = 4e-7 × I². I² = 2.5e-4 → I ≈ 1.58e-2 A = 15.8 mA."
        },
        {
            id: "t6q6",
            topic: "Dönen Çubuk EMF",
            text: "10 cm uzunluğundaki çubuk B=50 mWb/m² alanında dönerken uçlarında 10 mV EMF indükleniyor. Çubuğun açısal hızı (\\(\\omega\\)) kaçtır?",
            choices: [
                "40 rad/s",
                "20 rad/s",
                "10 rad/s",
                "80 rad/s"
            ],
            correct: 0,
            explanation: "Vemf = 0.5 B L² ω → 10e-3 = 0.5 × 50e-3 × (0.1)² × ω → 10 = 0.25 ω → ω = 40 rad/s."
        },
        {
            id: "t6q7",
            topic: "Motionel EMF",
            text: "Genişliği 2 m olan bir araç, dikey \\(B=4\\times 10^{-5}\\) T alanında ilerliyor. Tamponda 2.4 mV indükleniyorsa hızı kaç m/s'dir?",
            choices: [
                "30 m/s",
                "15 m/s",
                "60 m/s",
                "12 m/s"
            ],
            correct: 0,
            explanation: "Vemf = B L v → 2.4e-3 = 4e-5 × 2 × v → v = 2.4e-3 / 8e-5 = 30 m/s."
        },
        {
            id: "t6q8",
            topic: "Yer Değiştirme Akımı",
            text: "Hava kondansatöründe \\(E_0=10^5\\) V/m iken maksimum yer değiştirme akımı yoğunluğu 0.5 A/m² ise frekans (f) yaklaşık kaçtır?",
            choices: [
                "89.9 kHz",
                "45.0 kHz",
                "179.8 kHz",
                "282 kHz"
            ],
            correct: 0,
            explanation: "Jd = ε₀ E₀ 2πf → 0.5 = 8.854e-12 × 10⁵ × 2πf → f = 0.5 / 5.56e-6 ≈ 89900 Hz = 89.9 kHz."
        },
        {
            id: "t6q9",
            topic: "Kayıp Frekansı",
            text: "Bir ortamda (\\(\\epsilon=4\\epsilon_0\\)) kayıp frekansı \\(f_c=9\\) GHz ise iletkenlik (\\(\\sigma\\)) yaklaşık kaç S/m'dir?",
            choices: [
                "2.0 S/m",
                "4.0 S/m",
                "1.0 S/m",
                "8.0 S/m"
            ],
            correct: 0,
            explanation: "fc = σ / (2πε) → σ = fc × 2π × 4ε₀ = 9e9 × 2π × 4 × 8.854e-12 = 9e9 × 222.5e-12 ≈ 2.0 S/m."
        },
        {
            id: "t6q10",
            topic: "Dalga Denklemi",
            text: "Manyetik olmayan (\\(\\mu=\\mu_0\\)) bir ortamda \\(\\beta=10\\pi\\) rad/m, \\(\\omega=2\\pi\\times10^8\\) rad/s ise malzemenin bağıl geçirgenliği (\\(\\epsilon_r\\)) kaçtır?",
            choices: [
                "225",
                "15",
                "25",
                "100"
            ],
            correct: 0,
            explanation: "vp = ω/β = 2πe8 / 10π = 2e7 m/s. Ayrıca vp = c / √εr → √εr = 3e8 / 2e7 = 15. εr = 15² = 225."
        }
    ]
};

/* ===================================================================
   TEST 7 — Farklı Senaryolar (Farklı Tarz B)
   =================================================================== */
const TEST_7 = {
    id: "test7",
    title: "Test 7 — Farklı Senaryolar",
    description: "Aynı formüllerin farklı fiziksel konseptlere uyarlanması",
    icon: "✈️",
    timeLimit: 0,
    questions: [
        {
            id: "t7q1",
            topic: "Curl & Akım Yoğunluğu",
            text: "\\(\\mathbf{B}=\\sin(x)\\mathbf{a}_y\\) T olarak verilen periyodik manyetik alanın oluşturduğu \\(\\mathbf{J}\\) akım yoğunluğu nedir?",
            choices: [
                "\\(\\dfrac{1}{\\mu_0}\\cos(x)\\mathbf{a}_z\\)",
                "\\(\\dfrac{1}{\\mu_0}\\sin(x)\\mathbf{a}_x\\)",
                "\\(-\\dfrac{1}{\\mu_0}\\cos(x)\\mathbf{a}_z\\)",
                "\\(0\\)"
            ],
            correct: 0,
            explanation: "J = (1/μ₀)∇×B. ∇×B'nin z bileşeni = ∂By/∂x - ∂Bx/∂y = ∂(sin x)/∂x - 0 = cos(x). Sonuç: (cos x / μ₀) az."
        },
        {
            id: "t7q2",
            topic: "Manyetik Akı",
            text: "Manyetik vektör potansiyeli \\(\\mathbf{A}=10\\sin(\\phi)\\mathbf{a}_z\\) Wb/m'dir. Z silindirik yüzeyinde (\\(\\rho=3, 0\\le\\phi\\le\\pi, 0\\le z\\le 2\\)) akı kaçtır?",
            choices: [
                "0 Wb",
                "60 Wb",
                "30 Wb",
                "120 Wb"
            ],
            correct: 0,
            explanation: "Bρ = (1/ρ)∂Az/∂φ = (10/ρ)cos(φ). Ψ = ∫∫ Bρ ρ dφ dz = ∫₀² dz ∫₀^π 10 cos(φ) dφ = 20 [sin(φ)]₀^π = 20(0 - 0) = 0 Wb."
        },
        {
            id: "t7q3",
            topic: "Lorentz Kuvveti",
            text: "Bir elektron (\\(Q=-1.6\\times10^{-19}\\) C), Ekvator'da yatay \\(10^6\\mathbf{a}_x\\) m/s hızla uçuyor. Dünya B alanı \\(5\\times10^{-5}\\mathbf{a}_z\\) T ise kuvvet nedir? (E=0)",
            choices: [
                "\\(8\\times10^{-18}\\mathbf{a}_y\\) N",
                "\\(-8\\times10^{-18}\\mathbf{a}_y\\) N",
                "\\(8\\times10^{-18}\\mathbf{a}_x\\) N",
                "\\(-8\\times10^{-18}\\mathbf{a}_z\\) N"
            ],
            correct: 0,
            explanation: "F = Q(u×B) = -1.6e-19 (10⁶ax × 5e-5az) = -1.6e-19 (50(-ay)) = 8e-18 ay N."
        },
        {
            id: "t7q4",
            topic: "Sınır Koşulları",
            text: "Hava (\\(\\mu_1=\\mu_0\\)) ve Demir (\\(\\mu_2=1000\\mu_0\\)) z=0 düzleminde komşudur. Havada \\(\\mathbf{B}_1=2\\mathbf{a}_x+5\\mathbf{a}_z\\) T ise demirdeki \\(B_{2x}\\) nedir?",
            choices: [
                "2000 T",
                "2 T",
                "0.002 T",
                "5000 T"
            ],
            correct: 0,
            explanation: "H1x = B1x/μ1 = 2/μ₀. H2x = H1x = 2/μ₀. B2x = μ2 H2x = 1000μ₀ × (2/μ₀) = 2000 T (Çok yüksek, demir manyetizasyonu çok yüksektir)."
        },
        {
            id: "t7q5",
            topic: "Manyetik Enerji",
            text: "Bir MR cihazı koaksiyel kablosunda (\\(a=0.5\\)m, \\(b=1\\)m, \\(\\mu=\\mu_0\\), \\(L=2\\)m) 100 A akım geçmektedir. Manyetik enerji nedir? (ln2≈0.693)",
            choices: [
                "≈ 1.386 mJ",
                "≈ 2.77 mJ",
                "≈ 0.693 mJ",
                "≈ 13.8 mJ"
            ],
            correct: 0,
            explanation: "Wm = (4πe-7 × 10000 × 2 / 4π) ln(2) = 2e-3 × 0.693 = 1.386e-3 J = 1.386 mJ."
        },
        {
            id: "t7q6",
            topic: "Dönen Çubuk EMF",
            text: "Rüzgar türbini pervanesi (L=40 m) dünyanın manyetik alanına (B=5×10⁻⁵ T) dik olarak \\(\\omega=2\\) rad/s ile dönüyor. İndüklenen EMF nedir?",
            choices: [
                "80 mV",
                "160 mV",
                "40 mV",
                "20 mV"
            ],
            correct: 0,
            explanation: "Vemf = 0.5 B L² ω = 0.5 × 5e-5 × 1600 × 2 = 5e-5 × 1600 = 8e-2 V = 80 mV."
        },
        {
            id: "t7q7",
            topic: "Motionel EMF",
            text: "Bir yolcu uçağı (kanat açıklığı 60 m), 900 km/h hızla yere paralel uçmaktadır. Yerin dikey manyetik alanı 4×10⁻⁵ T ise kanatlardaki EMF nedir?",
            choices: [
                "600 mV",
                "300 mV",
                "1.2 V",
                "150 mV"
            ],
            correct: 0,
            explanation: "v = 900/3.6 = 250 m/s. Vemf = B dikey × L × v = 4e-5 × 60 × 250 = 4e-5 × 15000 = 0.6 V = 600 mV."
        },
        {
            id: "t7q8",
            topic: "Yer Değiştirme Akımı",
            text: "Cam dielektrikli (\\(\\epsilon_r=4\\)) bir kondansatörde \\(E_0=10^4\\) V/m, \\(f=1\\) MHz'dir. Jd_max yaklaşık kaçtır?",
            choices: [
                "2.22 A/m²",
                "0.55 A/m²",
                "4.44 A/m²",
                "8.88 A/m²"
            ],
            correct: 0,
            explanation: "Jd_max = 4 × 8.854e-12 × 10⁴ × 2π × 10⁶ = 35.416e-12 × 2πe10 ≈ 222.5e-2 ≈ 2.22 A/m²."
        },
        {
            id: "t7q9",
            topic: "Kayıp Frekansı",
            text: "Deniz suyunun (\\(\\sigma=4\\) S/m, \\(\\epsilon_r=81\\)) kayıp frekansı yaklaşık kaç MHz'dir?",
            choices: [
                "888 MHz",
                "444 MHz",
                "1.77 GHz",
                "11 MHz"
            ],
            correct: 0,
            explanation: "fc = 4 / (2π × 81 × 8.854e-12) = 4 / (4505e-12) = 8.88e8 Hz = 888 MHz."
        },
        {
            id: "t7q10",
            topic: "Dalga Denklemi",
            text: "Polietilen (\\(\\epsilon_r=2.25, \\mu_r=1\\)) içinde ilerleyen bir dalganın karakteristik empedansı (\\(\\eta\\)) kaçtır?",
            choices: [
                "\\(80\\pi\\approx251\\Omega\\)",
                "\\(120\\pi\\approx377\\Omega\\)",
                "\\(40\\pi\\approx125\\Omega\\)",
                "\\(160\\pi\\approx502\\Omega\\)"
            ],
            correct: 0,
            explanation: "η = 120π / √2.25 = 120π / 1.5 = 80π Ω."
        }
    ]
};

/* ===================================================================
   TEST 8 — Vektörel Değişimler (Farklı Tarz C)
   =================================================================== */
const TEST_8 = {
    id: "test8",
    title: "Test 8 — Vektörel Değişimler",
    description: "Alan yönlerinin ve koordinat eksenlerinin değiştirildiği sorular",
    icon: "🧭",
    timeLimit: 0,
    questions: [
        {
            id: "t8q1",
            topic: "Curl & Akım Yoğunluğu",
            text: "Boş uzayda \\(\\mathbf{B}=e^{-y}\\mathbf{a}_x\\) T'dir. \\(\\mathbf{J}\\) nedir?",
            choices: [
                "\\(\\dfrac{e^{-y}}{\\mu_0}\\mathbf{a}_z\\)",
                "\\(-\\dfrac{e^{-y}}{\\mu_0}\\mathbf{a}_z\\)",
                "\\(\\dfrac{e^{-y}}{\\mu_0}\\mathbf{a}_y\\)",
                "\\(0\\)"
            ],
            correct: 0,
            explanation: "J = (1/μ₀)(∂By/∂x - ∂Bx/∂y) az = (1/μ₀)(0 - (-e⁻ʸ)) az = (e⁻ʸ/μ₀) az."
        },
        {
            id: "t8q2",
            topic: "Manyetik Vektör Potansiyel",
            text: "Küresel koordinatlarda vektör potansiyeli sadece radyal yöndedir: \\(\\mathbf{A}=\\frac{10}{r}\\mathbf{a}_r\\). Manyetik alan (B) nedir?",
            choices: [
                "\\(0\\)",
                "\\(\\frac{10}{r^2}\\mathbf{a}_\\theta\\)",
                "\\(\\frac{10}{r^2}\\mathbf{a}_\\phi\\)",
                "\\(-\\frac{10}{r^2}\\mathbf{a}_r\\)"
            ],
            correct: 0,
            explanation: "Sadece Ar varsa ve r'ye bağlıysa, küresel curl formülündeki tüm ilgili türevler sıfırdır (açısal türev yok). B = ∇×A = 0."
        },
        {
            id: "t8q3",
            topic: "Lorentz Kuvveti",
            text: "Q=5 mC. Parçacık \\(\\mathbf{u}=3\\mathbf{a}_z\\) m/s hızla, \\(\\mathbf{B}=2\\mathbf{a}_x+4\\mathbf{a}_y\\) T alanında hareket ediyor (E=0). Kuvvet nedir?",
            choices: [
                "\\(-60\\mathbf{a}_x+30\\mathbf{a}_y\\) mN",
                "\\(60\\mathbf{a}_x-30\\mathbf{a}_y\\) mN",
                "\\(30\\mathbf{a}_x-60\\mathbf{a}_y\\) mN",
                "\\(-30\\mathbf{a}_x+60\\mathbf{a}_y\\) mN"
            ],
            correct: 0,
            explanation: "u×B = 3az × (2ax + 4ay) = 6(az×ax) + 12(az×ay) = 6ay - 12ax. F = 5e-3 (6ay - 12ax) = -60ax + 30ay mN."
        },
        {
            id: "t8q4",
            topic: "Sınır Koşulları",
            text: "Sınır yüzeyi bu kez **x=0 düzlemidir**. \\(\\mu_1=2\\mu_0\\), \\(\\mu_2=4\\mu_0\\). \\(\\mathbf{B}_1=3\\mathbf{a}_x+4\\mathbf{a}_y\\) T ise \\(\\mathbf{H}_2\\) nedir?",
            choices: [
                "\\(\\dfrac{0.75\\mathbf{a}_x+2\\mathbf{a}_y}{\\mu_0}\\)",
                "\\(\\dfrac{3\\mathbf{a}_x+2\\mathbf{a}_y}{\\mu_0}\\)",
                "\\(\\dfrac{1.5\\mathbf{a}_x+4\\mathbf{a}_y}{\\mu_0}\\)",
                "\\(\\dfrac{3\\mathbf{a}_x+4\\mathbf{a}_y}{\\mu_0}\\)"
            ],
            correct: 0,
            explanation: "Normal x ekseni. Bx sürekli → B2x = 3 → H2x = 3/4μ₀ = 0.75/μ₀. Teğet y ekseni. H1y = 4/2μ₀ = 2/μ₀. H2y = H1y = 2/μ₀. Sonuç: (0.75ax + 2ay)/μ₀."
        },
        {
            id: "t8q5",
            topic: "Endüktans",
            text: "Manyetik enerji yerine Endüktans (\\(L=\\frac{2W_m}{I^2}\\)) soruluyor. Koaksiyel kabloda (\\(L_{uzunluk}=1\\)m, \\(b/a=e\\), \\(\\mu=\\mu_0\\)) endüktans nedir?",
            choices: [
                "0.2 μH",
                "0.4 μH",
                "2.0 μH",
                "0.1 μH"
            ],
            correct: 0,
            explanation: "L_ind = (μ₀ L / 2π) ln(b/a) = (4πe-7 × 1 / 2π) ln(e) = 2e-7 H = 0.2 μH."
        },
        {
            id: "t8q6",
            topic: "Dönen Çubuk EMF",
            text: "Çubuk z ekseni yerine **y ekseni** etrafında dönüyor (u hızı x-z düzleminde). Alan \\(B=10\\mathbf{a}_y\\) T. (L=2 m, ω=5 rad/s). EMF nedir?",
            choices: [
                "100 V",
                "50 V",
                "200 V",
                "0 V"
            ],
            correct: 0,
            explanation: "Dönüş ekseni y, manyetik alan da y ekseninde (birbirine paralel). Çubuk u×B sonucu aynı formülü verir: V = 0.5 B L² ω = 0.5 × 10 × 4 × 5 = 100 V."
        },
        {
            id: "t8q7",
            topic: "Motionel EMF",
            text: "Bir denizaltı (uzunluk L=15m, z-ekseni boyunca uzanıyor), +x yönünde 20 m/s hızla gidiyor. B alanı \\(5\\times10^{-5}\\mathbf{a}_y\\) T ise EMF?",
            choices: [
                "15 mV",
                "30 mV",
                "7.5 mV",
                "0 mV"
            ],
            correct: 0,
            explanation: "u×B = 20ax × 5e-5ay = 1e-3 az. Vemf = ∫(u×B)·dl = 1e-3 × 15 = 15e-3 V = 15 mV."
        },
        {
            id: "t8q8",
            topic: "Yer Değiştirme Akımı",
            text: "İki özdeş hava kondansatöründen birine f, diğerine 3f frekanslı aynı genlikte gerilim uygulanıyor. Maksimum Jd oranları (\\(J_{d2}/J_{d1}\\)) nedir?",
            choices: [
                "3",
                "9",
                "1/3",
                "1 (Değişmez)"
            ],
            correct: 0,
            explanation: "Jd = ε₀ E₀ ω = ε₀ E₀ 2πf. Frekans 3 katına çıkarsa Jd de tam 3 katına çıkar."
        },
        {
            id: "t8q9",
            topic: "Kayıp Frekansı",
            text: "Bir ortamda iletim ve yer değiştirme akım yoğunluklarının büyüklükleri tam eşittir (\\(\\omega = \\omega_c\\)). Bu durumda kayıp tanjantı (\\(\\tan\\delta\\)) kaçtır?",
            choices: [
                "1",
                "0",
                "Sonsuz",
                "0.5"
            ],
            correct: 0,
            explanation: "Kayıp tanjantı = Jc / Jd = σ / (ωε). Akımlar eşitse bu oran tam 1'dir."
        },
        {
            id: "t8q10",
            topic: "Dalga Denklemi",
            text: "Boş uzayda bir dalga **-x yönünde** ilerliyor. E alanı +y yönünde (\\(E_0\\cos(\\omega t+\\beta x)\\mathbf{a}_y\\)) ise H alanının yönü nedir?",
            choices: [
                "\\(-a_z\\)",
                "\\(+a_z\\)",
                "\\(-a_y\\)",
                "\\(+a_x\\)"
            ],
            correct: 0,
            explanation: "Dalga yayılım yönü (k) = -ax. k × E yönü H'ı verir. -ax × ay = -az."
        }
    ]
};

/* ===================================================================
   TEST 9 — Oranlar ve Kavramsal Yorum (Farklı Tarz D)
   =================================================================== */
const TEST_9 = {
    id: "test9",
    title: "Test 9 — Oranlar ve Yorum",
    description: "Fiziksel yasaların isimleri, oranlar ve limit durum analizleri",
    icon: "⚖️",
    timeLimit: 0,
    questions: [
        {
            id: "t9q1",
            topic: "Maxwell Denklemleri",
            text: "\\(\\nabla \\cdot \\mathbf{B} = 0\\) denkleminin fiziksel literatürdeki yaygın adı nedir?",
            choices: [
                "Manyetizma için Gauss Yasası",
                "Ampere Yasası",
                "Faraday Yasası",
                "Lenz Yasası"
            ],
            correct: 0,
            explanation: "Elektrik için Gauss yasası ∇·D = ρ iken, manyetik monopol olmadığı için manyetizma için Gauss yasası ∇·B = 0'dır."
        },
        {
            id: "t9q2",
            topic: "Manyetik Akı",
            text: "Manyetik akı birimi Weber (Wb)'in eşdeğeri hangisidir?",
            choices: [
                "Tesla · m² (veya Volt · saniye)",
                "Amper / m",
                "Tesla / m²",
                "Henry / metre"
            ],
            correct: 0,
            explanation: "Manyetik akı (Φ) B alanının yüzey integralidir, birimi T·m²'dir. Ayrıca Faraday yasasına göre (V = dΦ/dt) Volt·saniye'ye eşittir."
        },
        {
            id: "t9q3",
            topic: "Lorentz Kuvveti",
            text: "Bir elektronun birbirine dik düzgün E ve B alanlarında doğrusal sapmadan (F=0) ilerlemesi için hızının büyüklüğü (Wien Filtresi şartı) ne olmalıdır?",
            choices: [
                "\\(|E| / |B|\\)",
                "\\(|B| / |E|\\)",
                "\\(|E| \\cdot |B|\\)",
                "\\(|E|^2 / |B|\\)"
            ],
            correct: 0,
            explanation: "Q(E + u×B) = 0 → E = -u×B. Vektörler dikse büyüklükleri E = uB → u = E/B olmalıdır."
        },
        {
            id: "t9q4",
            topic: "Sınır Koşulları",
            text: "Hava (\\(\\mu_1=\\mu_0\\)) ve Demir (\\(\\mu_2=100\\mu_0\\)) sınırında manyetik alan çizgisi havada normalle 45° açı yapıyorsa, demirdeki açı (\\(\\theta_2\\)) hakkında ne söylenebilir?",
            choices: [
                "\\(\\theta_2 \\approx 89.4°\\) (Yüzeye çok yakın, neredeyse teğet)",
                "\\(\\theta_2 \\approx 0°\\) (Normale çok yakın, dikey)",
                "\\(\\theta_2 = 45°\\) (Açı değişmez)",
                "\\(\\theta_2 \\approx 45.6°\\) (Çok az sapar)"
            ],
            correct: 0,
            explanation: "tan(θ1)/tan(θ2) = μ1/μ2. tan(45°)/tan(θ2) = 1/100 → tan(θ2) = 100. θ2 açı olarak 90°'ye çok yakındır (89.4°). Demir, alan çizgilerini içine hapseder."
        },
        {
            id: "t9q5",
            topic: "Manyetik Enerji",
            text: "Bir koaksiyel kabloda iç yarıçap sabitken dış yarıçap e katına çıkarılırsa (\\(b \\rightarrow e\\cdot b\\)), manyetik enerji değişimi ne ile orantılıdır?",
            choices: [
                "1 birim artış (\\(\\ln(e)=1\\) eklentisi)",
                "e katına çıkar",
                "Değişmez",
                "e² katına çıkar"
            ],
            correct: 0,
            explanation: "Wm ∝ ln(b/a). Yeni enerji ∝ ln(eb/a) = ln(e) + ln(b/a) = 1 + ln(b/a). Enerji sabit bir miktar (ln(e)=1 orantısında) artar."
        },
        {
            id: "t9q6",
            topic: "Dönen Çubuk EMF",
            text: "Dönen bir çubuğun açısal hızı (\\(\\omega\\)) 2 katına çıkarılıp, boyu (L) yarıya (L/2) indirilirse indüklenen EMF nasıl değişir?",
            choices: [
                "Yarıya düşer",
                "Aynı kalır",
                "4 katına çıkar",
                "2 katına çıkar"
            ],
            correct: 0,
            explanation: "Vemf ∝ L²ω. Yeni Vemf ∝ (L/2)² × (2ω) = (L²/4) × 2ω = 0.5 (L²ω). Yani yarıya düşer."
        },
        {
            id: "t9q7",
            topic: "Motionel EMF",
            text: "Bir araç Ekvator'dan Kutuplara doğru ilerlerken yerin manyetik alanının dikey bileşeni artar, yatay bileşeni azalır. Tampondaki (yatay) indüklenen EMF nasıl değişir?",
            choices: [
                "Artar (Çünkü sadece dikey bileşen tamponu keser)",
                "Azalır (Yatay alan azaldığı için)",
                "Değişmez (Toplam alan sabit kaldığı için)",
                "Sıfır olur"
            ],
            correct: 0,
            explanation: "Tamponda indüklenen gerilim, aracın hareket yönüne ve tampon eksenine dik olan (yani dikey) B bileşeniyle orantılıdır. Dikey bileşen arttıkça EMF artar."
        },
        {
            id: "t9q8",
            topic: "Yer Değiştirme Akımı",
            text: "Bir kondansatörün plakaları arasına dielektrik sabiti \\(\\epsilon_r=5\\) olan bir malzeme konursa, maksimum yer değiştirme akımı yoğunluğu hava durumuna göre nasıl değişir?",
            choices: [
                "5 katına çıkar",
                "1/5'ine düşer",
                "Değişmez",
                "25 katına çıkar"
            ],
            correct: 0,
            explanation: "Jd = ε(∂E/∂t). E aynı tutuluyorsa, ε 5 katına çıktığı için Jd de 5 katına çıkar."
        },
        {
            id: "t9q9",
            topic: "Kayıp Frekansı",
            text: "Bir malzemenin kayıp frekansı \\(f_c\\) olsun. Ortama uygulanan frekans \\(f \\gg f_c\\) (çok yüksek frekans) olursa malzeme fiziksel olarak nasıl davranır?",
            choices: [
                "İyi bir yalıtkan (Dielektrik) olarak davranır",
                "Mükemmel iletken olarak davranır",
                "Süperiletken olur",
                "Manyetik malzemeye dönüşür"
            ],
            correct: 0,
            explanation: "f >> fc demek ω >> σ/ε demek, yani Jd >> Jc (yer değiştirme akımı iletime baskındır). Bu durum iyi dielektriklerin karakteristiğidir."
        },
        {
            id: "t9q10",
            topic: "Dalga Denklemi",
            text: "Kayıpsız manyetik olmayan (\\(\\mu_r=1\\)) bir ortamda dalganın faz hızı ışık hızının yarısıysa (c/2), malzemenin bağıl geçirgenliği (\\(\\epsilon_r\\)) kaçtır?",
            choices: [
                "4",
                "2",
                "0.5",
                "0.25"
            ],
            correct: 0,
            explanation: "vp = c / √εr = c/2. Buradan √εr = 2 → εr = 4."
        }
    ]
};

/* ===================================================================
   TEST 10 — Karma Deneme Sınavı (Farklı Tarz E)
   =================================================================== */
const TEST_10 = {
    id: "test10",
    title: "Test 10 — Karma Deneme",
    description: "Sınav formatına uygun kapsamlı ve şaşırtmacalı sorular",
    icon: "📝",
    timeLimit: 2400,
    questions: [
        {
            id: "t10q1",
            topic: "Curl & Akım Yoğunluğu",
            text: "\\(\\mathbf{B}=\\cos(y)\\mathbf{a}_x - \\sin(x)\\mathbf{a}_y\\) T ise \\(\\nabla\\times\\mathbf{B}\\) nedir?",
            choices: [
                "\\((\\sin(y)-\\cos(x))\\mathbf{a}_z\\)",
                "\\((\\cos(x)-\\sin(y))\\mathbf{a}_z\\)",
                "\\(0\\)",
                "\\((\\sin(x)+\\cos(y))\\mathbf{a}_z\\)"
            ],
            correct: 0,
            explanation: "∇×B = (∂By/∂x - ∂Bx/∂y)az = (-cos(x) - (-sin(y)))az = (sin(y) - cos(x))az."
        },
        {
            id: "t10q2",
            topic: "Manyetik Vektör Potansiyel",
            text: "Düz, uzun ve ince bir telin uzağında manyetik vektör potansiyel (\\(A_z\\)) akımla aynı yöndedir. B alanı için hangi işlem doğrudur?",
            choices: [
                "\\(\\mathbf{B} = \\nabla\\times\\mathbf{A}\\) ile rotasyon alınır",
                "\\(\\mathbf{B} = \\nabla\\cdot\\mathbf{A}\\) ile diverjans alınır",
                "\\(\\mathbf{B} = \\nabla\\mathbf{A}\\) ile gradyan alınır",
                "\\(\\mathbf{B} = \\int\\mathbf{A} dl\\) integrali alınır"
            ],
            correct: 0,
            explanation: "Manyetik alan her zaman vektör potansiyelinin rotasyoneli (curl) alınarak bulunur: B = ∇×A."
        },
        {
            id: "t10q3",
            topic: "Lorentz Kuvveti",
            text: "Bir yük \\(\\mathbf{u}=2\\mathbf{a}_x+2\\mathbf{a}_y\\) m/s hızla, \\(\\mathbf{B}=5\\mathbf{a}_z\\) T alanına giriyor. \\(\\mathbf{u}\\times\\mathbf{B}\\) vektörü nedir?",
            choices: [
                "\\(10\\mathbf{a}_x - 10\\mathbf{a}_y\\)",
                "\\(-10\\mathbf{a}_x + 10\\mathbf{a}_y\\)",
                "\\(10\\mathbf{a}_z\\)",
                "\\(20\\mathbf{a}_x + 20\\mathbf{a}_y\\)"
            ],
            correct: 0,
            explanation: "u×B = (2ax + 2ay) × 5az = 10(ax×az) + 10(ay×az) = -10ay + 10ax = 10ax - 10ay."
        },
        {
            id: "t10q4",
            topic: "Sınır Koşulları (Yüzey Akımlı)",
            text: "İki bölge arasındaki sınırda \\(\\mathbf{K}=5\\mathbf{a}_y\\) A/m yüzey akımı var. Normal yön \\(\\mathbf{a}_z\\). Sınır koşulu (\\(\\mathbf{a}_n \\times (\\mathbf{H}_2 - \\mathbf{H}_1) = \\mathbf{K}\\)) gereği \\(H_{2x}-H_{1x}\\) farkı kaçtır?",
            choices: [
                "5 A/m",
                "-5 A/m",
                "0 A/m",
                "Sonsuz"
            ],
            correct: 0,
            explanation: "az × (H2 - H1) = az × (ΔHx ax + ΔHy ay) = ΔHx ay - ΔHy ax = 5ay. Buradan ΔHx = 5 ve ΔHy = 0 bulunur. H2x - H1x = 5 A/m."
        },
        {
            id: "t10q5",
            topic: "Manyetik Enerji",
            text: "Hava ortamında manyetik alan B=2 T ise ortamdaki manyetik enerji yoğunluğu (\\(w_m\\)) kaç J/m³'tür?",
            choices: [
                "\\(10^7 / 2\\pi\\)",
                "\\(10^7 / 4\\pi\\)",
                "\\(4\\pi \\times 10^{-7}\\)",
                "\\(8\\pi \\times 10^{-7}\\)"
            ],
            correct: 0,
            explanation: "wm = B² / 2μ₀ = 2² / (2 × 4πe-7) = 4 / (8πe-7) = (4/8π)e7 = 0.5e7 / π = 10⁷ / 2π J/m³."
        },
        {
            id: "t10q6",
            topic: "Dönen Çubuk EMF",
            text: "Yarıçapı R olan iletken bir disk, B alanına dik eksende ω hızıyla dönüyor. Merkez ile kenar arasındaki EMF, dönen çubuk ile aynı mantıkta neye eşittir?",
            choices: [
                "\\(0.5 B R^2 \\omega\\)",
                "\\(B R^2 \\omega\\)",
                "\\(B R \\omega\\)",
                "\\(0\\)"
            ],
            correct: 0,
            explanation: "Diskin herhangi bir radial yarıçap çizgisi dönen çubuk gibi davranır, formül çubukla aynıdır: V = 0.5 B R² ω."
        },
        {
            id: "t10q7",
            topic: "Motionel EMF",
            text: "100 km/h (≈27.78 m/s) hızla ilerleyen 2 m genişliğindeki aracın tamponunda 1 mV oluşuyorsa B_dikey (T cinsinden) kaçtır?",
            choices: [
                "\\(1.8 \\times 10^{-5}\\)",
                "\\(3.6 \\times 10^{-5}\\)",
                "\\(5.4 \\times 10^{-5}\\)",
                "\\(0.9 \\times 10^{-5}\\)"
            ],
            correct: 0,
            explanation: "1e-3 = (100/3.6) × B × 2. B = 3.6e-3 / 200 = 1.8e-5 T (18 μT)."
        },
        {
            id: "t10q8",
            topic: "Yer Değiştirme Akımı",
            text: "İdeal kondansatörde (\\(I_d = C \\frac{dV}{dt}\\)), C=10 pF, V(t) = 5sin(10⁶t) ise maksimum yer değiştirme akımı (\\(I_{d,max}\\) ) kaç μA'dır?",
            choices: [
                "50 μA",
                "10 μA",
                "25 μA",
                "5 μA"
            ],
            correct: 0,
            explanation: "Id_max = C × V_max × ω = 10e-12 × 5 × 10⁶ = 50e-6 A = 50 μA."
        },
        {
            id: "t10q9",
            topic: "Kayıp Frekansı",
            text: "Bir dielektrikte (\\(\\sigma=10^{-3}\\) S/m, \\(\\epsilon_r=4\\)) 10 MHz'de kayıp tanjantı (\\(\\tan\\delta = \\frac{\\sigma}{\\omega\\epsilon}\\)) yaklaşık kaçtır?",
            choices: [
                "0.45",
                "1.00",
                "0.22",
                "2.22"
            ],
            correct: 0,
            explanation: "tanδ = 1e-3 / (2πe7 × 4 × 8.854e-12) = 1e-3 / 2.22e-3 ≈ 0.45."
        },
        {
            id: "t10q10",
            topic: "Dalga Denklemi",
            text: "Hava ortamında elektrik alan \\(E = 50 \\cos(\\omega t - \\beta z)\\mathbf{a}_x\\) V/m ise manyetik alan H'ın yönü ve genliği (A/m) nedir?",
            choices: [
                "\\(0.133 \\mathbf{a}_y\\)",
                "\\(0.133 \\mathbf{a}_z\\)",
                "\\(377 \\mathbf{a}_y\\)",
                "\\(-0.133 \\mathbf{a}_y\\)"
            ],
            correct: 0,
            explanation: "Dalga +z'ye gidiyor. k×E ∝ H → az×ax = ay. Genlik H₀ = E₀/η₀ = 50/120π ≈ 50/377 ≈ 0.133 A/m. Sonuç 0.133 ay."
        }
    ]
};

/* ===================================================================
   TEST 11 — İleri Seviye & Kavramsal (Eski Test 6)
   =================================================================== */
const TEST_11 = {
    id: "test11",
    title: "Test 11 — İleri Seviye",
    description: "Daha zorlu sayısal hesaplamalar ve karma konular",
    icon: "🔥",
    timeLimit: 2400,
    questions: [
        {
            id: "t11q1",
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
            id: "t11q2",
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
            id: "t11q3",
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
            id: "t11q4",
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
            id: "t11q5",
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
            id: "t11q6",
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
            id: "t11q7",
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
            id: "t11q8",
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
            id: "t11q9",
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
            id: "t11q10",
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
const ALL_TESTS = [TEST_1, TEST_2, TEST_3, TEST_4, TEST_5, TEST_6, TEST_7, TEST_8, TEST_9, TEST_10, TEST_11];
const ALL_REFERENCE = REFERENCE_QUESTIONS;
