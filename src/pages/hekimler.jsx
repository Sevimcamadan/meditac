import doctors from "../data/doctors";
import DoctorCard from "../components/DoctorCard";


function Hekimler() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
            {doctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
        </div>
    );
}

export default Hekimler;
