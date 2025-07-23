import React from "react";
import healthGuides from "../data/healthGuides";
import { useNavigate } from "react-router-dom";
import IletisimBolumu from "../components/IletisimBolumu";
import Footer from "../components/footer";


const SaglikRehberi = () => {
    const navigate = useNavigate();

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            {/* Başlık */}
            <h1 className="text-4xl font-extrabold text-red-600 text-center mb-4 tracking-tight">
                Sağlık Rehberi
            </h1>
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
                            alt={item.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-5">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                            <button
                                onClick={() => navigate(`/saglik-rehberi/${item.slug}`)}
                                className="text-red-600 font-medium hover:underline"
                            >
                                Devamını Oku →
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
