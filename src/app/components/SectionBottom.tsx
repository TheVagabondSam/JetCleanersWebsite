import Image from "next/image";
import Insta from "/src/app/assets/insta.svg"
import Face from "/src/app/assets/face.svg"
import Whatapp from "/src/app/assets/Whatapp.jpeg"
import Logo from "/src/app/assets/whitelogo.png"


export function SectionBottom (){
    return(
        <div className="w-full h-full flex items-center justify-center">
            <div className="grid grid-cols-3 w-full h-80 px-20 mx-20 mt-2">
                <div className="flex flex-row object-contain translate-x-10 w-[50%] place-self-center items-center h-80">
                    <Image className="max-w-[220px] flex-col"
                        src={Logo}
                        alt="Logo"
                    />
                    <h1 className="text-center font-bold items-center translate-y-8 whitespace-pre-line">
                        PlaceHolder
                    </h1>
                </div>
                <div className="flex flex-col h-80 items-center object-contain px-4 gap-2 w-[45%] place-self-center">
                    <div className="flex flex-row translate-y-28 gap-2">
                    <Image className="w-12"
                    src={Insta}
                    alt="Instagram Logo"
                    />
                    <Image className="w-12"
                    src={Face}
                    alt="Facebook Logo"
                    />
                    <Image className="w-12"
                    src={Whatapp}
                    alt="Whatapp Logo"
                    />
                    </div>
                    <span className="mt-1 font-bold translate-y-28 text-center items-center whitespace-pre-line">
                        Our Socials
                    </span>
                </div>
                <div className="grid grid-cols-2 items-center object-contain px-4 gap-2 w-full h-full place-self-center">
                    <div className="items-center flex object-contain px-4 gap-2 w-full h-full place-self-center">
                    <ul className="items-center w-full text-center">
                        <li>
                            <h1 className="font-bold text-2xl">
                            Services
                            </h1>
                        </li>
                        <li>
                            Outdoor
                        </li>
                        <li>
                            Indoor
                        </li>
                    </ul>
                    </div>
                    <div className="items-center flex object-contain px-4 gap-2 w-full h-full place-self-center">
                        <ul className="items-center w-full text-center">
                            <li>
                                <h1 className="font-bold text-2xl">
                                    Legal
                                </h1>
                            <li>
                                Terms and conditions
                            </li>
                            <li>
                                Privacy Policy
                            </li>
                            <li>
                                Cookie Policy
                            </li>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}
