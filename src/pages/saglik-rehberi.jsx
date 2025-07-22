import React from "react";
import { useTranslation } from "react-i18next";

// Tıbbi birimler A-Z grubu
const tibbiBirimlerAZ = {
    B: ["Beslenme ve Diyet"],
    C: ["Check-Up", "Çocuk Sağlığı ve Hastalıkları"],
    D: ["Dermatoloji (Cildiye)"],
    F: ["Fizik Tedavi ve Rehabilitasyon"],
    G: ["Göğüs Hastalıkları"],
    İ: ["İç Hastalıkları (Dahiliye)"],
    K: ["Kardiyoloji", "Konuşma ve Dil Terapisi"],
    M: ["Medikal Estetik"],
    N: ["Nöroloji"],
    P: ["Psikiyatri"],
    R: ["Radyoloji"]
};

function TibbiBirimler() {
    const { t } = useTranslation();

    return (
        <div className="max-w-screen-lg mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-6">{t("medical_units_title") || "Tıbbi Birimler"}</h1>

            <div className="space-y-10">
                {Object.keys(tibbiBirimlerAZ)
                    .sort()
                    .map((harf) => (
                        <div key={harf}>
                            <h2 className="text-2xl font-semibold mb-4">{harf}</h2>
                            <ul className="space-y-2">
                                {tibbiBirimlerAZ[harf].map((birim, index) => (
                                    <li key={index} className="bg-white p-4 shadow rounded text-gray-800">
                                        {birim}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default TibbiBirimler;
