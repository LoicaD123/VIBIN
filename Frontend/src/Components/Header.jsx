import React from "react";
import { useNavigate } from "react-router-dom"; // ← Import de useNavigate
import logo from "../assets/Logo.svg";
import icon1 from "../assets/Group 4.svg";
import icon2 from "../assets/Vector 18.svg";
import icon3 from "../assets/Group 2.svg";
import icon4 from "../assets/Group 12.svg";

export default function Header() {
    const navigate = useNavigate(); // ← Hook pour naviguer

    return (
        <header
            className="relative w-full flex-shrink-0 bg-[#fd6f2f]"
            style={{ height: 90 }}
        >
            {/* fond rectangle orange */}
            <div className="absolute inset-0 bg-[#fd6f2f]" />

            {/* Logo */}
            <img
                src={logo}
                alt="Vibin logo"
                className="absolute left-12 top-[7px] h-[76px] w-auto z-10"
            />

            {/* Navigation centrée */}
            <div
                className="absolute left-1/2 flex flex-row gap-[40px] items-center justify-start text-white"
                style={{
                    width: 508,
                    top: "34.44%",
                    transform: "translateX(-50%)",
                }}
            >
                {["Accueil", "Sextoys", "Blog", "à propos", "Contact"].map(
                    (item) => (
                        <a
                            href="#"
                            key={item}
                            className="font-[BebasNeue-Regular] text-sm font-normal tracking-wider relative"
                        >
                            {item}
                        </a>
                    )
                )}
            </div>

            {/* Icônes */}
            <div
                className="absolute flex flex-row gap-[48.2px] items-end"
                style={{ left: 1122, top: 31 }}
            >
                <img src={icon1} alt="icon1" className="h-[20px] w-auto" />
                <img src={icon2} alt="icon2" className="h-[20px] w-auto" />
                <img src={icon3} alt="icon3" className="h-[20px] w-auto" />
                <img
                    src={icon4}
                    alt="Se connecter"
                    className="h-[20px] w-auto cursor-pointer"
                    onClick={() => navigate("/login")} // ← redirection vers /login
                />
            </div>
        </header>
    );
}
