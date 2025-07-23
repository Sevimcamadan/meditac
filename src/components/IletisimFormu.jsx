import React from "react";

const IletisimFormu = () => {
    return (
        <section className="contact-form-area bg-white py-20" id="iletisim">
            <div className="container max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-red-600">Bizimle İletişime Geçin</h2>
                    <p className="text-gray-600 mt-2">Size yardımcı olmaktan memnuniyet duyarız.</p>
                </div>

                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input type="text" placeholder="Adınız" className="p-4 border border-gray-300 rounded w-full" />
                        <input type="email" placeholder="Email" className="p-4 border border-gray-300 rounded w-full" />
                    </div>
                    <input type="text" placeholder="Konu" className="p-4 border border-gray-300 rounded w-full" />
                    <textarea placeholder="Mesajınız" rows="5" className="p-4 border border-gray-300 rounded w-full" />

                    <div className="text-center">
                        <button type="submit" className="bg-red-600 text-white px-8 py-3 rounded hover:bg-red-700 transition">
                            Gönder
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default IletisimFormu;
