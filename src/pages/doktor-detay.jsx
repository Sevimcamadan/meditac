import React, { useState } from "react";
import { useParams } from "react-router-dom";
import doctors from "../data/doctors";

const DoctorDetail = () => {
    const { id } = useParams();
    const doctor = doctors.find((d) => d.id.toString() === id);
    const [activeTab, setActiveTab] = useState("ozgecmis");

    if (!doctor) return <div>Doktor bulunamadı.</div>;

    return (
        <div className="w-full">
            {/* ÜST YATAY GÖRSEL */}
            <div className="relative w-full h-[400px] md:h-[500px]">
                <img
                    src={doctor.headerImage || doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-end justify-start p-10">
                    <div className="text-left text-white max-w-3xl">
                        <h2 className="text-4xl font-bold mb-2">{doctor.title} {doctor.name}</h2>
                        <p className="text-xl">{doctor.specialization}</p>
                        {doctor.interests?.length > 0 && (
                            <p className="text-sm mt-2">{doctor.interests.join(" • ")}</p>
                        )}
                    </div>
                </div>
            </div>

            {/* ALT KISIM - SOLA YASLI, FONTSAL ŞIKLIK */}
            <div className="w-full px-6 md:px-12 py-16 flex flex-col md:flex-row gap-10 font-serif">
                {/* SOL FOTO */}
                <div className="w-full md:w-1/3">
                    <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-auto rounded-xl shadow-md object-cover"
                    />
                </div>

                {/* SAĞ İÇERİK */}
                <div className="w-full md:w-2/3">
                    {/* Sekmeler */}
                    <div className="flex justify-start gap-4 mb-8">
                        <button
                            onClick={() => setActiveTab("ozgecmis")}
                            className={`px-5 py-2 rounded-md font-medium transition-all duration-300
      ${activeTab === "ozgecmis"
                                    ? "bg-red-600 text-white shadow"
                                    : "bg-gray-100 text-gray-800 hover:bg-red-100 hover:text-red-600"
                                }`}
                        >
                            Hekim Özgeçmişi
                        </button>

                        <button
                            onClick={() => setActiveTab("yayinlar")}
                            className={`px-5 py-2 rounded-md font-medium transition-all duration-300
      ${activeTab === "yayinlar"
                                    ? "bg-red-600 text-white shadow"
                                    : "bg-gray-100 text-gray-800 hover:bg-red-100 hover:text-red-600"
                                }`}
                        >
                            Bilimsel Yayınları
                        </button>
                    </div>


                    {/* İçerik */}
                    {activeTab === "ozgecmis" && (
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Eğitim</h3>
                            <ul className="list-disc pl-5 text-gray-700 leading-relaxed">
                                {doctor.education?.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                            <h3 className="text-xl font-semibold mt-6 mb-2">Deneyim</h3>
                            <ul className="list-disc pl-5 text-gray-700 leading-relaxed">
                                {doctor.experience?.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "yayinlar" && (
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Yayınlar</h3>
                            <ul className="list-disc pl-5 text-gray-700 leading-relaxed">
                                {doctor.publications?.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DoctorDetail;
