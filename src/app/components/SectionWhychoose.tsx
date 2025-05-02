import Image from "next/image";
import Insured from "/public/assets/insured.png"
import staff from "/public/assets/staff.png"
import fast from "/public/assets/fast.png"


export function SectionWhychoose () {
    return(
        <div className="flex h-80 pt-20 w-full">
            <div className="flex flex-col h-72 w-full justify-center bg-light-gray">
            <h2 className="font-bold text-2xl md:text-4xl text-nowrap pt-2 sm:pt-4 w-full justify-center items-start sm:items-center grid  text-dark-blue mx-auto ">
            Why Choose Jetcleaners?
            </h2>
            <div className="grid w-full place-items-center gap-8 grid-cols-3 pt-6 sm:pt-10 sm:px-12">
                <div className="flex flex-col items-center ml-auto">
                    <Image className="object-contain h-20"
                    src={Insured}
                    alt='insured'
                    layout="responsive"
                    />
                    <span className="text-center mt-2">
                        Placeholder
                    </span>
                </div>
                <div className="flex flex-col items-center">
                    <Image className="object-contain h-20"
                    src={staff}
                    alt='staff'
                    layout="responsive"
                    />
                    <span className="text-center mt-2">
                        Placeholder
                    </span>
                </div>
                <div className="flex flex-col items-center mr-auto">
                    <Image className="h-20 object-contain"
                    src={fast}
                    alt='fast'
                    layout="responsive"
                    />
                    <span className="text-center mt-2">
                        Placeholder
                    </span>
                </div>
            </div>
            </div>
        </div>
    )
}