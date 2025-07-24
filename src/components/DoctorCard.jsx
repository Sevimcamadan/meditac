import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const DoctorCard = ({ id, name, specialization, image }) => {
    const { t, i18n } = useTranslation();

    return (
        <div className="group relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
                src={image}
                alt={name}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white px-4 text-center">
                <h3 className="text-xl font-semibold mb-1">{name}</h3>
                <p className="text-sm">{t(`specializations.${specialization}`, specialization)}</p>
                <Link to={`/doktor/${id}`}>
                    <button className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded">
                        {t("details")}
                    </button>

                </Link>
            </div>
        </div>
    );
};

export default DoctorCard;
