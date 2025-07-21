import React from "react";
import { useParams } from "react-router-dom";
import doctors from "../data/doctors";


const DoctorDetail = () => {
    const { id } = useParams();
    const doctor = doctors.find((doc) => doc.id === parseInt(id));

    if (!doctor) {
        return <div className="text-center p-10 text-red-500">Doktor bulunamadı.</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
                <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-48 h-48 object-cover rounded-full shadow-lg"
                />
                <div>
                    <h2 className="text-2xl font-bold mb-1">{doctor.name}</h2>
                    <p className="text-gray-600">{doctor.specialization}</p>
                </div>
            </div>

            <div className="mt-8">
                <h3 className="text-xl font-semibold mb-2">İlgi Alanları</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {doctor.interests.map((interest, index) => (
                        <li key={index}>{interest}</li>
                    ))}
                </ul>
            </div>

            <div className="mt-8">
                <h3 className="text-xl font-semibold mb-2">Eğitim ve Uzmanlık</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {doctor.education.map((edu, index) => (
                        <li key={index}>{edu}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default DoctorDetail;
