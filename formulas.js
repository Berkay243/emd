/**
 * formulas.js — EMD Formül Kitabı
 * Hafta 1-11 ders notlarından derlenen, sınavda verilen formül kağıdı
 * Her formül: { id, latex, description, note? }
 */

const FORMULA_CHAPTERS = [

    /* ============================================================
       BÖLÜM 1 — MANYETOSTATİK: Biot-Savart & Ampere Yasası
       (Hafta 1, 2, 3)
       ============================================================ */
    {
        id: "ch1",
        title: "Manyetostatik — Biot-Savart & Ampere Yasası",
        icon: "🔁",
        weeks: "Hafta 1–3",
        formulas: [
            {
                id: "f1_1",
                latex: "\\mathbf{H} = \\frac{I}{2\\pi \\rho}\\,\\mathbf{a}_\\phi",
                description: "Sonsuz uzun düz tel çevresindeki H alanı",
                note: "ρ: telden uzaklık, I: akım. Amper yasasıyla elde edilir."
            },
            {
                id: "f1_2",
                latex: "\\oint_C \\mathbf{H} \\cdot d\\mathbf{l} = I_{enc}",
                description: "Ampere Devre Yasası (integral formu)",
                note: "Kapalı C konturu boyunca H'ın çizgi integrali, kapalıyı delerek geçen toplam akıma eşittir."
            },
            {
                id: "f1_3",
                latex: "\\nabla \\times \\mathbf{H} = \\mathbf{J}",
                description: "Ampere Yasası (diferansiyel / Maxwell formu — statik)",
                note: "J: akım yoğunluğu [A/m²]. Dinamik durumda yer değiştirme akımı eklenir."
            },
            {
                id: "f1_4",
                latex: "d\\mathbf{H} = \\frac{I\\,d\\mathbf{l} \\times \\mathbf{a}_R}{4\\pi R^2}",
                description: "Biot-Savart Yasası (diferansiyel eleman)",
                note: "R: kaynak-gözlem noktası mesafesi, aR: kaynak→gözlem birim vektörü."
            },
            {
                id: "f1_5",
                latex: "\\mathbf{J} = \\frac{1}{\\mu_0}\\nabla \\times \\mathbf{B}",
                description: "B alanından akım yoğunluğu (boş uzay)",
                note: "Referans soru tipinde doğrudan kullanılır: curl(B)/μ₀ = J."
            }
        ]
    },

    /* ============================================================
       BÖLÜM 2 — MANYETİK AKI VE VEKTÖR POTANSİYEL
       (Hafta 3)
       ============================================================ */
    {
        id: "ch2",
        title: "Manyetik Akı ve Vektör Potansiyel",
        icon: "🌊",
        weeks: "Hafta 3",
        formulas: [
            {
                id: "f2_1",
                latex: "\\Psi = \\int_S \\mathbf{B} \\cdot d\\mathbf{S}",
                description: "Manyetik akı (yüzey integrali)",
                note: "Birim: Weber [Wb = T·m² = V·s]"
            },
            {
                id: "f2_2",
                latex: "\\nabla \\cdot \\mathbf{B} = 0",
                description: "Manyetik akı sürekliliği (Gauss Yasası — manyetizma)",
                note: "Manyetik tek kutup (monopol) yoktur; B alan çizgileri kapalıdır."
            },
            {
                id: "f2_3",
                latex: "\\mathbf{B} = \\nabla \\times \\mathbf{A}",
                description: "Manyetik vektör potansiyeli",
                note: "A: manyetik vektör potansiyeli [Wb/m]. B her zaman A'nın rotasyoneli alınarak bulunur."
            },
            {
                id: "f2_4",
                latex: "\\Psi = \\oint_C \\mathbf{A} \\cdot d\\mathbf{l}",
                description: "Stokes teoremiyle manyetik akı (kontur integrali)",
                note: "Yüzey integrali yerine kontur integrali kullanarak akı hesabı."
            }
        ]
    },

    /* ============================================================
       BÖLÜM 3 — LOrentz KUVVETİ VE MANYETİK KUVVETLER
       (Hafta 4)
       ============================================================ */
    {
        id: "ch3",
        title: "Lorentz Kuvveti ve Manyetik Kuvvetler",
        icon: "⚡",
        weeks: "Hafta 4",
        formulas: [
            {
                id: "f3_1",
                latex: "\\mathbf{F} = Q(\\mathbf{E} + \\mathbf{u} \\times \\mathbf{B})",
                description: "Lorentz Kuvveti (elektrik + manyetik)",
                note: "Q: yük [C], u: hız [m/s], E: elektrik alan [V/m], B: manyetik ak yoğunluğu [T]."
            },
            {
                id: "f3_2",
                latex: "\\mathbf{F}_m = Q(\\mathbf{u} \\times \\mathbf{B})",
                description: "Manyetik Lorentz Kuvveti (yalnızca B alanı)",
                note: "E=0 olduğunda kullanılır. Referans soru 3'te bu formül doğrudan uygulanır."
            },
            {
                id: "f3_3",
                latex: "\\mathbf{F} = I\\, d\\mathbf{l} \\times \\mathbf{B}",
                description: "Akım taşıyan iletken üzerine manyetik kuvvet",
                note: "İletken üzerindeki herhangi bir diferansiyel eleman için kuvvet."
            },
            {
                id: "f3_4",
                latex: "\\mathbf{F} = I \\mathbf{L} \\times \\mathbf{B}",
                description: "Düz iletken üzerine toplam manyetik kuvvet",
                note: "L: telin uzunluk vektörü. B homojen ise integral doğrudan bu sonucu verir."
            }
        ]
    },

    /* ============================================================
       BÖLÜM 4 — MANYETİK SINIR KOŞULLARI
       (Hafta 7)
       ============================================================ */
    {
        id: "ch4",
        title: "Manyetik Sınır Koşulları",
        icon: "🔀",
        weeks: "Hafta 7",
        formulas: [
            {
                id: "f4_1",
                latex: "B_{1n} = B_{2n}",
                description: "Normal B bileşeni sınırda süreklidir",
                note: "Her iki ortamda sınıra dik B bileşeni eşittir: μ₁H₁ₙ = μ₂H₂ₙ"
            },
            {
                id: "f4_2",
                latex: "H_{1t} - H_{2t} = K",
                description: "Teğetsel H farkı yüzey akımına eşittir",
                note: "K [A/m]: yüzey akım yoğunluğu. Yüzey akımı yoksa (K=0): H₁ₜ = H₂ₜ"
            },
            {
                id: "f4_3",
                latex: "\\mathbf{a}_{n12} \\times (\\mathbf{H}_1 - \\mathbf{H}_2) = \\mathbf{K}",
                description: "Sınır koşulu vektör formu",
                note: "a_n12: bölge 2'den 1'e normal birim vektör."
            },
            {
                id: "f4_4",
                latex: "\\frac{\\tan\\theta_1}{\\tan\\theta_2} = \\frac{\\mu_1}{\\mu_2}",
                description: "Manyetik kırılma yasası (iki ortam arası açı ilişkisi)",
                note: "θ: B'nin yüzeye normalıyla yaptığı açı. μ₁>>μ₂ ise θ₂≈90° (demir toplayıcı etki)."
            }
        ]
    },

    /* ============================================================
       BÖLÜM 5 — İNDÜKTANS VE MANYETİK ENERJİ
       (Hafta 8)
       ============================================================ */
    {
        id: "ch5",
        title: "İndüktans ve Manyetik Enerji",
        icon: "🔋",
        weeks: "Hafta 8",
        formulas: [
            {
                id: "f5_1",
                latex: "W_m = \\frac{\\mu_0 I^2 \\ell}{4\\pi}\\ln\\!\\frac{b}{a}",
                description: "Koaksiyel kablo (yalıtkan bölge) manyetik enerji",
                note: "a: iç yarıçap, b: dış yarıçap, ℓ: uzunluk. Referans soru 4 ve 5'te kullanılır."
            },
            {
                id: "f5_2",
                latex: "W_m = \\frac{1}{2}L I^2",
                description: "Endüktanslı devredeki manyetik enerji",
                note: "L: indüktans [H], I: akım [A]. Kondansatör enerjisinin manyetik eşdeğeri."
            },
            {
                id: "f5_3",
                latex: "L = \\frac{\\mu \\ell}{2\\pi}\\ln\\!\\frac{b}{a}",
                description: "Koaksiyel kablo indüktansı",
                note: "μ: ortam geçirgenliği. L = 2Wm/I² bağıntısından türetilir."
            },
            {
                id: "f5_4",
                latex: "w_m = \\frac{B^2}{2\\mu} = \\frac{1}{2}\\mu H^2",
                description: "Manyetik enerji yoğunluğu [J/m³]",
                note: "wm = ½ B·H. Boş uzayda μ=μ₀=4π×10⁻⁷ H/m kullanılır."
            }
        ]
    },

    /* ============================================================
       BÖLÜM 6 — ELEKTROMANYETİK İNDÜKSİYON
       (Hafta 9)
       ============================================================ */
    {
        id: "ch6",
        title: "Elektromanyetik İndüksiyon",
        icon: "⚙️",
        weeks: "Hafta 9",
        formulas: [
            {
                id: "f6_1",
                latex: "V_{emf} = -\\frac{d\\Psi}{dt}",
                description: "Faraday Yasası — İndüklenen EMF",
                note: "Eksi işareti Lenz yasasıdır: indüklenen akım, neden olduğu değişime karşı çıkar."
            },
            {
                id: "f6_2",
                latex: "\\nabla \\times \\mathbf{E} = -\\frac{\\partial \\mathbf{B}}{\\partial t}",
                description: "Faraday Yasası (diferansiyel / Maxwell formu)",
                note: "Zamanla değişen B alanı, rotasyonel bir E alanı oluşturur."
            },
            {
                id: "f6_3",
                latex: "V_{emf} = \\frac{1}{2}B\\omega L^2",
                description: "Dönen çubuk / dönen disk EMF'i",
                note: "B: manyetik alan [T], ω: açısal hız [rad/s], L: çubuk uzunluğu [m]. Referans soru 6'da kullanılır."
            },
            {
                id: "f6_4",
                latex: "V_{emf} = \\int_a^b (\\mathbf{u} \\times \\mathbf{B}) \\cdot d\\mathbf{l}",
                description: "Motionel (hareketsel) EMF — genel",
                note: "Sabit B alanında v hızıyla hareket eden iletken için."
            },
            {
                id: "f6_5",
                latex: "V_{emf} = B_{\\perp}\\, L\\, v",
                description: "Motionel EMF (düz iletken, homojen B)",
                note: "B⊥: harekete dik B bileşeni. Araba tamponu sorusunda: Vemf = Bdikey × L × v. Referans soru 7'de kullanılır."
            }
        ]
    },

    /* ============================================================
       BÖLÜM 7 — YER DEĞİŞTİRME AKIMI VE MAXWELL DENKLEMLERİ
       (Hafta 10)
       ============================================================ */
    {
        id: "ch7",
        title: "Yer Değiştirme Akımı ve Maxwell Denklemleri",
        icon: "📡",
        weeks: "Hafta 10",
        formulas: [
            {
                id: "f7_1",
                latex: "\\mathbf{J}_d = \\varepsilon \\frac{\\partial \\mathbf{E}}{\\partial t}",
                description: "Yer değiştirme akımı yoğunluğu",
                note: "Maxwell'in Ampere yasasına eklediği terim. Kondansatörlerde iletim akımı yerine geçer."
            },
            {
                id: "f7_2",
                latex: "J_{d,\\max} = \\varepsilon E_0 \\omega",
                description: "Maksimum yer değiştirme akımı yoğunluğu (sinüzoidal E)",
                note: "E = E₀sin(ωt) için. ω = 2πf. Referans soru 8'de kullanılır."
            },
            {
                id: "f7_3",
                latex: "\\nabla \\times \\mathbf{H} = \\mathbf{J} + \\varepsilon \\frac{\\partial \\mathbf{E}}{\\partial t}",
                description: "Ampere-Maxwell Yasası (dinamik — tam form)",
                note: "Statik durumda ∂E/∂t = 0 terim düşer: ∇×H = J"
            },
            {
                id: "f7_4",
                latex: "\\nabla \\cdot \\mathbf{D} = \\rho_v",
                description: "Gauss Yasası (elektrik) — Maxwell 1. denklemi",
                note: "D = εE: elektrik akı yoğunluğu. ρv: hacim yük yoğunluğu."
            },
            {
                id: "f7_5",
                latex: "f_c = \\frac{\\sigma}{2\\pi\\varepsilon}",
                description: "Kayıp frekansı (crossover frequency)",
                note: "fc'de iletim ve yer değiştirme akımları eşittir. f >> fc → dielektrik; f << fc → iletken. Referans soru 9."
            },
            {
                id: "f7_6",
                latex: "\\tan\\delta = \\frac{\\sigma}{\\omega\\varepsilon} = \\frac{f_c}{f}",
                description: "Kayıp tanjantı (loss tangent)",
                note: "tanδ = 1 → fc'de. tanδ << 1 → iyi dielektrik. tanδ >> 1 → iyi iletken."
            }
        ]
    },

    /* ============================================================
       BÖLÜM 8 — ZAMANLA DEĞİŞEN POTANSIYELLER VE DALGA DENKLEMLERİ
       (Hafta 10–11)
       ============================================================ */
    {
        id: "ch8",
        title: "Dalga Denklemleri ve Düzlemsel Dalgalar",
        icon: "〰️",
        weeks: "Hafta 10–11",
        formulas: [
            {
                id: "f8_1",
                latex: "v_p = \\frac{\\omega}{\\beta} = \\frac{1}{\\sqrt{\\mu\\varepsilon}} = \\frac{c}{\\sqrt{\\mu_r\\varepsilon_r}}",
                description: "Faz hızı (düzlemsel dalga)",
                note: "c = 3×10⁸ m/s. Referans soru 10'da kullanılır."
            },
            {
                id: "f8_2",
                latex: "\\beta = \\omega\\sqrt{\\mu\\varepsilon} = \\frac{2\\pi}{\\lambda}",
                description: "Faz sabiti (wavenumber) [rad/m]",
                note: "λ: dalga boyu. λ = vp/f bağıntısıyla da hesaplanır."
            },
            {
                id: "f8_3",
                latex: "\\eta = \\sqrt{\\frac{\\mu}{\\varepsilon}} = \\frac{\\eta_0}{\\sqrt{\\varepsilon_r}}\\;(\\mu_r=1)",
                description: "Dalga empedansı / karakteristik empedans [Ω]",
                note: "η₀ = 120π ≈ 377 Ω (boş uzay). Referans soru 10'da kullanılır."
            },
            {
                id: "f8_4",
                latex: "H_0 = \\frac{E_0}{\\eta}",
                description: "H ve E genliklerinin ilişkisi",
                note: "Düzlemsel dalgada E ve H birbirine dik ve |E|/|H| = η."
            },
            {
                id: "f8_5",
                latex: "\\lambda = \\frac{v_p}{f} = \\frac{2\\pi}{\\beta}",
                description: "Dalga boyu",
                note: "vp: faz hızı, f: frekans. β = 2π/λ bağıntısı sıkça kullanılır."
            },
            {
                id: "f8_6",
                latex: "\\mathbf{E}(z,t) = E_0\\cos(\\omega t - \\beta z)\\,\\mathbf{a}_x",
                description: "+z yönünde ilerleyen düzlemsel dalganın E alanı",
                note: "Faz = (ωt − βz). −βz: ilerleyen dalga. +βz: geri giden dalga."
            },
            {
                id: "f8_7",
                latex: "\\hat{\\mathbf{k}} \\times \\hat{\\mathbf{E}} = \\hat{\\mathbf{H}} \\cdot \\eta",
                description: "Dalga yayılım yönü, E ve H ilişkisi",
                note: "k̂ × Ê yönü H'yi verir. Örn: +z yönünde ax → ay (H yönü)."
            }
        ]
    },

    /* ============================================================
       BÖLÜM 9 — MANYETİK MALZEME ÖZELLİKLERİ
       (Hafta 6–7)
       ============================================================ */
    {
        id: "ch9",
        title: "Manyetik Malzeme Özellikleri",
        icon: "🧲",
        weeks: "Hafta 6–7",
        formulas: [
            {
                id: "f9_1",
                latex: "\\mathbf{B} = \\mu\\mathbf{H} = \\mu_0\\mu_r\\mathbf{H}",
                description: "B-H ilişkisi (lineer izotropik malzeme)",
                note: "μ₀ = 4π×10⁻⁷ H/m, μᵣ: bağıl manyetik geçirgenlik. Boş uzayda μᵣ = 1."
            },
            {
                id: "f9_2",
                latex: "\\mu_0 = 4\\pi \\times 10^{-7}\\text{ H/m}",
                description: "Boş uzay manyetik geçirgenliği (sabiti)",
                note: "Referans soru 1'de μ₀ eksikliği düzeltilmişti. Formüllerde kesinlikle bulunmalıdır."
            },
            {
                id: "f9_3",
                latex: "\\varepsilon_0 = 8.854 \\times 10^{-12}\\text{ F/m} \\approx \\frac{1}{36\\pi}\\times10^{-9}",
                description: "Boş uzay elektrik geçirgenliği (sabiti)",
                note: "Yer değiştirme akımı ve kapasitans hesaplarında kullanılır."
            },
            {
                id: "f9_4",
                latex: "\\eta_0 = \\sqrt{\\frac{\\mu_0}{\\varepsilon_0}} = 120\\pi \\approx 377\\;\\Omega",
                description: "Boş uzay dalga empedansı",
                note: "Dalga empedansı η = η₀/√(μᵣεᵣ) formülünde temel değer."
            },
            {
                id: "f9_5",
                latex: "c = \\frac{1}{\\sqrt{\\mu_0\\varepsilon_0}} = 3\\times10^8\\text{ m/s}",
                description: "Boş uzayda ışık hızı",
                note: "Faz hızı hesaplarında referans değer: vp = c/√(μᵣεᵣ)."
            }
        ]
    },

    /* ============================================================
       BÖLÜM 10 — FREKANS ALANINDA (PHASOR) ÇÖZÜM
       (Hafta 11)
       ============================================================ */
    {
        id: "ch10",
        title: "Frekans Alanı (Phasor) ve Harmonik Alanlar",
        icon: "🌐",
        weeks: "Hafta 11",
        formulas: [
            {
                id: "f10_1",
                latex: "\\mathbf{E}(\\mathbf{r},t) = \\text{Re}\\!\\left[\\hat{\\mathbf{E}}(\\mathbf{r})\\,e^{j\\omega t}\\right]",
                description: "Anlık E alanı ↔ Faz gösterimi (phasor) dönüşümü",
                note: "Sinüzoidal kararlı hal analizinde ∂/∂t → jω dönüşümü yapılır."
            },
            {
                id: "f10_2",
                latex: "\\nabla \\times \\hat{\\mathbf{H}} = \\mathbf{J} + j\\omega\\varepsilon\\,\\hat{\\mathbf{E}}",
                description: "Ampere-Maxwell yasası (phasor form)",
                note: "∂/∂t yerine jω yazıldığında elde edilir."
            },
            {
                id: "f10_3",
                latex: "\\nabla \\times \\hat{\\mathbf{E}} = -j\\omega\\mu\\,\\hat{\\mathbf{H}}",
                description: "Faraday yasası (phasor form)",
                note: "Faraday: ∇×E = -∂B/∂t → phasor formda ∂/∂t → jω"
            },
            {
                id: "f10_4",
                latex: "\\omega = 2\\pi f",
                description: "Açısal frekans ile frekans ilişkisi",
                note: "ω [rad/s], f [Hz]. T = 1/f: periyot."
            }
        ]
    }

];
