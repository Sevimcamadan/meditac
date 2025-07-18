import { useParams } from "react-router-dom";
import doctors from "../data/doctors";



function DoktorDetay() {
    const { id } = useParams();
    const doctor = doctors.find((doc) => doc.id === parseInt(id));

    if (!doctor) return <div className="p-6">Doktor bulunamadı.</div>;

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">{doctor.name}</h2>
            <img src={doctor.image} alt={doctor.name} className="w-60 h-60 object-cover rounded mb-4" />
            <p className="text-gray-600 mb-2">{doctor.specialization}</p>
            <p>{doctor.description}</p>
        </div>
    );
}

export default DoktorDetay;
