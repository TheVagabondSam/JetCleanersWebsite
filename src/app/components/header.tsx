import Image from "next/image";
import { ItemMenu } from "./ItemMenu";
import Logo from "/public/assets/whitelogo.png"

export function Header() {
    return (
        <>
        <header className="flex w-full h-[112px] min-w-full  items-center min-h[56px] sm:h-[56px] bg-logo-blue">
            <div className="w-full flex items-center text-center h-full">
                <ul className="whitespace-nowrap grid gap-4 sm:flex sm:justify-center justify-start items-center text-center w-[75%] h-full mx-auto text-sm sm:text-lg sm:mx-1 ">
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
                <div className="text-center flex items-center pt-1 sm:w-full max-w-[1000px] h-[56px]">
                    <div className="flex items-center text-center sm:px-4  h-full">
                    <span className="flex bg-white text-logo-blue justify-center whitespace-nowrap text-lg font-bold rounded-lg mx-2 sm:mx-1 ">
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
        <header className="flex items-center text-center w-[100%] h-[120px] font-bold bg-white ">
                    <div className="w-full flex md:flex-row  h-[120px] text-sm md:text-lg md:justify-start justify-center items-center mx-auto">
                        <div className="h-[100%] w-[84%] flex items-center justify-center">
                            <Image className="w-auto flex h-full object-contain animate-slow-pulse"
                            src={Logo}
                            alt="Logo"
                            />
                            </div>
                        <ul className="flex items-center text-center sm:justify-start justify-center sm:gap-10 gap-1 h-[100%] sm:mx-1 w-full px-4">
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