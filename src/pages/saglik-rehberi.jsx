import healthGuides from "../data/healthGuides";
import { useNavigate } from "react-router-dom";
import IletisimBolumu from "../components/IletisimBolumu";
import Footer from "../components/footer";
import { useTranslation } from "react-i18next";

const SaglikRehberi = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  
    
 
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Başlık */}
      <h1 className="text-4xl font-extrabold text-red-600 text-center mb-4 tracking-tight">{t("health_guide_title")}</h1>
      <div className="w-24 h-1 bg-red-600 mx-auto mb-10 rounded"></div>

      {/* Grid Kartlar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {healthGuides.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.title[i18n.language]}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title[i18n.language]}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {item.description[i18n.language]}
              </p>
              <button
                onClick={() => navigate(`/saglik-rehberi/${item.slug}`)}
                className="text-red-600 font-medium hover:underline"
              >
                {t("guide.read_more")}
              </button>
            </div>
          </div>
        ))}
      </div>
      <IletisimBolumu />
      <Footer />
    </div>
  );
};

export default SaglikRehberi;
