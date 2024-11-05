import Image from "next/image";
import Insta from "/src/app/assets/insta.png"
import Face from "/src/app/assets/face.png"
import { Container } from "./Container"
import Logo from "/src/app/assets/whitelogo.png"

export function SectionBottom (){
    return(
            <div className="w-full h-full items-center">
                <div className="grid grid-cols-3 w-full h-80 px-20 mx-20 mt-2">
                <div className="flex flex-col object-contain translate-x-1 w-[40%] place-self-center items-center h-32">
                    <Image className="max-w-[220px] flex-col"
                        src={Logo}
                        alt="Logo"
                    />
                    <h1 className="text-center whitespace-pre-line">
                        This is a placeholder and Sam is def a Weabo. Source? Trust me bro :)))
                    </h1>
                </div>
                <div className="flex flex-col h-32 object-contain items-center place-self-center">
                    <Image className="place-self-center flex-col"
                    src={Insta}
                    alt="Instagram Logo"
                    />
                    <h1>
                        This is our Socials 
                    </h1>
                </div>
                </div>
            </div>
    )
}
