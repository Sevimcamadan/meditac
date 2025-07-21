import { Link } from "react-router-dom";

const DoctorCard = ({ id, name, specialization, image }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <img src={image} alt={name} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-sm text-gray-600">{specialization}</p>
            <Link to={`/doktor/${id}`}>
                <button className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded">
                    Detay
                </button>
            </Link>

        </div>
    );
};
export default DoctorCard;

