import Image from "next/image";
import Logo from "/src/app/assets/base_icon_white_background.png"
import { ItemMenu } from "./ItemMenu";

export function Header() {
    return (
        <header className="flex items-center w-full h-20 bg-logo-blue">
            <div className="w-full max-w-[1246px] px-[15px] mx-auto">
                <div>
                    <div className="flex items-center gap-14">
                        <Image className="h-10 w-10 mr-96"
                        src={Logo}
                        alt="Logo"
                        />
                    <ul className="flex items-center gap-12">
                        <li>
                            <ItemMenu
                            name="Home"
                            />
                        </li>
                        <li>
                            <ItemMenu
                            name="About us"
                            />
                        </li>
                        <li>
                            <ItemMenu
                            name="Services"
                            />
                        </li>
                        <li>
                            <ItemMenu
                            name="Get a Quote Now!"
                            />
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
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
