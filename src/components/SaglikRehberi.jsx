import React from "react";
  const { t, i18n } = useTranslation();


// Görselleri import et
import kalpSpazmi from "../assets/images/rehber/kalp-spazmi.jpg";
import eforTesti from "../assets/images/rehber/efor-testi.jpg";
import dizKireclenmesi from "../assets/images/rehber/diz-kireclenmesi.jpg";
import adetHapi from "../assets/images/rehber/adet-hapi.jpg";
import tiroid from "../assets/images/rehber/tiroid.jpg";
import burkulma from "../assets/images/rehber/burkulma.jpg";



const rehberVerileri = [
    {
        id: 1,
        title: "Kalp Spazmı Nedir?",
        description: "Kalp spazmı göğüs ağrısı ile kendini gösteren ciddi bir durumdur.",
        image: kalpSpazmi,
        kategori: "Kardiyoloji",
    },
    {
        id: 2,
        title: "Efor Testi Nedir?",
        description: "Kalbin efor sırasında nasıl çalıştığını görmek için yapılan testtir.",
        image: eforTesti,
        kategori: "Kardiyoloji",
    },
    {
        id: 3,
        title: "Diz Kireçlenmesi",
        description: "Kireçlenme; diz eklemlerindeki kıkırdak yapısının bozulmasıdır.",
        image: dizKireclenmesi,
        kategori: "Ortopedi",
    },
    {
        id: 4,
        title: "Adet Geciktirici Hap",
        description: "Adet döngüsünü geciktirmek için kullanılan ilaçlardır.",
        image: adetHapi,
        kategori: "Kadın Doğum",
    },
    {
        id: 5,
        title: "Tiroid Ameliyatı",
        description: "Tiroid bezindeki nodül ya da tümörlerin alınması işlemidir.",
        image: tiroid,
        kategori: "Endokrinoloji",
    },
    {
        id: 6,
        title: "Burkulmaya Ne İyi Gelir?",
        description: "Dinlenme, buz ve bandaj uygulaması ile iyileşme desteklenir.",
        image: burkulma,
        kategori: "Fizik Tedavi",
    },
];




const SaglikRehberi = () => {
    return (
        <div className="bg-gray-100 py-20" id="rehber">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Sağlık Rehberi</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {rehberVerileri.map((item) => (
                        <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-600 mb-2">{item.description}</p>
                                <span className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">
                                    {item.kategori}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SaglikRehberi;
