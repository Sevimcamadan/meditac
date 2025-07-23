import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import healthGuides from "../data/healthGuides";

const SaglikDetay = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    const article = healthGuides.find((item) => item.slug === slug);

    if (!article) {
        return <div className="text-center text-red-500 py-20">İçerik bulunamadı.</div>;
    }

    console.log("slug param:", slug);
    console.log("healthGuides listesi:", healthGuides.map(item => item.slug));


    return (
        <div className="w-full">
            {/* Üst Görsel */}
            <div className="relative w-full h-[300px] md:h-[400px]">
                <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-white text-center px-4">
                        {article.title}
                    </h1>
                </div>
            </div>

            {/* İçerik Alanı */}
            <div className="max-w-3xl mx-auto px-4 py-12">
                <span className="inline-block bg-red-100 text-red-600 text-sm font-medium px-3 py-1 rounded mb-4">
                    {article.category}
                </span>

                <p className="text-gray-800 text-lg leading-relaxed whitespace-pre-line mb-8">
                    {article.content}
                </p>

                <button
                    onClick={() => navigate("/saglik-rehberi")}
                    className="text-red-600 font-semibold hover:underline"
                >
                    ← Sağlık Rehberine Dön
                </button>
            </div>
        </div>
    );
};

export default SaglikDetay;
