import { useTranslation } from "react-i18next";

function Hakkimizda() {
    const { t } = useTranslation();

    return (
        <div className="max-w-screen-lg mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-6">{t("about_title")}</h1>

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
    );
}

export default Hakkimizda;
