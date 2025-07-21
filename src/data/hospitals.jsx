const cities = ["İstanbul", "Ankara", "İzmir", "Antalya", "Bursa"];

const hospitals = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `Hastane ${i + 1}`,
    city: cities[i % cities.length],
    image: `https://via.placeholder.com/300x200?text=Hastane+${i + 1}`,
    description: `${cities[i % cities.length]} şehrinde hizmet veren örnek hastane ${i + 1}.`,
}));

export default hospitals;
