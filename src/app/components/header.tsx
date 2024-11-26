'use client';
import React, { useState } from 'react'
import Image from "next/image";
import { ItemMenu } from "./ItemMenu";
import Logo from "/public/assets/whitelogo.png"

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
};

    return (
        <>
        <header className="flex w-full h-[112px] min-w-[375px] items-center min-h-[4rem] md:h-[4rem] bg-logo-blue">
            <div className="w-full flex items-center text-center justify-center h-[100%]">
                <ul className="md:w-[80%] text-nowrap flex flex-col sm:flex sm:flex-row items-center justify-center text-center w-[100%] text-sm sm:text-lg p-1">
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
                <div className="sm:text-center text-start flex items-center h-[100%] max-w-5xl sm:pr-0 pr-6 sm:w-[100%]">
                    <div className="flex items-center sm:px-0 px-1 max-w-[140px] sm:min-w-[140px] h-[100%]">
                        <span className="md:w-full  h-auto w-[93%] bg-white text-start text-logo-blue whitespace-nowrap sm:text-lg font-bold rounded-lg">
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

        <button
            className="sm:hidden text-logo-blue p-2 rounded-lg shadow-md bg-gradient-to-r from-blue-300 to-logo-blue hover:from-logo-blue hover:to-cyan-600 transition-all duration-300"
            onClick={toggleMenu}
        >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 transform transition-transform duration-300 ease-in-out"
        >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
        />
        </svg>
        </button>

        <header className="flex items-center text-center w-[100%] h-[150px] font-bold bg-white">
            <div className="h-[100%] w-full max-w-[670px] min-w-[200px] flex items-center mx-auto justify-center sm:justify-end">
                <Image className="h-full object-contain bg-cover animate-slow-pulse"
                    src= {Logo}
                    alt="Logo"
                    width={200}
                    height={120}
                />
                
            </div>
            <nav
                className={`${isOpen ? 'flex' : 'hidden sm:flex'} flex flex-col sm:flex sm:flex-row sm:items-center items-start justify-center md:gap-6 sm:gap-1 h-[100%] sm:mx-1 w-full mb-2 px-2`}
            >
                        <ItemMenu
                            name="Home" textColor="text-logo-blue"
                            href="/"
                        />
                        <ItemMenu 
                            name="About us" textColor="text-logo-blue"
                            href="/AboutUsPage"
                        />
                        <ItemMenu
                            name="Services" textColor="text-logo-blue"
                            href= "/servicesPage"
                            />
                        <ItemMenu 
                            name="Contact" textColor="text-logo-blue"
                            href="/ContactUsPage"
                        />
                    </nav>
            </header>
        </>
        
    )
}