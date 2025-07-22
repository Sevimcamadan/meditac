const doctors = [
    {
        id: 1,
        name: "Rabia Aykar",
        title: "Dkt.",
        specialization: "Konuşma ve Dil Terapisi",
        hospital: "Meditac",
        image: "/images/doctors/rabia-aykar.jpg",
        headerImage: "/images/doctors/rabia-aykar-header.jpg",
        education: [
            "2018-2022 Üsküdar Üniversitesi Dil ve Konuşma Terapisi",
            "2022-2024 Üsküdar Üniversitesi Dil ve Konuşma Terapisi Yüksek Lisans"
        ],
        experience: [
            "2022 Özel İlgi Otizm Özel Eğitim ve Rehabilitasyon Merkezi",
            "2023-2024 Moni Dil Konuşma ve Gelişim Merkezi",
            "2023-2024 Özel Ortadoğu Fizik Tedavi ve Rehabilitasyon Hastanesi"
        ],
        languages: ["İngilizce", "Arapça", "Almanca"],
        memberships: ["Dil ve Konuşma Terapistleri Derneği"],

    },

    {
        id: 2,
        name: "Gülbahar Darılmaz",
        title: "Doç. Dr.",
        specialization: "Göğüs Hastalıkları",
        hospital: "Meditac",
        image: "/images/doctors/gulbahar-darilmaz.jpg",
        headerImage: "/images/doctors/gulbahar-darilmaz-header.jpg",
        interests: [
            "Astım alerji",
            "KOAH",
            "Akciğer kanseri",
            "Uyku apne sendromu",
            "Akciğer fibrozisi",
            "Bronkoskopi",
            "Sigara bırakma",
            "Tıbbi genetik"
        ],
        education: [
            "1994-2000 Gazi Üniversitesi Tıp Fakültesi Dr.",
            "2001-2006 Dışkapı Yıldırım Beyazıd EAH Göğüs Hastalıkları Uzm. Dr.",
            "2019 Başkent Üniversitesi Göğüs Hastalıkları AD Yrd. Doç. Dr.",
            "2024 Başkent Üniversitesi Göğüs Hastalıkları AD Doç. Dr.",
            "2021 Ankara Yıldırım Beyazıt Üniversitesi Tıbbi Genetik Doktorası"
        ],
        experience: [
            "2001-2006 Dışkapı Yıldırım Beyazıd EAH Göğüs Hastalıkları Kliniği",
            "2006-2009 Çorum Bölge Göğüs Hastalıkları Hastanesi",
            "2009-2012 Etlik İhtisas EAH Göğüs Hastalıkları Kliniği",
            "2012–2014 Dışkapı Yıldırım Beyazıd EAH Göğüs Hastalıkları Kliniği",
            "2014-2016 Turgut Özal Üniversitesi Göğüs Hastalıkları AD",
            "2016-2018 Magnet Hastanesi",
            "2018-2024 Başkent Üniversitesi Göğüs Hastalıkları AD"
        ],
        memberships: [
            "Türk Toraks Derneği",
            "Türkiye Solunum Araştırmaları Derneği",
            "Akciğer Sağlığı ve Yoğun Bakım Derneği",
            "Türk Uyku Tıbbı Derneği",
            "European Respiratory Society"
        ],
        certificates: [
            "2011 Royal Society of Medicine, London – Asthma and COPD",
            "2007 Uyku Laboratuvarı PSG ve Analizi – Dışkapı EAH",
            "2008 Göğüs Hastalıkları Yoğun Bakım – Ankara Üniversitesi",
            "2017 Mekanik Ventilasyon Uygulamaları – ASYBD",
            "2014 Tübitak Ar-Ge ve Proje Hazırlama Eğitimi",
            "2009 TTD Tütün Kontrolü ve Yoğun Bakım Kursları",
            "2008-2006 Uyku Kursları ve Kongreleri (Türk Uyku Tıbbı Derneği)",
            "2022 Eğitici Eğitimi – Başkent Üniversitesi"
        ],
        awards: [
            "2022 TSAK En İyi Olgu Sunumu Ödülü",
            "2023 TSAK Dikkat Çeken Araştırmacı Ödülü"
        ],
        publications: [
            "Darılmaz Yüce Gülbahar, Akarca Elif Pınar, ... Etyoloji, rekürrens ve mortalite riski. TURKISH JOURNAL of CLINICS and LABORATORY, 14(3), 451-458.",
            "Darılmaz Yüce Gülbahar, Iskandarov Matın, ... Coinfection. Journal of Izmir Chest Hospital, 36(3), 133-140.",
            "Darılmaz Yüce Gülbahar (2014). ... Diffüz Parankimal Akciğer Hastalıkları. GGHS, 2(3), 263-274.",
        ],
        books: [
            "Göğüs Hastalıkları & Cerrahisi Temelleri, Solunum Fonksiyon Testlerini Değerlendirme, 2022",
            "Geriatri Yaşlı Sağlığı ve Hastalıkları, Yaşlıda Laboratuvar Testlerinin Yorumlanması, 2021",
            "Türkiye Klinikleri, Obstrüktif Hastalıkların Değerlendirilmesinde SFT, 2021",
            "Covid-19 ve Sigara, 2021",
            "Güncel Göğüs Hastalıkları Serisi, İmmünsüpresif Hastalarda Viral Pnömoniler, 2021",
            "Klinikte COVID-19, 2020",
            "Mesleki ve Çevresel SSH, Araştırma Çalışanları, 2014",
            "Göğüs Hastalıklarında Girişimler, Benign Trakeal Stenoz, 2014",
            "Ofis Çalışanları ve Öğretmenler, 2014",
            "Yoğun Bakımda Bronkoskopi, Hemoptizili Hasta"
        ],
        projects: [
            "Covid-19 Olgularında Pulmoner İntravasküler Koagülasyon – Araştırma Projesi, 2020"
        ],
        articles: [
            "Geriatri Yaşlı Sağlığı Ve Hastalıkları, Yaşlıda Laboratuvar Testlerinin Yorumlanması, 2021",
            "Türkiye Klinikleri Göğüs Hastalıkları, Klinik Uygulamalarda SFT, 2021",
        ]
    },
    {
        id: 3,
        name: "Büşra Tari",
        title: "Dyt.",
        specialization: "Beslenme ve Diyet",
        hospital: "Meditac",
        image: "/images/doctors/busra-tari.jpg",
        headerImage: "/images/doctors/busra-tari-header.jpg",
        interests: [
            "Kilo yönetimi",
            "Metabolik cerrahide beslenme",
            "Yeme bozuklukları",
            "Kanserde beslenme",
            "Gebelikte beslenme",
            "Kadın hastalıklarında beslenme",
            "Diyabette beslenme",
            "Ergenlik ve çocukluk çağında beslenme"
        ],
        education: [
            "2019-2022 Bayburt Üniversitesi"
        ],
        experience: [
            "2022-2023 Birsel Kavak Beslenme ve Diyet Danışmanlık Merkezi",
            "2023-2024 Ortadoğu Fizik Tedavi Hastanesi"
        ],
        languages: ["İngilizce"],
        memberships: ["Türkiye Diyetisyenler Derneği"],
        certificates: [
            "3. Diyabet Diyetisyenliği Kursu Sertifikası",
            "Gebelik ve Laktasyon Dönemlerinde Beslenme Kursu",
            "Gluten ile İlişkili Hastalar ve Güncel Beslenme Tedavisi",
            "Obezite Cerrahisi ve Diyetisyenliği Kongresi",
            "Ergenlerde Yeme Davranışı Bozuklukları"
        ],

    },
    {
        id: 4,
        name: "Canan Görpelioğlu",
        title: "Prof. Dr.",
        specialization: "Medikal Estetik",
        hospital: "Meditac",
        image: "/images/doctors/canan-gorpelioglu.jpg",
        headerImage: "/images/doctors/canan-gorpelioglu-header.jpg",
        interests: [
            "Akne",
            "Sedef hastalığı",
            "Egzama",
            "Siğil",
            "Nasır",
            "Saç dökülmesi",
            "Dolgu",
            "Botoks"
        ],
        education: [
            "Ankara Üniversitesi Tıp Fakültesi",
            "Ankara Numune Eğitim ve Araştırma Hastanesi"
        ],
        experience: [
            "1995-1997 Çankırı Şabanözü Sağlık Ocağı",
            "1997-2000 Ankara Numune Eğitim ve Araştırma Hastanesi Dermatoloji Kliniği",
            "2000-2010 Fatih Üniversitesi Tıp Fakültesi Dermatoloji Anabilim Dalı Ankara",
            "2010-2015 Turgut Özal Üniversitesi Dermatoloji Anabilim Dalı",
            "2016-2018 Özel Muayehane"
        ],
        publications: [
            "Prevalence of scalp disorders and hair loss in children. Cutis. 2012",
            "Isotretinoin associated anal fissure and rectal bleeding. Int J Dermatol. 2012",
            "Prevalence of oral mucosal lesions from birth to two years. Niger J Clin Pract. 2011",
            "Supernumerary nipple: should we be alert? Pediatr Int. 2010",
            "Progressive macular hypomelanosis treated with clindamycin and UVB. 2010",
            "Influence of isotretinoin on nasal mucociliary clearance. Int J Dermatol. 2010",
            "Serum leptin and glucose levels in skin tags. Indian J Dermatol. 2009",
            "Nail alterations in infant patients. J Eur Acad Dermatol. 2008",
            "Prolactin in psoriasis pathogenesis. J Eur Acad Dermatol. 2008",
            "Isotretinoin and arrhythmic effect? Int J Dermatol. 2008",
            "Sildenafil effect on alopecia areata. J Dermatolog Treat. 2006",
            "Oral mucosa in pregnant vs non-pregnant patients. Eur J Dermatol. 2006",
            // ve diğerleri...
        ],
        proceedings: [
            "Prevalance of scalp disorders in children – 20th Congress of EADV, 2011",
            "Acquired acral lipodystrophy – 19th Congress of EADV, 2010",
            "Oral mucosa lesions in pediatric patients – 10th ESPD Congress, 2010",
            "Pregnancy Induced Pyogenic Granuloma – 17th EADV, 2008",
            // ve diğerleri...
        ],
        localPublications: [
            "Akne vulgaris ve psikopatoloji ilişkisi – Klinik Psikiyatri Dergisi, 2007",
            "Rekürren aftöz stomatit ve vitamin değerleri – Dermatose, 2006",
            "Doxycycline vs monomethasone in pityriasis rosea – Turk Klin J Dermatol, 2004",
            // ve diğerleri...
        ],
        localProceedings: [
            "Liken sklerozlu hastalarda MMP-2 ve MMP-3 çalışması – XXIII. Ulusal Dermatoloji Kongresi, 2010",
            "İnfantil perianal protüzyon ile ksantogranülom birlikteliği – XIX Lütfü Tat Simpozyumu, 2009",
            "Progresif maküler hipomelanozis vakası – XIX Lütfü Tat Simpozyumu, 2009",
            // ve diğerleri...
        ],
        citations: [
            "Sildenafil effect on alopecia areata – J Dermatolog Treat (2006) — 1 atıf",
            "Oral mucosa in pregnancy – Eur J Dermatol (2006) — 2 atıf",
            "Pyoderma gangrenosum postpartum – Eur J Dermatol (2008) — 1 atıf",
            "Faun-tail case with diastematomyelia – Dermatology (2004) — 2 atıf"
        ],
    },
    {
        id: 5,
        name: "Vahdet Gül",
        title: "Prof. Dr.",
        specialization: "Psikiyatri",
        hospital: "Meditac",
        image: "/images/doctors/vahdet-gul.jpg",
        headerImage: "/images/doctors/vahdet-gul-header.jpg",
        interests: [
            "Anksiyete",
            "Depresyon",
            "Vajinismus",
            "Psikogeriatri",
            "Tıbbi psikoterapi",
            "Bilişsel davranışçı terapi",
            "Eklektik terapi",
            "Aile terapisi"
        ],
        education: [
            "1980 Bursa Üniversitesi Uludağ Tıp Fakültesi",
            "1997 Kocaeli Üniversitesi Tıp Fakültesi Psikiyatri ABD"
        ],
        experience: [
            "1980-1981 Bursa Uludağ Üniversitesi",
            "1981-1999 London Hospital Medical College & North Middlesex Hospital, İngiltere",
            "2000-2014 Almanya Niedergelassener Facharzt für Psychiatrie",
            "2014-2021 Erzincan Binali Yıldırım Üniversitesi, Tıp Fakültesi",
            "2021- Özel Muayenehane & Özel Ortadoğu İncek Fizik Tedavi Hastanesi"
        ],
        languages: ["İngilizce", "Almanca"],
        conferences: [
            "Psikiyatride Modern Yaklaşımlar – Nahçivan Tıp Fakültesi",
            "COVID-19 Pandemisi ve Aşı Çalışmaları – EBYÜ Sağlık Bilimleri Fakültesi",
            "Dünya Ruh Sağlığı Günü – Erzincan İl Sağlık Müdürlüğü",
            "Stres ve Öfke Yönetimi – İstanbul Beyoğlu Öğretmenevi, MEB 2022",
            "Uyuşturucu ile Mücadele Çalıştayı – Erzincan, 2018",
            "No-Smoking Day – Erzincan Halk Sağlığı Müdürlüğü, 2016",
            "Sınav Kaygısı Seminerleri – Erzincan Üniversitesi ve Lise kurumları",
            "Şifalı Bitkiler ve Ekonomik Boyutu – Erzincan Tıbbi Bitkiler Çalıştayı 2017",
            "Psikosomatik bozukluklar – Halk Sağlığı Toplantıları 2017"
        ],
        publications: [
            "Gül V, Holborow EJ. Increased numbers of active B cells in circulation – Rheumatol Int. 1984",
            "Gül V. How much progress has psychiatry made? – Int. Eurasia Pharmacy Congress, 2015",
            "Gül V. Acculturation & psychiatric morbidity in young Turkish patients – Turkish J Psychiatry. 2008",
            "Gül V. Subclinic inflammation in rainy weather – Rev Română Med Lab, 2018",
            "Gül V. Tourette’s Syndrome after head trauma – Prensa Med Argent, 2015",
            "Gül V. Relationship between iron deficiency & depression – J J Psych Behav Sci, 2015",
            "Gül V. Vaginismus among Turkish women – Der Nervenarzt, 2009",
            "Gül V. Functional GI disorders in Turkish patients – Intern. Praxis, 2011"
        ],
        books: [],
        proceedings: [
            "İskemi-Reperfüzyon Hasarı – Erzincan Tıp Dergisi, 2018",
            "Polikistik Over Sendromu ve Myo-inositol – Gynecological Endocrinology, 2017",
            "Malaria prophylaxis & cannabis psychosis – Tägliche Praxis, 2009",
            "COVID-19 Pandemisinin Ruhsal Boyutu – Nahçıvan Üniversitesi Açılış Dersi, 2020"
        ],
    },
    {
        id: 6,
        name: "Ahsen Akay",
        title: "Uzm. Dr.",
        specialization: "Çocuk Sağlığı ve Hastalıkları",
        hospital: "Meditac",
        image: "/images/doctors/ahsen-akay.jpg",
        headerImage: "/images/doctors/ahsen-akay-header.jpg",
        interests: [
            "Sağlam bebek çocuk takibi",
            "Ek gıda beslenme eğitimi",
            "Çocukluk çağı enfeksiyonları",
            "Alerjik çocuğa bütüncül yaklaşım",
            "Çocukluk çağı aşılamaları",
            "Emzirme danışmanlığı"
        ],
        education: [
            "2009-2015 İstanbul Üniversitesi Cerrahpaşa Tıp Fakültesi Dr.",
            "2016-2021 Kafkas Üniversitesi Tıp Fakültesi Çocuk Sağlığı ve Hastalıkları Kliniği Uzm. Dr."
        ],
        experience: [
            "2016-2021 Kafkas Üniversitesi Tıp Fakültesi Çocuk Sağlığı ve Hastalıkları Kliniği",
            "2022-2023 Ardahan Devlet Hastanesi Çocuk Sağlığı ve Hastalıkları Kliniği",
            "2023-2024 Gölbaşı Şehit Ahmet Özsoy Devlet Hastanesi Çocuk Sağlığı ve Hastalıkları Kliniği"
        ],
        languages: ["İngilizce"],
        publications: [
            "Bıçakcı, Zafer; Arvas, Muhammet; Biçer, Canozan; Akay, Ahsen; Üstebay, Sefer; Üstebay, Döndü. (2017). Evaluation of Roseola Infantum Cases in Terms of Demographic Properties and Laboratory Values. Journal of Pediatric Infection. 11. 53-59. doi:10.5578/ced.201717"
        ],
    },
    {
        id: 7,
        name: "Armağan Küçük",
        title: "Uzm. Dr.",
        specialization: "Çocuk Sağlığı ve Hastalıkları",
        hospital: "Meditac",
        image: "/images/doctors/armagan-kucuk.jpg",
        headerImage: "/images/doctors/armagan-kucuk-header.jpg",
        interests: [
            "Yenidoğan süt çocuğu bebek beslenmesi",
            "Rutin bebek çocuk sağlığı takibi",
            "Uyku sağlığı eğitimi bozuklukları tedavisi",
            "Çocuklarda bağışıklama uygulamaları",
            "Çocuklarda beslenme bozuklukları tedavisi",
            "Çocuklarda solunum sistemi hastalıkları tedavisi",
            "Emzirme eğitimi",
            "Çocuk alerji testi uygulaması"
        ],
        education: [
            "2000-2007 Trakya Üniversitesi Tıp Fakültesi Dr.",
            "2009-2013 Akdeniz Üniversitesi Tıp Fakültesi Çocuk Sağlığı ve Hastalıkları Kliniği Uzm. Dr."
        ],
        experience: [
            "2009-2013 Akdeniz Üniversitesi Çocuk Sağlığı ve Hastalıkları",
            "2013-2015 Sincan Nafiz Körez Devlet Hastanesi",
            "2016-2023 Acıbadem Ankara Hastanesi"
        ],
        languages: ["İngilizce"],
        memberships: ["Türk Oftalmoloji Derneği"],
        books: [
            "Bu Çocuk Oldu – Yenidoğanlar için yeni nesil kadın doğum ve çocuk bakım kitabı (2022)",
            "Bebekler için lezzet deneyimleri – Ek gıdalar (2024)"
        ],
    },
    {
        id: 8,
        name: "Arzu Nihal Ak",
        title: "Uzm. Dr.",
        specialization: "Fizik Tedavi ve Rehabilitasyon",
        hospital: "Meditac",
        image: "/images/doctors/arzu-nihal-ak.jpg",
        headerImage: "/images/doctors/arzu-nihal-ak-header.jpg",
        interests: [
            "Nörolojik rehabilitasyon",
            "Ortopedik rehabilitasyon",
            "Romatizmal hastalıklar",
            "Bel boyun fıtığı",
            "Kemik erimesi",
            "Ağrı tedavisi",
            "Eklem enjeksiyonları",
            "Kök hücre tedavisi"
        ],
        education: [
            "1981-1987 Gazi Üniversitesi Tıp Fakültesi Dr.",
            "1988-1992 Ankara Rehabilitasyon Merkezi Uzm. Dr."
        ],
        experience: [
            "1992-2003 Ankara Etimesgut Devlet Hastanesi",
            "2003-2006 Has-Vak Tıp Merkezi",
            "2006-2023 Özel Özkaya Tıp Merkezi",
            "2023-2024 Özel Ortadoğu FTR Hastanesi"
        ],
        languages: ["İngilizce"],
        memberships: ["Türk FTR Uzmanlar Derneği"],
    },
    {
        id: 9,
        name: "Bekir Erol",
        title: "Uzm. Dr.",
        specialization: "Kardiyoloji",
        hospital: "Meditac",
        image: "/images/doctors/bekir-erol.jpg",
        headerImage: "/images/doctors/bekir-erol-header.jpg",
        interests: [
            "Kalp damar hastalıkları",
            "Renkli doppler EKO",
            "Eforlu EKG",
            "Tansiyon holter",
            "Ritim holter"
        ],
        education: [
            "1979 Ankara Üniversitesi Tıp Fakültesi",
            "1979-1983 Uçuş Hekimliği Merzifon, 5. Ana Jet Üssü",
            "1983-1987 Dahiliye İhtisası, Ankara GATA",
            "1990-1992 Kardiyoloji İhtisası, İstanbul GATA Kardiyoloji"
        ],
        experience: [
            "1987-1990 Etimesgut Hava Hastanesi Dahiliye Kliniği",
            "1992-2000 Etimesgut Hava Hastanesi Kardiyoloji Kliniği",
            "2000-2005 Giresun Devlet Hastanesi Kardiyoloji Kliniği",
            "2008-2014 Giresun Özel Kent Hastanesi Kardiyoloji",
            "2015–2018 Ankara Lokman Hekim Demetevler Polikliniği",
            "2021–2023 Pursaklar A Life Hastanesi"
        ],
        languages: ["İngilizce"],
        memberships: [
            "Türk Kardiyoloji Derneği",
            "Ankara Tabipler Odası"
        ],
    },
    {
        id: 10,
        name: "Filiz Ökten Özyüncü",
        title: "Uzm. Dr.",
        specialization: "Nöroloji",
        hospital: "Meditac",
        image: "/images/doctors/filiz-okten-ozyuncu.jpg",
        headerImage: "/images/doctors/filiz-okten-ozyuncu-header.jpg",
        interests: [
            "Baş ağrısı",
            "Epilepsi",
            "İnme",
            "Bunama",
            "Baş dönmesi",
            "Parkinson hastalığı",
            "Polinöropati"
        ],
        education: [
            "1996-2002 Ege Üniversitesi Tıp Fakültesi",
            "2004-2010 Başkent Üniversitesi Tıp Fakültesi Nöroloji Ana Bilim Dalı"
        ],
        experience: [
            "2002 – 2004 Erzincan Sağlık Eğitim Merkezi, Pratisyen Hekim",
            "2010 – 2012 Bingöl Devlet Hastanesi Nöroloji Kliniği",
            "2012 – 2015 Kozan Devlet Hastanesi Nöroloji Kliniği",
            "2015 – 2021 İstanbul Kanuni Sultan Süleyman Eğitim Araştırma Hastanesi",
            "2021 – 2023 Muayenehane Hekimliği",
            "2023 - 2024 İncek Ortadoğu Fizik Tedavi Hastanesi Nöroloji Kliniği"
        ],
        languages: ["İngilizce"],
    },
    {
        id: 11,
        name: "Gülseren Kayalar",
        title: "Uzm. Dr.",
        specialization: "Fizik Tedavi ve Rehabilitasyon",
        hospital: "Meditac",
        image: "/images/doctors/gulseren-kayalar.jpg",
        headerImage: "/images/doctors/gulseren-kayalar-header.jpg",
        interests: [
            "Skolyoz kifoz postür bozuklukları",
            "Skolyoz rehabilitasyonu",
            "Pediatrik rehabilitasyon",
            "Çocuklarda ayak deformiteleri",
            "Çocuklarda omurga bozuklukları",
            "Yetişkinlerde omurga hastalıkları",
            "Bel boyun fıtıkları",
            "Osteoporoz"
        ],
        education: [
            "1982-1988 Gazi Üniversitesi Tıp Fakültesi",
            "1993-1998 Başkent Üniversitesi Tıp Fakültesi FTR Anabilim Dalı"
        ],
        experience: [
            "1998-2014 Numune Eğitim Ve Araştırma Hastanesi",
            "2014-2019 Ankara Memorial Hastanesi",
            "2020-2025 MİA Yaşam Merkezi"
        ],
        languages: ["İngilizce"],
        memberships: [
            "Türkiye Fiziksel Tıp ve Rehabilitasyon Uzman Hekimler Derneği",
            "Türkiye Fiziksel Tıp ve Rehabilitasyon Derneği",
            "Skolyoz Araştırma ve Tedavi Derneği",
            "SOSORT",
            "Türkiye Osteoporoz Derneği",
            "IOF",
            "Osteoporoz ile Yaşam Derneği",
            "Türkiye Romatizma Araştırma ve Savaş Derneği",
            "Türk Geriatri Derneği",
            "El Rehabilitasyonu Derneği",
            "Kinezyo Bantlama Derneği"
        ],
        certificates: [
            "2014 SOSORT Educational Course Wiesbaden",
            "2018 SOSORT Dubrovnik",
            "2021 SOSORT Online",
            "2021 SEAS Eğitim Kursu",
            "2024 Lyon Metod Eğitim Kursu"
        ],
        awards: [],
        publications: [
            "Prevalence of Adolescent Idiopathic Scoliosis in Turkey – 2020",
            "Hypermobility Frequency in School Children – 2018",
            "Calcaneal Bone Mass Measurement and Osteoporosis – 2009",
            "Causal Attributions in Fibromyalgia – 2011",
            "COVID-19 and Rehabilitation in Turkey – 2020",
            "COPD and Osteoporosis – ERJ 2011"
        ],
        books: [
            "Skolyozun Üç Boyutlu Tedavisi – Çeviri Editörü",
            "Üç Boyutlu Skolyoz Tedavisi – Çeviri Editörü",
            "Kas-İskelet Sistemi Netter Atlası – Yardımcı Editör",
            "FTR-Akıl Notları – Kitap Bölümü",
            "Türkiye Klinikleri Skolyoz – Kitap Bölümü"
        ],
        proceedings: [
            "SOSORT 2018 – Bildiri #43",
            "SOSORT 2018 – Bildiri #58"
        ]
    },
    {
        id: 12,
        name: "Meltem Gülsüm Özulu",
        title: "Uzm. Dr.",
        specialization: "Dermatoloji (Cildiye)",
        hospital: "Meditac",
        image: "/images/doctors/meltem-gulsum-ozulu.jpg",
        headerImage: "/images/doctors/meltem-gulsum-ozulu-header.jpg",
        interests: [
            "Egzama",
            "Akne",
            "Rozase",
            "Ürtiker",
            "Mantar hastalıkları",
            "Tırnak saç hastalıkları",
            "Siğil tedavisi",
            "Kriyocerrahi uygulamaları"
        ],
        education: [
            "1983-1989 Ankara Üniversitesi Tıp Fakültesi",
            "1992-1996 Ankara Eğitim Ve Araştırma Hastanesi Dermatoloji Kliniği"
        ],
        experience: [
            "1989-1992 Dr. Mühittin Ülker Acil Yardım Ve Travmatoloji Hastanesi",
            "1996-1998 Ankara Eğitim Ve Araştırma Hastanesi Dermatoloji Kliniği",
            "1998-2019 ODTÜ Sağlık Ve Rehberlik Merkezi",
            "2021-2024 Özel Ortadoğu Hastanesi Dermatoloji Polikliniği"
        ],
        languages: ["İngilizce"],
        memberships: [
            "Türk Dermatoloji Derneği",
            "Ankara Tabip Odası"
        ],
        publications: [
            "İyotlu tuz alımına bağlı bir iyododerma olgusu – 1993",
            "Liken planus ve karaciğer hastalıkları – 1997",
            "Poriazislilerde folik asit eksikliği – 1996",
            "B ve C hepatit prevalansı – 1995",
            "Liken planus ve karaciğer hastalıkları – 1996"
        ],
    },
    {
        id: 13,
        name: "Mitat Cebeci",
        title: "Uzm. Dr.",
        specialization: "Fizik Tedavi ve Rehabilitasyon",
        hospital: "Meditac",
        image: "/images/doctors/mitat-cebeci.jpg",
        headerImage: "/images/doctors/mitat-cebeci-header.jpg",
        interests: [
            "İnme rehabilitasyonu",
            "Omurilik hasarı rehabilitasyonu",
            "Serebral palsi rehabilitasyonu",
            "Bel fıtığında nokta atış tedavisi",
            "Ultrason eşliğinde nokta atış tedavisi",
            "Osteoartrit Rehabilitasyonu"
        ],
        education: [
            "2004-2011 Gazi Üniversitesi Tıp Fakültesi, Dr.",
            "2011-2015 Ankara Fizik Tedavi ve Rehabilitasyon Eğitim Araştırma Hastanesi, Uzm. Dr."
        ],
        experience: [
            "2015 Kastamonu Fizik Tedavi ve Rehabilitasyon Hastanesi",
            "2015-2020 Ankara Gaziler Fizik Tedavi ve Rehabilitasyon Eğitim ve Araştırma Hastanesi",
            "2020-2023 Diyarbakır Dağkapı Askeri Hastanesi"
        ],
        languages: ["İngilizce"],
        memberships: [
            "Ankara Tabip Odası",
            "Türkiye Fizik Tedavi ve Rehabilitasyon Uzman Hekimler Derneği",
            "Türkiye Omurilik Felçlileri Derneği"
        ],
        publications: [
            "Is Every Paraplegic Wheelchair User A Candidate For Overuse Syndromes? Journal of Clinical Neuroscience PMID: 24614161"
        ],
    },
    {
        id: 14,
        name: "Mustafa Enes Yılmaz",
        title: "Uzm. Dr.",
        specialization: "Check-Up",
        hospital: "Meditac",
        image: "/images/doctors/mustafa-enes-yilmaz.jpg",
        headerImage: "/images/doctors/mustafa-enes-yilmaz-header.jpg",
        interests: [
            "Primer sekonder hipertansiyon",
            "Hiperlipidemi metabolizma hastalıkları",
            "Endokrin bozukluklar",
            "Akut kronik böbrek yetmezliği",
            "Gastroözofageal reflü hastalığı",
            "Hepatitler kronik karaciğer hastalıkları",
            "Demir eksikliği megaloblastik anemiler",
            "Üçüncü basamak hasta yoğun bakım"
        ],
        education: [
            "2010-2017 Cumhuriyet Üniversitesi Tıp Fakültesi",
            "2018-2023 Ondokuz Mayıs Üniversitesi Tıp Fakültesi Hastanesi Uzm. Dr."
        ],
        experience: [
            "2023-2024 Özel Bilgi Hastanesi Genel Yoğun Bakım Sorumluluğu",
            "2024 Meditac"
        ],
        languages: ["İngilizce"],
    },
    {
        id: 15,
        name: "Nilgün Çiçek",
        title: "Uzm. Dr.",
        specialization: "İç Hastalıkları (Dahiliye)",
        hospital: "Meditac",
        image: "/images/doctors/nilgun-cicek.jpg",
        headerImage: "/images/doctors/nilgun-cicek-header.jpg",
        interests: [
            "Diabetes mellitus",
            "Hipertansiyon hiperlipidemi",
            "Troid hastalıkları",
            "Obezite insülin direnci",
            "Kan hastalıkları",
            "Böbrek hastalıkları",
            "Karaciğer mide sindirim sistemi hastalıkları",
            "Solunum sistemi enfeksiyon hastalıkları"
        ],
        education: [
            "1996-2002 Akdeniz Üniversitesi Tıp Fakültesi",
            "2007-2008 Ondokuz Mayıs Üniversitesi Çocuk Cerrahisi Anabilim Dalı",
            "2009-2013 Mersin Üniversitesi Araştırma ve Eğitim Hastanesi İç Hastalıkları Ana Bilim Dalı Uzm. Dr."
        ],
        experience: [
            "2002-2007 Çorum-Bayat Sağlık Grup Başkanı",
            "2007-2008 Ondokuz Mayıs Üniversitesi Çocuk Cerrahisi",
            "2009-2013 Mersin Üniversitesi İç Hastalıkları Kliniği",
            "2013-2015 Yozgat Devlet Hastanesi",
            "2015-2018 Çorum Özel Hastanesi",
            "2018-2021 Sungurlu Devlet Hastanesi",
            "2021-2023 Merzifon Devlet Hastanesi",
            "2023-2024 Lokman Hekim Akay Hastanesi"
        ],
        languages: ["İngilizce"],
        memberships: ["Türk Tabipler Birliği", "Hekimsen"],
    },
    {
        id: 16,
        name: "Yakup Yeşilkaya",
        title: "Uzm. Dr.",
        specialization: "Radyoloji",
        hospital: "Meditac",
        image: "/images/doctors/yakup-yesilkaya.jpg",
        headerImage: "/images/doctors/yakup-yesilkaya-header.jpg",
        interests: [
            "Ultrasonografi",
            "Doppler ultrasonografi",
            "Toraks meme radyolojisi",
            "Abdominal ürogenital radyoloji",
            "Kas iskelet nöroradyoloji"
        ],
        education: [
            "2000-2006 Ondokuz Mayıs Üniversitesi Tıp Fakültesi",
            "2006-2011 Hacettepe Üniversitesi Tıp Fakültesi Radyoloji Anabilim Dalı Uzm. Dr."
        ],
        experience: [
            "2011-2013 Kırşehir Ahi Evran Üniversitesi Eğitim ve Araştırma Hastanesi",
            "2014-2023 Etimesgut Devlet Hastanesi",
            "2024-2025 Özel Ankara Umut Hastanesi"
        ],
        languages: ["İngilizce"],
        memberships: [
            "Türk Radyoloji Derneği",
            "Türk Girişimsel Radyoloji Derneği",
            "Ankara Tabip Odası"
        ],
        publications: [
            "Gallbladder duplication: case report – Rahsan Gocmen, Yakup Yesilkaya",
            "Renal artery aneurysm and AV fistula management – Yesilkaya Y et al.",
            "Delayed high-flow priapism embolisation – Yakup Yesilkaya et al.",
            "Thyroid volume and HGF levels in Hashimoto's thyroiditis – Kilic MK, Yesilkaya Y et al.",
            "Retrobulber Flow in Diabetic Retinopathy – Mehmet Ragıp Ekmen, Yakup Yeşilkaya",
            "Kadın Genital Sistem Sonografi – Yakup Yeşilkaya, Deniz Akata"
        ],
    }
];

export default doctors;
