import { useParams } from "react-router-dom";
import patientGuides from "../data/patientGuides";

function HastaDetay() {
    const { id } = useParams();
    const guide = patientGuides.find((g) => g.id === parseInt(id));

    if (!guide) {
        return <div className="p-6 text-red-600">İçerik bulunamadı.</div>;
    }

    return (
        <div className="max-w-screen-md mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-4">{guide.title}</h1>
            <p className="text-gray-700 leading-relaxed text-lg">{guide.content}</p>
        </div>
    );
}

export default HastaDetay;
