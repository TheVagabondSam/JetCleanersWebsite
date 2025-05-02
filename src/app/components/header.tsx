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
    const closeMenu = () => {
        setIsOpen(false);
};

    return (
    <>
    <div className='w-full h-full'>
        <header className="flex flex-row w-full h-[112px] min-w-[300px] justify-between items-center  bg-logo-blue">
            <div className="w-full flex items-center text-center sm:justify-center justify-start  h-[100%]">
                <nav className="w-full max-w-[60%] text-nowrap flex flex-col md:flex md:flex-row items-center justify-center text-center text-[10px] sm:text-lg">
                            <ItemMenu
                            name="Jetcleaners.queries@outlook.com"
                            href="/"
                            />
                            <ItemMenu
                            name="+44 (0) 7535 315338"
                            href="https://wa.me/4407535315338"
                            />
                </nav>
                <div className="sm:text-center text-start flex flex-row items-center justify-center h-[100%] sm:w-[100%]">
                    <div className="flex items-center sm:px-0 px-1 max-w-[140px] md:-ml-6 sm:min-w-[140px] h-[100%]">
                        <nav className="w-full h-auto bg-white text-start text-logo-blue text-[10px] sm:text-lg font-bold rounded-lg">
                            <ItemMenu
                            name="Get a quote!"
                            textColor="text-logo-blue"
                            href="/ContactUsPage"
                            />
                        </nav>
                        
                    </div>
                </div>
            </div>
        </header>
            <button
                className="sm:hidden text-logo-blue p-2  hover:logo-blue transition-all duration-300"
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
        <header className="text-center md:h-[150px] font-bold bg-white flex flex-row w-full min-w-[375px] items-center h-[190px]">
            <div className="h-[100%] w-full max-w-4xl flex items-center justify-center">
                <Image className="h-full object-contain bg-cover min-w-[220px] animate-slow-pulse"
                    src= {Logo}
                    alt="Logo"
                    width={200}
                    height={120}
                />
                
            </div>
                <nav
                    className={`${isOpen ? 'hidden' : 'hidden sm:flex'} flex flex-col text-center sm:flex sm:flex-row items-center sm:justify-center justify-start  md:gap-4 lg:gap-6 xl:gap-10 sm:gap-1 h-[100%] w-full `}
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
            <div
                    className={`${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                } fixed top-0 left-0 w-full h-[342px] bg-logo-blue text-white flex flex-col items-center justify-center transform transition-transform duration-500 ease-in-out z-20`}
            >
                    <button
                    className="absolute top-4 right-4 text-white text-4xl"
                    onClick={closeMenu} 
                    >
                        &times;
                    </button>
                <nav className="flex justify-center items-center flex-col gap-6 text-xl">
                    <ItemMenu name="Home" href="/" />
                    <ItemMenu name="About us" href="/AboutUsPage" />
                    <ItemMenu name="Services" href="/servicesPage" />
                    <ItemMenu name="Contact" href="/ContactUsPage" />
                </nav>
            </div>
        </div>
    </>
);
}