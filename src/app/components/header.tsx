import Image from "next/image";
import { ItemMenu } from "./ItemMenu";
import Logo from "/public/assets/whitelogo.png"

export function Header() {
    return (
        <>
        <header className="flex w-full h-[112px] min-w-full  items-center min-h[56px] sm:h-[56px] bg-logo-blue">
            <div className="w-full flex items-center text-center h-full">
                <ul className="whitespace-nowrap grid sm:flex justify- items-center text-center w-[100%] h-full text-xs sm:text-lg mx-1 ">
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
                <div className="text-center flex items-center justify-start  pt-1 sm:w-full max-w-[600px] h-[56px]">
                    <div className="flex items-center text-center  h-full">
                    <span className="flex bg-white text-logo-blue  whitespace-nowrap font-bold rounded-lg mx-2 sm:mx-1 ">
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
        <header className="flex items-center text-center w-full h-[120px] font-bold justify-center bg-white">
                    <div className="w-full flex h-[120px] justify-center items-center">
                        <Image className="max-w-[180px] w-full min-w[120px] h-[112px] animate-slow-pulse"
                        src={Logo}
                        layout="responsive"
                        alt="Logo"
                        />
                        <ul className="flex justify-between px-4 w-[40%]">
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