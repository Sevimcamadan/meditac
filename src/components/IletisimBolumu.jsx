import React from "react";
import IletisimBilgileri from "./IletisimBilgileri";
import IletisimFormu from "./IletisimFormu";

const IletisimBolumu = () => {
    return (
        <div className="bg-[#f8f9fc]">
            <IletisimBilgileri />
            <IletisimFormu />
        </div>
    );
};

export default IletisimBolumu;
