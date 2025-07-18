const doctors = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `Dr. ${["Ahmet", "Ayşe", "Mehmet", "Elif", "Can", "Zeynep"][i % 6]} ${["Yılmaz", "Kaya", "Demir", "Aydın", "Çelik", "Şahin"][i % 6]}`,
    specialization: ["Kardiyoloji", "Ortopedi", "Nöroloji", "Dermatoloji", "Üroloji", "Göz Hastalıkları"][i % 6],
    image: `https://randomuser.me/api/portraits/${i % 2 === 0 ? "men" : "women"}/${i + 10}.jpg`,
    description: "Uzmanlık alanında uzun yıllar deneyime sahip, hasta memnuniyetine önem veren bir hekimdir."
}));

export default doctors;
