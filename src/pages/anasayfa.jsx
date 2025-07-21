import React, { Fragment } from "react";
import Helmet from "../component/common/Helmet";
import FooterTwo from "../component/footer/FooterTwo";
import hospitalBg from "../assets/images/bg/pexels-pixabay-534219.jpg";
import Header from "../components/header";

// ✅ Sağlık Rehberi bileşeni importu:
import SaglikRehberi from "../components/SaglikRehberi"; // yol doğruysa böyle

const Anasayfa = () => {
    const menuTrigger = () => {
        document.querySelector(".header-wrapper")?.classList.toggle("menu-open");
    };

    const closeMenuTrigger = () => {
        document.querySelector(".header-wrapper")?.classList.remove("menu-open");
    };

    return (
        <Fragment>
            <Helmet pageTitle="Ana Sayfa" />



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

                <div
                    className="container text-center text-white"
                    style={{ zIndex: 1 }}
                >
                    <h1 className="text-5xl font-bold mb-4 text-red-500">
                        SAĞLIKTA GÜVEN
                    </h1>
                    <p className="text-lg max-w-xl mx-auto mb-6">
                        Uzman doktorlarımız, modern teknolojimiz ve insana değer veren
                        yaklaşımımızla daima yanınızdayız.
                    </p>
                    <a
                        href="#saglik-rehberi"
                        className="rn-button-style--2 btn-primary-color inline-block px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition"
                    >
                        Hakkımızda
                    </a>
                </div>
            </div>

            {/* ✅ Sağlık Rehberi */}
            <section className="bg-white py-20" id="saglik-rehberi">

                <SaglikRehberi />
            </section>

            {/* Footer */}
            <FooterTwo />
        </Fragment>
    );
};

export default Anasayfa;
