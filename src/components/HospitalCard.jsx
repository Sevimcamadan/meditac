import { Link } from "react-router-dom";

const HospitalCard = ({ hospital }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-all">
            <img src={hospital.image} alt={hospital.name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-bold">{hospital.name}</h3>
                <p className="text-gray-600">{hospital.city}</p>
                <p className="text-sm text-gray-500 mt-2">{hospital.description}</p>
                <Link
                    to={`/hastaneler/${hospital.id}`}
                    className="inline-block mt-4 text-blue-600 hover:underline"
                >
                    Detayları Gör
                </Link>
            </div>
        </div>
    );
};

export default HospitalCard;
