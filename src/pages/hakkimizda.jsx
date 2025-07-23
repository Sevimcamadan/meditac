import { useTranslation } from "react-i18next";
import IletisimBolumu from "../components/IletisimBolumu";
import Footer from "../components/footer";


function Hakkimizda() {
    const { t } = useTranslation();

    return (
        <div>
            <div className="max-w-screen-xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                    {/* Sol: Görsel */}
                    <div>
                        <img
                            src="/img/about/about-01.jpg"
                            alt="About Meditac"
                            className="w-full rounded-2xl shadow-lg"
                        />
                    </div>

                    {/* Sağ: Metin */}
                    <div>
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">
                            {t("about_title")}
                        </h2>

                        <p className="text-gray-700 text-lg leading-relaxed mb-4">
                            Meditac Hastanesi olarak, modern tıbbın gerektirdiği tüm donanım ve uzman kadromuzla hizmetinizdeyiz.
                            Hasta memnuniyetini ön planda tutan anlayışımızla, etik değerlere bağlı bir sağlık hizmeti sunmaktayız.
                        </p>

                        <p className="text-gray-700 text-lg leading-relaxed mb-4">
                            Kurulduğumuz günden bu yana binlerce hastanın sağlığına kavuşmasına yardımcı olduk.
                            Tıbbi birimlerimiz, alanında uzman doktorlarımız ve sürekli gelişen teknolojik altyapımız ile
                            uluslararası standartlarda sağlık sunuyoruz.
                        </p>

                        <p className="text-gray-700 text-lg leading-relaxed">
                            Sağlıklı yarınlar için güvenle başvurabileceğiniz bir kurum olarak çalışmaya devam ediyoruz.
                        </p>
                    </div>
                </div>
            </div>

            {/* İletişim bölümü */}
            <IletisimBolumu />

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Hakkimizda;
