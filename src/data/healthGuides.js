const healthGuides = [
  {
    id: 1,
    image: "/images/health/kalp-krizi.jpg",
    slug: "kalp-krizi-belirtileri",
    title: {
      tr: "Kalp Krizi Belirtileri Nelerdir?",
      en: "What Are the Symptoms of a Heart Attack?"
    },
    description: {
      tr: "Kalp krizinin sessiz belirtileri ve acil müdahale gerektiren durumlar hakkında bilgi.",
      en: "Learn about silent signs of heart attack and when emergency help is needed."
    },
    category: {
      tr: "Kalp ve Damar",
      en: "Cardiovascular"
    },
    content: {
      tr: `Kalp krizi, kalp kasına kan taşıyan damarlardan birinin tıkanması sonucu oluşur.\nGöğüste baskı veya sıkışma hissi, sol kola yayılabilen ağrı, terleme, bulantı ve nefes darlığı en yaygın belirtilerdir.\nKadınlarda sırt, çene veya karın ağrısı şeklinde de görülebilir. Kalp krizi şüphesi durumunda acil yardım çağırılmalı ve aspirin çiğnenerek alınmalıdır.`,
      en: `A heart attack occurs when a blood vessel supplying the heart becomes blocked.\nCommon symptoms include chest pressure or tightness, pain radiating to the left arm, sweating, nausea, and shortness of breath.\nIn women, symptoms may also appear as back, jaw, or abdominal pain. If a heart attack is suspected, call emergency services and chew aspirin.`
    }
  },
  {
    id: 2,
    image: "/images/health/hipertansiyon.jpg",
    slug: "sicakta-hipertansiyon",
    title: {
      tr: "Sıcak Havalarda Hipertansiyon Riski Artıyor",
      en: "High Blood Pressure Risk Increases in Hot Weather"
    },
    description: {
      tr: "Yaz aylarında yüksek tansiyon hastalarının dikkat etmesi gerekenler.",
      en: "Important tips for people with high blood pressure during summer."
    },
    category: {
      tr: "Dahiliye",
      en: "Internal Medicine"
    },
    content: {
      tr: `Yüksek sıcaklıklar vücutta sıvı kaybına ve tansiyon dalgalanmalarına yol açabilir.\nHipertansiyon hastalarının yeterli sıvı alması, ağır egzersizlerden kaçınması ve gölgede kalması önerilir.\nİlaçlar düzenli alınmalı ve ani tansiyon düşmelerine karşı dikkatli olunmalıdır.`,
      en: `High temperatures can cause dehydration and blood pressure fluctuations.\nPatients with hypertension should stay hydrated, avoid heavy exercise, and remain in shaded areas.\nMedications should be taken regularly, and care must be taken to avoid sudden drops in blood pressure.`
    }
  },
  {
    id: 3,
    image: "/images/health/alerji.jpg",
    slug: "alerjik-rinit-cocuklarda",
    title: {
      tr: "Çocuklarda Alerjik Rinit",
      en: "Allergic Rhinitis in Children"
    },
    description: {
      tr: "Yaz aylarında artış gösteren çocuk alerjileri hakkında bilmeniz gerekenler.",
      en: "What you need to know about childhood allergies increasing in summer."
    },
    category: {
      tr: "Çocuk Sağlığı",
      en: "Child Health"
    },
    content: {
      tr: `Alerjik rinit, burun tıkanıklığı, hapşırık, kaşıntı ve gözlerde sulanma gibi semptomlarla kendini gösterir.\nÇocuklarda bahar ve yaz aylarında polenlere karşı hassasiyet artar.\nEv tozları, hayvan tüyleri ve küf gibi alerjenlerden uzak durmak önemlidir. Tedavide antihistaminikler ve burun spreyleri kullanılır.`,
      en: `Allergic rhinitis presents with symptoms such as nasal congestion, sneezing, itching, and watery eyes.\nIn spring and summer, children's sensitivity to pollen increases.\nAvoiding allergens like dust mites, pet dander, and mold is essential. Treatment includes antihistamines and nasal sprays.`
    }
  },
  {
    id: 4,
    image: "/images/health/stres.jpg",
    slug: "stresin-vucut-etkileri",
    title: {
      tr: "Stresin Vücut Üzerindeki 5 Etkisi",
      en: "5 Effects of Stress on the Body"
    },
    description: {
      tr: "Uzun süreli stresin kalpten cilde kadar etkileri ve başa çıkma yolları.",
      en: "Long-term effects of stress on the heart, skin, and how to cope."
    },
    category: {
      tr: "Psikoloji",
      en: "Psychology"
    },
    content: {
      tr: `Stres; kalp-damar sağlığını bozabilir, bağışıklık sistemini zayıflatabilir, mide problemlerine yol açabilir.\nAyrıca ciltte döküntü, saç dökülmesi ve uyku bozuklukları da görülebilir.\nDüzenli egzersiz, yeterli uyku ve nefes egzersizleri stresle başa çıkmada etkilidir.`,
      en: `Stress can harm cardiovascular health, weaken the immune system, and cause stomach problems.\nIt may also lead to skin rashes, hair loss, and sleep disorders.\nRegular exercise, sufficient sleep, and breathing exercises are effective in managing stress.`
    }
  },
  {
    id: 5,
    image: "/images/health/migren.jpg",
    slug: "migren-nedir",
    title: {
      tr: "Migren Atakları Nasıl Yönetilir?",
      en: "How to Manage Migraine Attacks?"
    },
    description: {
      tr: "Migren tipi baş ağrılarının nedenleri ve atak öncesi uyarıcılar.",
      en: "Causes and early warnings of migraine-type headaches."
    },
    category: {
      tr: "Nöroloji",
      en: "Neurology"
    },
    content: {
      tr: `Migren; genellikle tek taraflı, zonklayıcı ve şiddetli baş ağrısıyla karakterizedir.\nHassasiyet, ışığa veya sese karşı duyarlılık ve mide bulantısı sık görülür.\nTetikleyiciler arasında uykusuzluk, açlık, stres ve hormonal değişiklikler vardır. Atak öncesinde 'aura' olarak bilinen belirtiler ortaya çıkabilir.`,
      en: `Migraine is usually characterized by one-sided, throbbing, and intense headaches.\nSensitivity to light or sound and nausea are common.\nTriggers include lack of sleep, hunger, stress, and hormonal changes. Symptoms known as "aura" may appear before the attack.`
    }
  },
  {
    id: 6,
    image: "/images/health/gunes-carpmasi.jpg",
    slug: "gunes-carpmasi",
    title: {
      tr: "Güneş Çarpmasına Karşı Ne Yapmalı?",
      en: "What to Do Against Sunstroke?"
    },
    description: {
      tr: "Hayati risk taşıyan güneş çarpmasına karşı korunma yolları.",
      en: "Ways to protect yourself from life-threatening sunstroke."
    },
    category: {
      tr: "Acil Durum",
      en: "Emergency"
    },
    content: {
      tr: `Güneş çarpması, uzun süreli güneş maruziyeti sonrası vücut ısısının 40°C üzerine çıkmasıyla oluşur.\nBaş ağrısı, bilinç bulanıklığı, bulantı, nabız hızlanması ve sıcak-kuru cilt başlıca belirtileridir.\nHasta hemen gölgeye alınmalı, üzerindeki giysiler gevşetilmeli ve vücut serinletilmelidir.`,
      en: `Sunstroke occurs when prolonged sun exposure raises body temperature above 40°C.\nSymptoms include headache, confusion, nausea, rapid pulse, and hot-dry skin.\nThe patient should be moved to the shade, clothing loosened, and body cooled immediately.`
    }
  }
];

export default healthGuides;
