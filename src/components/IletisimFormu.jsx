import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const IletisimFormu = () => {
    const { t } = useTranslation();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        const eskiMesajlar = JSON.parse(localStorage.getItem("iletisimMesajlari") || "[]");
        localStorage.setItem("iletisimMesajlari", JSON.stringify([...eskiMesajlar, data]));
        alert(t("form.successMessage"));
        reset();
    };

    return (
        <section className="contact-form-area bg-white py-20" id="iletisim">
            <div className="container max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-red-600">{t("form.title")}</h2>
                    <p className="text-gray-600 mt-2">{t("form.description")}</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <input
                                type="text"
                                placeholder={t("form.name")}
                                {...register("name", { required: t("form.errors.name") })}
                                className="p-4 border border-gray-300 rounded w-full"
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder={t("form.email")}
                                {...register("email", {
                                    required: t("form.errors.email"),
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: t("form.errors.emailValid")
                                    }
                                })}
                                className="p-4 border border-gray-300 rounded w-full"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                        </div>
                    </div>

                    <input
                        type="text"
                        placeholder={t("form.subject")}
                        {...register("subject")}
                        className="p-4 border border-gray-300 rounded w-full"
                    />

                    <div>
                        <textarea
                            placeholder={t("form.message")}
                            rows="5"
                            {...register("message", { required: t("form.errors.message") })}
                            className="p-4 border border-gray-300 rounded w-full"
                        />
                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-red-600 text-white px-8 py-3 rounded hover:bg-red-700 transition"
                        >
                            {t("form.submit")}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default IletisimFormu;
