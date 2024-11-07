import Image from "next/image";
import Insta from "/src/app/assets/Insta.svg";
import Face from "/src/app/assets/Face.svg";
import Whatapp from "/src/app/assets/Whatapp.svg";
import Logo from "/src/app/assets/whitelogo.png";
import { ItemMenu } from "./ItemMenu";


export function SectionBottom (){
    return(
        <div className="w-full h-full flex items-center justify-center mt-10">
            <div className="grid grid-cols-4 gap-4 w-full h-[100%] justify-between px-20 mx-20 mt-4">
                <div className="flex flex-col justify-end w-full items-center h-full gap-4">
                    <Image className="max-w-[340px] h-auto"
                        src={Logo}
                        alt="Logo"
                    />
                </div>
                <div className="flex flex-col h-[100%] justify-start items-center w-full px-4 gap-4 mt-16">
                    <div className="flex w-full h-auto justify-center items-center gap-4">
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
                    <span className="mt-1 font-bold text-center text-logo-blue items-center">
                        Our Socials
                    </span>
                </div>
                <div className="grid grid-cols-2 items-start gap-4 w-full h-full place-self-center mt-20">
                    <div className="items-center flex flex-col px-4 gap-4 w-full h-full">
                    <ul className="items-center w-full text-center">
                        <li className="font-bold flex text-2xl mt-4">
                            <h1 className="py-2 px-4 items-center">
                                Services
                            </h1>
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
                </div>
                <div className="items-center flex flex-col px-4 gap-4 w-full h-full">
                        <ul className="items-center w-full flex-col  text-center">
                            <li className="font-bold flex text-2xl mt-4">
                            <h1 className="py-2 px-4 items-center">
                                Legal
                            </h1>
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
    )
}
