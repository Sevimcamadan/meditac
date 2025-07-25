import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import patientGuides from "../data/patientGuides";
import IletisimBolumu from "../components/IletisimBolumu";
import Footer from "../components/footer";

function HastaRehberi() {
    const { t } = useTranslation();

    return (
        <div>
            {/* Üst başlık */}
            <div className="bg-white text-center py-12">
                <h1 className="text-4xl font-extrabold text-red-600 mb-4">
                    {t("patient_guide_title")}
                </h1>
                <div className="w-24 h-1 bg-red-600 mx-auto mb-6 rounded"></div>

            </div>

            {/* Kartlar */}
            <div className="max-w-screen-lg mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {patientGuides.map((item) => (
                    <Link
                        key={item.id}
                        to={`/hasta-rehberi/${item.id}`}
                        className="bg-gray-50 rounded-lg p-6 text-center hover:bg-red-50 hover:shadow-md transition border"
                    >
                        <h2 className="text-lg font-semibold text-red-600">{item.title}</h2>
                    </Link>
                ))}
            </div>

            <IletisimBolumu />
            <Footer />
        </div>
    );
}

export default HastaRehberi;
