import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import healthGuides from "../data/healthGuides";

const AnaSaglikRehberi = () => {
  const navigate = useNavigate();
  const latestGuides = healthGuides?.slice(0, 3) || [];
  const { t, i18n } = useTranslation();
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">
          {t("guide.title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {latestGuides.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title[i18n.language]}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {item.description[i18n.language]}
                </p>
                <button
                  onClick={() => navigate(`/saglik-rehberi/${item.slug}`)}
                  className="text-red-600 text-sm font-semibold hover:underline"
                >
                  {t("guide.read_more")}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => navigate("/saglik-rehberi")}
            className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            {t("guide.see_all")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AnaSaglikRehberi;
