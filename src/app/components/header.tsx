import Image from "next/image";
import Logo from "/src/app/assets/whitelogo.png"
import { ItemMenu } from "./ItemMenu";

export function Header() {
    return (
        <>
        <header className="flex w-full items-center h-[56px] bg-logo-blue">
            <div className="w-full max-w-[60%] font-bold mx-auto">
                <div className="flex item-center justify-between ">
                    <div className="items-center gap-14">
                        <ul className="flex items-center gap-14">
                        <li>
                            <ItemMenu
                            name="Jetcleaners.queries@outlook.com"
                            />
                        </li>
                        <li>
                            <ItemMenu
                            name="+44 (0) 7535 315338"
                            />
                        </li>
                        </ul>
                    </div>
                <div className="flex items-center mr-10">
                    <span className="border-0 border-transparent bg-white">
                        <ItemMenu
                        name="Get a quote!"
                        textColor="text-logo-blue"
                        />
                    </span>
                    </div>
                </div>
            </div>
        </header>
        <header className="flex items-center w-full px-4 h-32 font-bold bg-white">
                <div className="justify-center container w-[49%] flex h-32">
                    <div className="max-w-[220px] w-[800px] ">
                    <Image
                        src={Logo}
                        alt="Logo"
                    />
                    </div>
                </div>
                    <div className="flex h-40 container justify-evenly max-w-[32%] items-center">
                        <div className="flex items-center">
                        <ul className=" flex gap-20 mr-8">
                            <li>
                                <ItemMenu
                                name="Home" textColor="text-logo-blue"
                                />
                            </li>
                            <li>
                                <ItemMenu 
                                name="About us" textColor="text-logo-blue"
                                />
                            </li>
                            <li>
                                <ItemMenu
                                name="Services" textColor="text-logo-blue"
                                />
                            </li>
                            <li>
                                <ItemMenu 
                                name="Contact" textColor="text-logo-blue"
                                />
                            </li>
                        </ul>
                        </div>
                    </div>
            </header>
            </>
    )
}