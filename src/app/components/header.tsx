import Image from "next/image";
import Logo from "/src/app/assets/Logo.png"
import { ItemMenu} from "./ItemMenu";

export function Header() {
    return (
        <>
        <header className="flex w-full items-center h-[56px] bg-logo-blue">
            <div className="w-full px-[6px] max-w-[1500px] font-bold mx-auto">
                <div className="flex flex-1 item-center justify-between ">
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
                <div className="flex items-center gap-4">
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
        <header className="flex items-center px-4 w-full h-40 font-bold bg-white">
                <div className="justify-center container w-[50%] flex h-40">
                    <div className="max-w-[268px]  w-[800px] ">
                    <Image
                        src={Logo}
                        alt="Logo"
                    />
                    </div>
                </div>
                    <div className="flex h-40 container justify-evenly max-w-[30%] items-center">
                        <div className="flex items-center">
                        <ul className=" flex gap-20">
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
