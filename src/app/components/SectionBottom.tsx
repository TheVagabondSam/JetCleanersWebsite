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
                <div className="flex flex-col h-[100%] w-full px-4 gap-4 mt-6">
                    <div className="flex w-full justify-center  items-center gap-4 h-[100%]">
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
                </div>
                <div className="text-center flex gap-4 w-full  h-full px-4  mt-10">
                    <ul className=" items-start flex flex-col w-full text-center min-h-[184px]">
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
                <div className="text-center flex px-4 gap-4 w-full mt-10 h-full">
                        <ul className="items-start flex flex-col w-full text-center">
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
