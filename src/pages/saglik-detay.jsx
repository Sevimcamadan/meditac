import React from "react";
import { useParams } from "react-router-dom";
import healthGuides from "../data/healthGuides";

const SaglikDetay = () => {
    const { slug } = useParams();
    const article = healthGuides.find((item) => item.slug === slug);

    if (!article) {
        return <div className="text-center text-red-500 py-20">İçerik bulunamadı.</div>;
    }

    return (
        <div className="max-w-3xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-red-600 mb-6">{article.title}</h1>
            <img
                src={article.image}
                alt={article.title}
                className="w-full h-64 object-cover rounded-lg mb-8"
            />
            <p className="text-gray-800 text-lg leading-relaxed whitespace-pre-line">
                {article.content}
            </p>

        </div>
    );
};

export default SaglikDetay;
