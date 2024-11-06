import Image from "next/image";
import insured from "/src/app/assets/insured.png";
import staff from "/src/app/assets/staff.png"
import fast from "/src/app/assets/fast.png"

export function SectionWhychoose () {
    return(
        <div className="flex h-80 pt-20 w-full">
            <div className="flex flex-col h-60 w-full bg-light-gray">
            <h2 className="font-bold text-5xl  pt-10 w-[59.5%] grid text-black mx-auto ">
            Why Choose Jetcleaners?
            </h2>
            <div className="grid w-full place-items-center gap-8 grid-cols-3 pt-10 px-12">
                <div className="flex flex-col items-center ml-auto">
                    <Image className="object-contain h-20"
                    src={insured}
                    alt='insured'
                    />
                    <span className="text-center mt-2">
                        Placeholder
                    </span>
                </div>
                <div className="flex flex-col items-center">
                    <Image className="object-contain h-20"
                    src={staff}
                    alt='staff'
                    />
                    <span className="text-center mt-2">
                        Placeholder
                    </span>
                </div>
                <div className="flex flex-col items-center mr-auto">
                    <Image className="h-20 object-contain"
                    src={fast}
                    alt='fast'
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