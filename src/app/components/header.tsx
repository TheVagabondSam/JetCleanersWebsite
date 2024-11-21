'use client';
import React, { useState } from 'react'
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
        <header className="flex w-full h-[112px] items-center min-h[4rem] md:h-[4rem] bg-logo-blue">
            <div className="w-full flex items-center text-center justify-center h-full">
                <ul className="sm:w-[80%] text-nowrap sm:flex flex-grow md:justify-center items-center justify-end text-center w-[100%] h-56px text-sm sm:text-lg p-2">
                        <li>
                            <ItemMenu
                            name="Jetcleaners.queries@outlook.com"
                            href="/"
                            />
                        </li>
                        <li>
                            <ItemMenu
                            name="+44 (0) 7535 315338"
                            href="https://wa.me/4407535315338"
                            />
                        </li>
                        </ul>
                <div className="sm:text-center text-start flex items-center h-[100%] max-w-5xl sm:w-[100%]">
                    <div className="flex items-center sm:px-1 max-w-[150px] h-[80px]">
                    <span className="md:w-full w-[95%] bg-white text-start text-logo-blue whitespace-nowrap sm:text-lg font-bold rounded-lg">
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
                    <div className="w-full row-span-1 flex h-[120px] items-center">
                        <div className="h-[100%] w-full max-w-[800px] min-w-[120px] flex items-center justify-center">
                            <Image className="h-full object-contain bg-cover animate-slow-pulse"
                            src={Logo}
                            alt="Logo"
                            width={200}
                            height={120}
                            />
                            </div>
                        <ul className={`${menuOpen ? "block" : "hidden"} sm:flex sm:items-center md:justify-start items-start justify-center md:gap-8 sm:gap-1 h-[100%] sm:mx-1 w-full px-4`}
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