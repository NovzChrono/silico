import React from "react";
import logo from "./../assets/img/logoBlanc.png"

const FootFront = () => {
    return (
        <>
            <div className="mt-20">
                <div className=" bg-black py-12 md:px-24">
                    <div className="md:flex container mx-auto items-center justify-between">
                        <div className="flex justify-center md:justify-start">
                            <img src={logo} className='w-52' alt="logo" />
                        </div>
                        <div className="text-white text-2xl">
                            <div className="py-2 text-center md:text-left">Rue du Petit-Chêne 12,</div>
                            <div className="py-2 text-center md:text-left">1003 Lausanne</div>
                            <div className="py-2 text-center md:text-left">SWITZERLAND</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default FootFront;
