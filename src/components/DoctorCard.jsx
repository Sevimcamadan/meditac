import { Link } from "react-router-dom";

function DoctorCard({ doctor }) {
    return (
        <div className="border p-4 rounded shadow-md hover:shadow-lg transition">
            <img src={doctor.image} alt={doctor.name} className="w-full h-40 object-cover mb-4 rounded" />
            <h3 className="text-lg font-bold">{doctor.name}</h3>
            <p className="text-sm text-gray-600">{doctor.specialization}</p>
            <Link to={`/doktor/${doctor.id}`} className="text-blue-600 text-sm mt-2 inline-block">
                Detayları Gör
            </Link>
        </div>
    );
}

export default DoctorCard;
