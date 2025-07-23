import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const IletisimBilgileri = () => {
    return (
        <section className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {/* Telefon */}
                    <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
                        <div className="flex justify-center mb-4">
                            <Phone className="text-red-600" size={40} />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Telefon</h3>
                        <p className="text-gray-700">+90 312 123 45 67</p>
                        <p className="text-gray-700">+90 532 765 43 21</p>
                    </div>

                    {/* Email */}
                    <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
                        <div className="flex justify-center mb-4">
                            <Mail className="text-red-600" size={40} />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Email</h3>
                        <p className="text-gray-700">info@meditac.com</p>
                        <p className="text-gray-700">destek@meditac.com</p>
                    </div>

                    {/* Lokasyon */}
                    <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
                        <div className="flex justify-center mb-4">
                            <MapPin className="text-red-600" size={40} />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Adres</h3>
                        <p className="text-gray-700">Çankaya, Ankara</p>
                        <p className="text-gray-700">Türkiye</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IletisimBilgileri;
