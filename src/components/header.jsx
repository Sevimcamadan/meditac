import { Link } from "react-router-dom";
import meditacLogo from "../assets/images/logo/meditac-logo.png";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="bg-white text-black p-4 flex justify-between items-center">
      {/* Logo */}
      <a href="/">
        <img src={meditacLogo} alt="Meditac Logo" style={{ height: "60px" }} />
      </a>

      {/* Sağ taraf (menü + dil butonları) */}
      <div className="flex items-center space-x-4 text-sm">
        {/* Menü */}
        <nav className="flex items-center space-x-4">
          <Link to="/">{t("menu.home")}</Link>
          <Link to="/hakkimizda">{t("menu.about")}</Link>
          <Link to="/tibbi-birimler">{t("menu.medical_units")}</Link>
          <Link to="/hekimler">{t("menu.doctors")}</Link>
          <Link to="/saglik-rehberi">{t("menu.health_guide")}</Link>
          <Link to="/hasta-rehberi">{t("menu.patient_guide")}</Link>
        </nav>

        {/* Dil seçim */}
        <div className="flex items-center space-x-2 border-l border-white pl-4">
          <button
            onClick={() => changeLanguage("tr")}
            className="hover:underline"
          >
            TR
          </button>
          <button
            onClick={() => changeLanguage("en")}
            className="hover:underline"
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
