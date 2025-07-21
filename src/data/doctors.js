const doctors = [
    {
        id: 1,
        name: "Dkt. Rabia Aykar",
        specialization: "Konuşma ve Dil Terapisi",
        image: "/images/doctors/rabia-aykar.jpg",
        interests: [
            "Dil ve konuşma bozuklukları",
            "Otizm terapisi",
            "Gelişimsel bozukluklar",
            "Çok dilli terapiler"
        ],
        education: [
            "2018-2022 Üsküdar Üniversitesi Dil ve Konuşma Terapisi",
            "2022-2024 Üsküdar Üniversitesi Dil ve Konuşma Terapisi Yüksek Lisans"
        ],
        experience: [
            "2022 Özel İlgi Otizm Özel Eğitim ve Rehabilitasyon Merkezi",
            "2023-2024 Moni Dil Konuşma ve Gelişim Merkezi",
            "2023-2024 Özel Ortadoğu Fizik Tedavi ve Rehabilitasyon Hastanesi"
        ],
        languages: [
            "İngilizce",
            "Arapça",
            "Almanca"
        ],
        memberships: [
            "Dil ve Konuşma Terapistleri Derneği"
        ]
    },

    {
        id: 2,
        name: "Doç. Dr. Gülbahar Darılmaz",
        specialization: "Göğüs Hastalıkları",
        image: "/images/doctors/gulbahar-darilmaz.jpg",
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
            "1994-2000 Gazi Üniversitesi Tıp Fakültesi",
            "2001-2006 Dışkapı Yıldırım Beyazıd EAH Uzmanlık",
            "2019 Başkent Üniversitesi Yrd. Doç. Dr.",
            "2021 Ankara Yıldırım Beyazıt Üniversitesi Tıbbi Genetik Doktorası",
            "2024 Başkent Üniversitesi Doç. Dr."
        ],
        experience: [
            "2001-2006 Dışkapı Yıldırım Beyazıd EAH Göğüs Hastalıkları",
            "2006-2009 Çorum Göğüs Hastalıkları Hastanesi",
            "2009-2012 Etlik İhtisas EAH Göğüs Hastalıkları",
            "2012-2014 Dışkapı Yıldırım Beyazıd EAH",
            "2014-2016 Turgut Özal Üniversitesi",
            "2016-2018 Magnet Hastanesi",
            "2018-2024 Başkent Üniversitesi Tıp Fakültesi"
        ],
        memberships: [
            "Türk Toraks Derneği",
            "Türkiye Solunum Araştırmaları Derneği",
            "Akciğer Sağlığı ve Yoğun Bakım Derneği",
            "Türk Uyku Tıbbı Derneği",
            "European Respiratory Society"
        ],
        certifications: [
            "2011 Astım & KOAH Eğitimi – Londra, UK",
            "2007 Uyku Laboratuvarı PSG Eğitimi",
            "2008 Göğüs Yoğun Bakım Eğitimi – Ankara",
            "2017 Mekanik Ventilasyon Kursu",
            "2014 TÜBİTAK Ar-Ge Proje Hazırlama Eğitimi",
            "2008-2009 Uyku Tıbbı Temel ve İleri Kurslar",
            "2022 Eğitici Eğitimi Kursu – Başkent Üniv."
        ],
        awards: [
            "En İyi Olgu Sunumu – Türkiye Solunum Araştırmaları Derneği 2022",
            "Dikkat Çeken Araştırmacı Ödülü – TSAD 2023"
        ],
        publications: [
            "30+ ulusal ve uluslararası hakemli makale",
            "Çeşitli COVID-19, KOAH, astım, uyku bozuklukları konulu yayınlar"
        ],
        books: [
            "Göğüs Hastalıkları & Cerrahisi Temelleri – Solunum Fonksiyon Testleri",
            "Geriatri – Yaşlıda Laboratuvar Testleri",
            "COVID-19 ve Sigara – Efe Akademi"
        ],
        projects: [
            "COVID-19 Olgularında Pulmoner İntravasküler Koagülasyon – 2020, araştırmacı"
        ]
    },

    {
        id: 3,
        name: "Dyt. Büşra Tari",
        specialization: "Beslenme ve Diyet",
        image: "/images/doctors/busra-tari.jpg",
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
            "2019-2022 Bayburt Üniversitesi Beslenme ve Diyetetik"
        ],
        experience: [
            "2022-2023 Birsel Kavak Beslenme ve Diyet Danışmanlık Merkezi",
            "2023-2024 Ortadoğu Fizik Tedavi Hastanesi"
        ],
        languages: [
            "İngilizce"
        ],
        memberships: [
            "Türkiye Diyetisyenler Derneği"
        ],
        certifications: [
            "3. Diyabet Diyetisyenliği Kursu Sertifikası",
            "Gebelik ve Laktasyon Dönemlerinde Beslenme Kursu",
            "Gluten ile İlişkili Hastalar ve Güncel Beslenme Tedavisi",
            "Obezite Cerrahisi ve Diyetisyenliği Kongresi",
            "Ergenlerde Yeme Davranışı Bozuklukları"
        ]
    },

    {
        id: 4,
        name: "Prof. Dr. Canan Görpelioğlu",
        specialization: "Medikal Estetik",
        image: "/images/doctors/canan-gorpelioglu.jpg",
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
            "1997-2000 Ankara Numune EAH Dermatoloji Kliniği",
            "2000-2010 Fatih Üniversitesi Dermatoloji Anabilim Dalı",
            "2010-2015 Turgut Özal Üniversitesi Dermatoloji AD",
            "2016-2018 Özel muayenehane"
        ],
        memberships: [
            "Türk Dermatoloji Derneği",
            "European Academy of Dermatology and Venereology"
        ],
        publications: [
            "20+ uluslararası hakemli makale",
            "10+ ulusal makale",
            "Dermatoloji, estetik ve sistemik etkiler üzerine çok sayıda araştırma"
        ],
        presentations: [
            "20+ ulusal ve uluslararası kongre sunumu",
            "Avrupa Dermatoloji Akademisi Kongreleri"
        ],

    },
    {
        id: 5,
        name: "Prof. Dr. Vahdet Gül",
        specialization: "Psikiyatri",
        image: "/images/doctors/vahdet-gul.jpg",
        interests: [
            "Anksiyete ve stres bozuklukları",
            "Depresyon tedavisi",
            "Vajinismus tedavisi",
            "Psikogeriatri",
            "Tıbbi psikoterapi",
            "Bilişsel davranışsal terapi",
            "Eklektik terapi",
            "Aile terapisi"
        ],
        education: [
            "1980 Uludağ Üniversitesi Tıp Fakültesi",
            "1997 Kocaeli Üniversitesi Tıp Fakültesi Psikiyatri ABD"
        ],
        experience: [
            "1980-1981 Bursa Uludağ Üniversitesi",
            "1981-1999 London Hospital Medical College & North Middlesex Hospital, İngiltere",
            "2000-2014 Almanya - Uzman Psikiyatrist (Facharzt)",
            "2014-2021 Erzincan Binali Yıldırım Üniversitesi, Psikiyatri ABD, Prof. Dr.",
            "2021- ... Özel Muayenehane, Ankara Özel Ortadoğu İncek Hastanesi"
        ],
        languages: [
            "İngilizce",
            "Almanca"
        ],
        presentations: [
            "40+ akademik seminer ve konferans",
            "COVID-19, bağımlılık, sınav kaygısı, iletişim ve stres yönetimi konulu sunumlar"
        ],
        publications: [
            "30+ ulusal ve uluslararası akademik yayın",
            "Psikiyatri, bağışıklık, etnik kimlik, bağımlılık, kadın sağlığı, depresyon alanlarında araştırmalar"
        ]
    },

    {
        id: 6,
        name: "Uzm. Dr. Ahsen Akay",
        specialization: "Çocuk Sağlığı ve Hastalıkları",
        image: "/images/doctors/ahsen-akay.jpg",
        interests: [
            "Sağlam bebek ve çocuk takibi",
            "Ek gıda beslenme eğitimi",
            "Çocukluk çağı enfeksiyonları",
            "Alerjik çocuğa bütüncül yaklaşım",
            "Çocukluk çağı aşılamaları",
            "Emzirme danışmanlığı"
        ],
        education: [
            "2009-2015 İstanbul Üniversitesi Cerrahpaşa Tıp Fakültesi",
            "2016-2021 Kafkas Üniversitesi Tıp Fakültesi, Çocuk Sağlığı ve Hastalıkları Uzmanlık"
        ],
        experience: [
            "2016-2021 Kafkas Üniversitesi Tıp Fakültesi",
            "2022-2023 Ardahan Devlet Hastanesi",
            "2023-2024 Gölbaşı Şehit Ahmet Özsoy Devlet Hastanesi"
        ],
        languages: [
            "İngilizce"
        ],
        publications: [
            "Bicakci Z, Arvas M, Biçer C, Akay A, Üstebay S, Üstebay D. Roseola Infantum olgularının demografik özellikleri ve laboratuvar bulgularıyla değerlendirilmesi. Journal of Pediatric Infection, 2017."
        ]
    },
    {
        id: 7,
        name: "Uzm. Dr. Armağan Küçük",
        specialization: "Çocuk Sağlığı ve Hastalıkları",
        image: "/images/doctors/armagan-kucuk.jpg",
        interests: [
            "Yenidoğan ve süt çocuğu beslenmesi",
            "Rutin bebek ve çocuk sağlığı takibi",
            "Uyku sağlığı eğitimi ve bozuklukları tedavisi",
            "Çocuklarda bağışıklama uygulamaları",
            "Beslenme bozuklukları tedavisi",
            "Solunum sistemi hastalıkları tedavisi",
            "Emzirme eğitimi",
            "Çocuk alerji testi uygulamaları"
        ],
        education: [
            "2000-2007 Trakya Üniversitesi Tıp Fakültesi",
            "2009-2013 Akdeniz Üniversitesi Tıp Fakültesi, Çocuk Sağlığı ve Hastalıkları Uzmanlık"
        ],
        experience: [
            "2009-2013 Akdeniz Üniversitesi Hastanesi",
            "2013-2015 Sincan Nafiz Körez Devlet Hastanesi",
            "2016-2023 Acıbadem Ankara Hastanesi"
        ],
        languages: [
            "İngilizce"
        ],
        memberships: [
            "Türk Oftalmoloji Derneği"
        ],
        publications: [
            "Bu Çocuk Oldu – Yenidoğanlar için yeni nesil kadın doğum ve çocuk bakım kitabı (2022)",
            "Bebekler için Lezzet Deneyimleri – Ek Gıdalar (2024)"
        ]
    },
    {
        id: 8,
        name: "Uzm. Dr. Arzu Nihal Ak",
        specialization: "Fizik Tedavi ve Rehabilitasyon",
        image: "/images/doctors/arzu-nihal-ak.jpg",
        interests: [
            "Nörolojik rehabilitasyon",
            "Ortopedik rehabilitasyon",
            "Romatizmal hastalıklar",
            "Bel ve boyun fıtığı",
            "Kemik erimesi",
            "Ağrı tedavisi",
            "Eklem enjeksiyonları",
            "Kök hücre tedavisi"
        ],
        education: [
            "1981-1987 Gazi Üniversitesi Tıp Fakültesi",
            "1988-1992 Ankara Rehabilitasyon Merkezi, Uzmanlık"
        ],
        experience: [
            "1992-2003 Ankara Etimesgut Devlet Hastanesi",
            "2003-2006 Has-Vak Tıp Merkezi",
            "2006-2023 Özel Özkaya Tıp Merkezi",
            "2023-2024 Özel Ortadoğu FTR Hastanesi"
        ],
        languages: [
            "İngilizce"
        ],
        memberships: [
            "Türk Fiziksel Tıp ve Rehabilitasyon Uzmanları Derneği"
        ]
    },
    {
        id: 9,
        name: "Uzm. Dr. Bekir Erol",
        specialization: "Kardiyoloji",
        image: "/images/doctors/bekir-erol.jpg",
        interests: [
            "Kalp damar hastalıkları",
            "Renkli doppler EKO",
            "Eforlu EKG",
            "Tansiyon holter",
            "Ritim holter"
        ],
        education: [
            "1979 Ankara Üniversitesi Tıp Fakültesi",
            "1979-1983 Uçuş Hekimliği, Merzifon 5. Ana Jet Üssü",
            "1983-1987 Dahiliye İhtisası, Ankara GATA",
            "1990-1992 Kardiyoloji İhtisası, İstanbul GATA"
        ],
        experience: [
            "1987-1990 Etimesgut Hava Hastanesi, Dahiliye Kliniği",
            "1992-2000 Etimesgut Hava Hastanesi, Kardiyoloji Kliniği",
            "2000-2005 Giresun Devlet Hastanesi, Kardiyoloji Kliniği",
            "2008-2014 Giresun Özel Kent Hastanesi",
            "2015-2018 Ankara Lokman Hekim Demetevler Polikliniği",
            "2021-2023 Pursaklar A Life Hastanesi"
        ],
        languages: [
            "İngilizce"
        ],
        memberships: [
            "Türk Kardiyoloji Derneği",
            "Ankara Tabipler Odası"
        ]
    },
    {
        id: 10,
        name: "Uzm. Dr. Filiz Ökten Özyüncü",
        specialization: "Nöroloji",
        image: "/images/doctors/filiz-okten-ozyuncu.jpg",
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
            "2004-2010 Başkent Üniversitesi Tıp Fakültesi, Nöroloji Anabilim Dalı"
        ],
        experience: [
            "2002-2004 Erzincan Sağlık Eğitim Merkezi",
            "2010-2012 Bingöl Devlet Hastanesi",
            "2012-2015 Kozan Devlet Hastanesi",
            "2015-2021 İstanbul Kanuni Sultan Süleyman EAH",
            "2021-2023 Özel Muayenehane",
            "2023-2024 İncek Ortadoğu Fizik Tedavi Hastanesi"
        ],
        languages: [
            "İngilizce"
        ]
    },
    {
        id: 11,
        name: "Uzm. Dr. Gülseren Kayalar",
        specialization: "Fizik Tedavi ve Rehabilitasyon",
        image: "/images/doctors/gulseren-kayalar.jpg",
        interests: [
            "Skolyoz, kifoz ve postür bozuklukları",
            "Skolyoz rehabilitasyonu",
            "Pediatrik rehabilitasyon",
            "Çocuklarda ayak deformiteleri",
            "Çocuklarda ve yetişkinlerde omurga hastalıkları",
            "Bel ve boyun fıtıkları",
            "Osteoporoz"
        ],
        education: [
            "1982-1988 Gazi Üniversitesi Tıp Fakültesi",
            "1993-1998 Başkent Üniversitesi Tıp Fakültesi, FTR Anabilim Dalı"
        ],
        experience: [
            "1998-2014 Numune Eğitim ve Araştırma Hastanesi FTR Kliniği",
            "2014-2019 Ankara Memorial Hastanesi FTR Kliniği",
            "2020-2025 MİA Yaşam Merkezi FTR Kliniği"
        ],
        languages: [
            "İngilizce"
        ],
        memberships: [
            "Türkiye Fiziksel Tıp ve Rehabilitasyon Uzman Hekimler Derneği",
            "Türkiye Fiziksel Tıp ve Rehabilitasyon Derneği",
            "Skolyoz Araştırma ve Tedavi Derneği (Kurucu Üye)",
            "SOSORT – Society for Scoliosis Orthopaedic and Rehabilitation Treatment",
            "Türkiye Osteoporoz Derneği",
            "Uluslararası Osteoporoz Kuruluşu (IOF)",
            "Osteoporoz ile Yaşam Derneği",
            "Türkiye Romatizma Araştırma ve Savaş Derneği",
            "Türk Geriatri Derneği",
            "El Rehabilitasyonu Derneği",
            "Kinezyo Bantlama Derneği"
        ],
        certifications: [
            "2014 SOSORT Eğitim Kursu, Wiesbaden",
            "2018 SOSORT Eğitim Kursu, Dubrovnik",
            "2021 SOSORT Online Eğitim Kursu",
            "2021 SEAS Eğitim Kursu, Ankara",
            "2024 Lyon Metodu Eğitim Kursu, Ankara"
        ],
        academic: [
            "Lokman Hekim Üniversitesi Tıp Fakültesi – Misafir Öğretim Üyesi (2022 - halen)",
            "FTR Staj Eğitimi, Postür Bozuklukları, Fibromiyalji, Osteoartrit, Nöropatik Ağrı",
            "Fizyoterapi Bölümü: Akuaterapi ve Balneoterapi (2021-2022)",
            "Ergoterapi Bölümü: Bel ve Boyun Okulu (2023-2024)"
        ],
        publications: [
            "Yılmaz H, Kayalar G, et al. Prevalence of Adolescent Idiopathic Scoliosis in Turkey. Spine J. 2020",
            "Bozkurt S, Kayalar G, et al. Hypermobility in School Children and Its Relation to Scoliosis. Arch Rheumatol. 2018",
            "Kayalar G, et al. Bone Mass Measurement in Osteoporosis Screening. Clinics. 2009",
            "Kayalar G, et al. Alexithymia in Fibromyalgia and Low Back Pain. Nord J Psychiatry. 2011",
            "Kayalar G, et al. COVID-19 Impact on FTR in Turkey. Turk J Phys Med Rehabil. 2020"
        ],
        books: [
            "Skolyozun Üç Boyutlu Tedavisi – Çeviri Editörü (2013, 2020, 2022)",
            "Kas-İskelet Sistemi – Editör Yardımcısı (2009)",
            "FTR-Akıl Notları – Skolyoz Bölümü (2016)",
            "Skolyozda Kinezyobantlama – Türkiye Klinikleri (2017)"
        ],
        speaking: [
            "8. Tıbbi Rehabilitasyon Kongresi – Skolyoz Rehabilitasyonu (2022)",
            "6. Tıbbi Rehabilitasyon Kongresi – Görüntüleme Teknikleri (2018)",
            "25-27. Uluslararası FTR Kongreleri – Skolyoz Rehabilitasyonu",
            "1st Mediterranean Kinesiotaping Congress – Skolyozda Bantlama (2017)",
            "FTR Kurs Günleri – Skolyoz Egzersiz ve Görüntüleme (2016-2018)",
            "II. Azerbaycan Vertebrologia Semineri – Omurga Biyomekaniği (2019)"
        ]
    },
    {
        id: 12,
        name: "Uzm. Dr. Meltem Gülsüm Özulu",
        specialization: "Dermatoloji (Cildiye)",
        image: "/images/doctors/meltem-gulsum-ozulu.jpg",
        interests: [
            "Egzama",
            "Akne",
            "Rozase",
            "Ürtiker",
            "Mantar hastalıkları",
            "Tırnak ve saç hastalıkları",
            "Siğil tedavisi",
            "Kriyocerrahi uygulamaları"
        ],
        education: [
            "1983-1989 Ankara Üniversitesi Tıp Fakültesi",
            "1992-1996 Ankara Eğitim ve Araştırma Hastanesi Dermatoloji Kliniği"
        ],
        experience: [
            "1989-1992 Dr. Mühittin Ülker Acil Yardım ve Travmatoloji Hastanesi",
            "1996-1998 Ankara Eğitim ve Araştırma Hastanesi Dermatoloji Kliniği",
            "1998-2019 ODTÜ Sağlık ve Rehberlik Merkezi Dermatoloji Polikliniği",
            "2021-2024 Özel Ortadoğu Hastanesi Dermatoloji Polikliniği"
        ],
        languages: [
            "İngilizce"
        ],
        memberships: [
            "Türk Dermatoloji Derneği",
            "Ankara Tabip Odası"
        ],
        publications: [
            "İyotlu tuz alımına bağlı bir iyododerma olgusu. Turk J Dermatol, 1993",
            "Liken planus ve karaciğer hastalıkları. Lepr Mec, 1997",
            "Psoriazis ve folik asit eksikliği ilişkisi. Lepr Mec, 1996",
            "Liken planuslu hastalarda hepatit prevalansı. Lütfi Tat Sempozyumu, 1995",
            "Liken planus ve karaciğer hastalıkları (Uzmanlık Tezi), 1996"
        ]
    },
    {
        id: 13,
        name: "Uzm. Dr. Mitat Cebeci",
        specialization: "Fizik Tedavi ve Rehabilitasyon",
        image: "/images/doctors/mitat-cebeci.jpg",
        interests: [
            "İnme rehabilitasyonu",
            "Omurilik hasarı rehabilitasyonu",
            "Serebral palsi rehabilitasyonu",
            "Bel fıtığında nokta atış tedavisi",
            "Ultrason eşliğinde nokta atış tedavisi",
            "Osteoartrit rehabilitasyonu"
        ],
        education: [
            "2004-2011 Gazi Üniversitesi Tıp Fakültesi",
            "2011-2015 Ankara Fizik Tedavi ve Rehabilitasyon Eğitim Araştırma Hastanesi"
        ],
        experience: [
            "2015 Kastamonu Fizik Tedavi ve Rehabilitasyon Hastanesi",
            "2015-2020 Ankara Gaziler Fizik Tedavi ve Rehabilitasyon Eğitim ve Araştırma Hastanesi",
            "2020-2023 Diyarbakır Dağkapı Askeri Hastanesi"
        ],
        languages: [
            "İngilizce"
        ],
        memberships: [
            "Ankara Tabip Odası",
            "Türkiye Fizik Tedavi ve Rehabilitasyon Uzman Hekimler Derneği",
            "Türkiye Omurilik Felçlileri Derneği"
        ],
        publications: [
            "Is Every Paraplegic Wheelchair User A Candidate For Overuse Syndromes? Journal of Clinical Neuroscience, PMID: 24614161"
        ]
    },
    {
        id: 14,
        name: "Uzm. Dr. Mustafa Enes Yılmaz",
        specialization: "Check-Up",
        image: "/images/doctors/mustafa-enes-yilmaz.jpg",
        interests: [
            "Primer ve sekonder hipertansiyon",
            "Hiperlipidemi ve metabolizma hastalıkları",
            "Endokrin bozukluklar",
            "Akut ve kronik böbrek yetmezliği",
            "Gastroözofageal reflü hastalığı",
            "Hepatitler ve kronik karaciğer hastalıkları",
            "Demir eksikliği ve megaloblastik anemiler",
            "Üçüncü basamak hasta ve yoğun bakım"
        ],
        education: [
            "2010-2017 Cumhuriyet Üniversitesi Tıp Fakültesi",
            "2018-2023 Ondokuz Mayıs Üniversitesi Tıp Fakültesi Hastanesi"
        ],
        experience: [
            "2023-2024 Özel Bilgi Hastanesi Genel Yoğun Bakım Sorumluluğu",
            "2024 Medical Park İncek"
        ],
        languages: [
            "İngilizce"
        ],
        memberships: []
    },
    {
        id: 15,
        name: "Uzm. Dr. Nilgün Çiçek",
        specialization: "İç Hastalıkları (Dahiliye)",
        image: "/images/doctors/nilgun-cicek.jpg",
        interests: [
            "Diabetes mellitus",
            "Hipertansiyon ve hiperlipidemi",
            "Tiroid hastalıkları",
            "Obezite ve insülin direnci",
            "Kan hastalıkları",
            "Böbrek hastalıkları",
            "Karaciğer, mide ve sindirim sistemi hastalıkları",
            "Solunum sistemi enfeksiyon hastalıkları"
        ],
        education: [
            "1996-2002 Akdeniz Üniversitesi Tıp Fakültesi",
            "2007-2008 Ondokuz Mayıs Üniversitesi Çocuk Cerrahisi Anabilim Dalı",
            "2009-2013 Mersin Üniversitesi İç Hastalıkları Ana Bilim Dalı"
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
        languages: [
            "İngilizce"
        ],
        memberships: [
            "Türk Tabipler Birliği",
            "Hekimsen"
        ]
    },
    {
        id: 16,
        name: "Uzm. Dr. Yakup Yeşilkaya",
        specialization: "Radyoloji",
        image: "/images/doctors/yakup-yesilkaya.jpg",
        interests: [
            "Ultrasonografi",
            "Doppler ultrasonografi",
            "Toraks ve meme radyolojisi",
            "Abdominal ve ürogenital radyoloji",
            "Kas-iskelet ve nöroradyoloji"
        ],
        education: [
            "2000-2006 Ondokuz Mayıs Üniversitesi Tıp Fakültesi",
            "2006-2011 Hacettepe Üniversitesi Radyoloji Anabilim Dalı"
        ],
        experience: [
            "2011-2013 Kırşehir Ahi Evran Üniversitesi Eğitim ve Araştırma Hastanesi",
            "2014-2023 Etimesgut Devlet Hastanesi",
            "2024-2025 Özel Ankara Umut Hastanesi"
        ],
        languages: [
            "İngilizce"
        ],
        memberships: [
            "Türk Radyoloji Derneği",
            "Türk Girişimsel Radyoloji Derneği",
            "Ankara Tabip Odası"
        ],
        publications: [
            "Gallbladder duplication: case report and literature review",
            "Endovascular treatment of renal artery aneurysm and AV fistula",
            "Autologous blood-clot embolisation for cavernosal pseudoaneurysm",
            "Thyroid volume, therapy and HGF levels in Hashimoto's patients",
            "Retrobulber flow in diabetic retinopathy",
            "Sonographic imaging of female genital system"
        ]
    }





];

export default doctors;
