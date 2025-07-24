import React, { Fragment } from "react";
import FooterTwo from "../component/footer/FooterTwo";
import hospitalBg from "../assets/images/bg/pexels-pixabay-534219.jpg";
import { useTranslation } from "react-i18next";
import AnaSaglikRehberi from "../components/AnaSaglikRehberi";
import IletisimFormu from "../components/IletisimFormu";
import IletisimBilgileri from "../components/IletisimBilgileri";

const Anasayfa = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      {/* Hero Alanı (Arkaplan foto + yazı) */}
      <div
        className="hero-area"
        style={{
          backgroundImage: `url(${hospitalBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
        ></div>

        <div className="container text-center text-white" style={{ zIndex: 1 }}>
          <h1 className="text-5xl font-bold mb-4 text-red-500">
            {t("hero.title")}
          </h1>
          <p className="text-lg max-w-xl mx-auto mb-6">{t("hero.subtitle")}</p>
          <a
            href="#saglik-rehberi"
            className="rn-button-style--2 btn-primary-color inline-block px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition"
          >
            {t("hero.cta")}
          </a>
        </div>
      </div>

      <section className="bg-white py-20" id="saglik-rehberi">
        <AnaSaglikRehberi />
      </section>

      <IletisimBilgileri />

      <section className="bg-white py-20">
        <IletisimFormu />
      </section>

      {/* Footer */}
      <FooterTwo />
    </Fragment>
  );
};

export default Anasayfa;
