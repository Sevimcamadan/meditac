import React from "react";
import { useLocation } from "react-router-dom";
import doctors from "../data/doctors";
import DoctorCard from "../components/DoctorCard";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Hekimler = () => {
    const query = useQuery();
    const selectedBirim = query.get("birim");

    const filteredDoctors = selectedBirim
        ? doctors.filter((doc) => doc.specialization === selectedBirim)
        : doctors;

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-extrabold text-red-600 text-center mb-4 tracking-tight">
                Doktor Kadromuz
            </h1>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6 rounded"></div>





            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {filteredDoctors.length > 0 ? (
                    filteredDoctors.map((doctor) => (
                        <DoctorCard key={doctor.id} {...doctor} />
                    ))
                ) : (
                    <p className="text-center text-gray-500 col-span-full">
                        Bu birime ait doktor bulunamadı.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Hekimler;
