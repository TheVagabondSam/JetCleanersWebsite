import Image from "next/image";
import Insta from "/src/app/assets/Insta.svg";
import Face from "/src/app/assets/Face.svg";
import Whatapp from "/src/app/assets/Whatapp.svg";
import Logo from "/src/app/assets/whitelogo.png";
import { ItemMenu } from "./ItemMenu";


export function SectionBottom (){
    return(
        <div className="w-full h-full flex items-center justify-center mt-24">
            <div className="grid grid-cols-3 w-full h-80 px-20 mx-20 mt-2 gap-2">
                <div className="flex justify-center w-full items-center h-full">
                    <Image className="max-w-[260px] h-auto"
                        src={Logo}
                        alt="Logo"
                    />
                    <h1 className="text-center flex items-center h-full w-full whitespace-pre-line">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repellat illo harum, quasi quas nulla eum vero distinctio neque officiis optio dicta aperiam quidem omnis. Soluta quasi dolores magni ratione.
                    </h1>
                </div>
                <div className="flex flex-col h-[100%] justify-center items-center  px-4 gap-2 w-full place-self-center">
                    <div className="flex flex-row w-full h-auto justify-center items-center gap-2">
                        <a href="https://www.instagram.com/jetcleanersltd/?utm_source=qr" target="_blank" rel="noopener noreferrer">
                            <Image className="w-12"
                            src={Insta}
                            width={40}
                            height={40}
                            alt="Instagram Logo"
                            />
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <Image className="w-12"
                            src={Face}
                            width={40}
                            height={40}
                            alt="Facebook Logo"
                            />
                        </a>
                        <a href="https://wa.me/4407535315338"  target="_blank" rel="noopener noreferrer">
                            <Image className="w-12"
                            src={Whatapp}
                            width={40}
                            height={40}
                            alt="Whatapp Logo"
                            />
                        </a>
                    </div>
                    <span className="mt-1 font-bold text-center items-center">
                        Our Socials
                    </span>
                </div>
                <div className="grid grid-cols-2 items-start gap-2 w-full h-full place-self-center">
                    <div className="items-center flex flex-col px-4 gap-2 w-full h-full">
                    <ul className="items-center w-full text-center">
                        <li className="font-bold text-2xl mt-4">
                            <ItemMenu
                            name="Services"
                            textColor="text-dark-blue"
                            />
                        </li>
                        <li>
                            <ItemMenu
                            name="Commercial Cleaning"
                            textColor="text-logo-blue"
                            />
                        </li>
                        <li>
                            <ItemMenu
                            name="Residential Cleaning"
                            textColor="text-logo-blue"
                            />
                            
                        </li>
                    </ul>
                    </div>
                    <div className="items-center flex flex-col px-4 gap-2 w-full h-full">
                        <ul className="items-center w-full text-center">
                            <li className="font-bold text-2xl mt-4">
                                <ItemMenu
                                name="Legal"
                                textColor="text-dark-blue"
                            />
                            </li>
                            <li> 
                                <ItemMenu
                                name="Terms and Conditions"
                                textColor="text-logo-blue"
                            />
                            </li>
                            <li>
                                <ItemMenu
                                name="Privacy Policy"
                                textColor="text-logo-blue"
                                />
                            </li>
                            <li>
                                <ItemMenu
                                name="Cookie Policy"
                                textColor="text-logo-blue"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
