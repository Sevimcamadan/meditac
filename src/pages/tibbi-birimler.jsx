import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import IletisimBolumu from "../components/IletisimBolumu";
import Footer from "../components/footer";

function TibbiBirimler() {
    const { t } = useTranslation();

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

    return (
        <div>
            <div className="max-w-screen-lg mx-auto px-4 py-12">
                <h1 className="text-4xl font-extrabold text-red-600 text-center mb-4 tracking-tight">
                    {t("medical_units_title")}
                </h1>

                <div className="w-24 h-1 bg-red-600 mx-auto mb-6 rounded"></div>

                <div className="space-y-10">
                    {Object.keys(tibbiBirimlerAZ)
                        .sort((a, b) => a.localeCompare(b, "tr"))
                        .map((harf) => (
                            <div key={harf}>
                                <h2 className="text-2xl font-semibold mb-4">{harf}</h2>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-lg">
                                    {tibbiBirimlerAZ[harf].map((unit, index) => (
                                        <li key={index}>
                                            <Link
                                                to={`/hekimler?birim=${encodeURIComponent(unit)}`}
                                                className="block bg-white shadow p-4 rounded hover:bg-blue-50 transition"
                                            >
                                                {t(`units.${unit}`)}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                </div>
            </div>

            <IletisimBolumu />
            <Footer />
        </div>
    );
}

export default TibbiBirimler;
