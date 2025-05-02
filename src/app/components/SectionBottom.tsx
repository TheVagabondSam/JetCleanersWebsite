import Image from "next/image";
import { ItemMenu } from "./ItemMenu";
import Logo from "/public/assets/whitelogo.png"


export function SectionBottom (){
    return(
        <div className="w-full h-full flex items-center justify-center  mt-10 sd:mt-2">
            <div className="grid  justify-start sm:justify-center grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full h-[100%] px-1 sd:px-8 md:px-20 mx-1 sd:mx-8 md:mx-20 mt-4">
                <div className="flex justify-center md:justify-end min-w-40 w-full items-center h-full gap-4 ">
                    <Image className="min-w-44 w-60 h-auto"
                        src={Logo}
                        alt="Logo"
                        layout="intrinsic"
                    />
                </div>
                <div className="flex flex-col h-[100%] w-full px-4 gap-4 mt-6">
                    <div className="flex w-full justify-center items-center gap-4 h-[100%]">
                        <a href="https://www.instagram.com/jetcleanersltd/?utm_source=qr" target="_blank" rel="noopener noreferrer">
                            <Image className="w-20 min-w-12"
                            src="/assets/Insta.svg"
                            width={40}
                            height={40}
                            alt="Instagram Logo"
                            />
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <Image className="w-20 min-w-12"
                            src="/assets/Face.svg"
                            width={40}
                            height={40}
                            alt="Facebook Logo"
                            />
                        </a>
                        <a href="https://wa.me/4407535315338"  target="_blank" rel="noopener noreferrer">
                            <Image className="w-20 min-w-12"
                            src="/assets/Whatapp.svg"
                            width={40}
                            height={40}
                            alt="Whatapp Logo"
                            />
                        </a>
                    </div>
                </div>
                <div className="text-center flex gap-4 w-full  h-full px-4  py-10 mt-2 sd:mt-10">
                    <ul className=" items-start flex flex-col w-full mt-2text-center min-h-[20px] sm:min-h-[184px]">
                        <li className="font-bold flex text-base sm:text-2xl sd:mt-4">
                            <h1 className="py-2 px-4 items-center">
                                Services
                            </h1>
                        </li>
                        <li className="text-sm">
                            <ItemMenu
                            name="Our Services"
                            textColor="text-logo-blue"
                            />
                        </li>
                    </ul>
                </div>
                <div className="text-center flex px-4 gap-4 w-full mt-0 sm:mt-10 h-full">
                        <ul className="items-start flex flex-col w-full text-center">
                            <li className="font-bold flex text-base sm:text-2xl mt-0 sm:mt-4">
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
