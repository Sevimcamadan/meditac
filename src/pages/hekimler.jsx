import React from "react";
import doctors from "../data/doctors";
import DoctorCard from "../components/DoctorCard";

const Hekimler = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-center mb-10">Hekimlerimiz</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {doctors.map((doctor) => (
                    <DoctorCard key={doctor.id} {...doctor} />
                ))}
            </div>
        </div>
    );
};

export default Hekimler;
