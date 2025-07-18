import { useTranslation } from "react-i18next";

function TibbiBirimler() {
    const { t } = useTranslation();

    const units = [
        "Kardiyoloji",
        "Ortopedi ve Travmatoloji",
        "Dahiliye (İç Hastalıkları)",
        "Göz Hastalıkları",
        "Kadın Hastalıkları ve Doğum",
        "Çocuk Sağlığı ve Hastalıkları",
        "Nöroloji",
        "Fizik Tedavi ve Rehabilitasyon"
    ];

    return (
        <div className="max-w-screen-lg mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-6">{t("medical_units_title")}</h1>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-lg">
                {units.map((unit, index) => (
                    <li key={index} className="bg-white shadow p-4 rounded">{unit}</li>
                ))}
            </ul>
        </div>
    );
}

export default TibbiBirimler;
