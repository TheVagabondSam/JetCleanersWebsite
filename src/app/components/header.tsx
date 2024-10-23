import Image from "next/image";
import Logo from "/src/app/assets/Logo.png"
import { ItemMenu} from "./ItemMenu";

export function Header() {
    return (
        <>
        <header className="flex w-full items-center h-10 bg-logo-blue">
            <div className=" w-full  max-w-[1246px] px-[15px] mx-auto font-bold">
                <div>
                    <div className="flex justify-center">
                        <ul className="flex items-center gap-80">
                        <li>
                            <ItemMenu
                            name="Jetcleaners.queries@outlook.com"
                            />
                        </li>
                        <li className="">
                            <ItemMenu
                            name="+44 (0) 7535 315338"
                            />
                        </li>
                        <li>
                            <ItemMenu
                            name="Get a quote!"
                            />
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
        <header className="flex items-center relative w-full h-40 font-bold bg-white border-radius">
                <div className="w-full inline-flex items-center h-40">
                    <Image className="absolute translate-x-[47.8rem] h-40 w-60"
                        src={Logo}
                        alt="Logo"
                    />
                        <ul className=" flex mx-auto justify-center items-center gap-20">
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
            </header>
            </>
    )
}

//Fundo na cor do logo e cor em branco.
//Retirar One off or regular, Size If known
//Retirar Windows
//Retirar Highest floor e Acess to Area.
//Retirar Entrar em contato na pagina principal.
//Tirar fotos da primeira pagina.
//Reviving your outdoor spaces
//We are a professional exterior cleaning company. 
//Customers satisfaction guaranteed 
//Scroll down that vanishes after the user follows the command.
