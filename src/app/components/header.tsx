'use client';
import { useState } from "react";
import Image from "next/image";
import { ItemMenu } from "./ItemMenu";
import Logo from "/public/assets/whitelogo.png"

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
};

    return (
        <>
        <header className="flex w-full h-[112px] min-w-full  items-center min-h[56px] md:h-[56px] bg-logo-blue">
            <div className="w-full flex items-center text-center justify-center h-full">
                <ul className="text-nowrap sm:flex flex-grow md:justify-center items-center text-center w-[100%] h-[100%] text-sm sm:text-lg px-2">
                        <li className="flex h-[56px] justify-start items-center">
                            <ItemMenu
                            name="Jetcleaners.queries@outlook.com"
                            href="/"
                            />
                        </li>
                        <li className="flex items-center justify-start h-[56px]">
                            <ItemMenu
                            name="+44 (0) 7535 315338"
                            href="https://wa.me/4407535315338"
                            />
                        </li>
                        </ul>
                <div className="text-center flex items-center h-[100%] sm:w-[100%] max-w-[1000px]">
                    <div className="flex items-center text-center sm:px-4 h-[80px]">
                    <span className="flex md:w-[100%] w-[75%] bg-white text-logo-blue justify-center whitespace-nowrap text-lg font-bold rounded-lg sm:m-1">
                        <ItemMenu
                        name="Get a quote!"
                        textColor="text-logo-blue"
                        href="/ContactUsPage"
                        />
                    </span>
                    </div>
                    </div>
                </div>
        </header>
        <button className="sm:hidden text-logo-blue p-2"
            onClick={toggleMenu}
            >
        <svg xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="h-6 w-6"
            >
        <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M4 6h16M4 12h16M4 18h16" 
            />
        </svg>
        </button>

        <header className="flex items-center text-center w-[100%] h-[120px] font-bold bg-white ">
                    <div className="w-full flex md:flex-row  h-[120px] md:justify-start justify-center items-center mx-auto">
                        <div className="h-[100%] w-[84%] flex items-center justify-center">
                            <Image className="min-w-[250px] min-h-[120px] flex h-full object-contain bg-cover animate-slow-pulse"
                            src={Logo}
                            alt="Logo"
                            width={200}
                            height={120}
                            />
                            </div>
                        <ul className=
                            {`${menuOpen ? "block" : "hidden"} sm:flex sm:items-center sm:justify-start justify-center md:gap-10 sm:gap-1 h-[100%] sm:mx-1 w-full px-4`}
                        >
                            <li>
                                <ItemMenu
                                name="Home" textColor="text-logo-blue"
                                href="/"
                                />
                            </li>
                            <li className="whitespace-nowrap">
                                <ItemMenu 
                                name="About us" textColor="text-logo-blue"
                                href="/AboutUsPage"
                                />
                            </li>
                            <li>
                                <ItemMenu
                                name="Services" textColor="text-logo-blue"
                                href= "/servicesPage"
                                />
                            </li>
                            <li>
                                <ItemMenu 
                                name="Contact" textColor="text-logo-blue"
                                href="/ContactUsPage"
                                />
                            </li>
                        </ul>
                    </div>
            </header>
        </>
    )
}