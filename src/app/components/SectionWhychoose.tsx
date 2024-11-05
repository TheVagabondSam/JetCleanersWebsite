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
            <div className="grid w-[100%] place-items-center gap-2 grid-cols-3 pt-10 px-4">
                <div className="flex flex-col items-center w-[54%]">
                    <Image className="object-contain place-self-end h-20"
                    src={insured}
                    alt='insured'
                    />
                    <span className="mt-2 text-right w-[97%]">
                        Placeholder
                    </span>
                </div>
                <div className="flex flex-col items-center">
                    <Image className="object-contain justify-center h-20"
                    src={staff}
                    alt='staff'
                    />
                    <span className="mt-2 text-right w-[97%]">
                        Placeholder
                    </span>
                </div>
                <div className="flex flex-col items-center">
                    <Image className="object-contain justify-self-start h-20"
                    src={fast}
                    alt='fast'
                    />
                    <span className="mt-2 text-right w-[97%]">
                        Placeholder
                    </span>
                </div>
            </div>
            </div>
        </div>
    )
}