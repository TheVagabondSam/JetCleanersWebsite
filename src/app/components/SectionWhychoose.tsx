import Image from "next/image";

export function SectionWhychoose () {
    return(
        <div className="flex h-80 pt-20 w-full">
            <div className="flex flex-col h-72 w-full bg-light-gray">
            <h2 className="font-bold text-5xl  pt-10 w-[59.5%] grid text-dark-blue mx-auto ">
            Why Choose Jetcleaners?
            </h2>
            <div className="grid w-full place-items-center gap-8 grid-cols-3 pt-10 px-12">
                <div className="flex flex-col items-center ml-auto">
                    <Image className="object-contain h-20"
                    src="/assets/insured.png"
                    width={100}
                    height={100}
                    alt='insured'
                    />
                    <span className="text-center mt-2">
                        Placeholder
                    </span>
                </div>
                <div className="flex flex-col items-center">
                    <Image className="object-contain h-20"
                    src="/assets/staff.png"
                    alt='staff'
                    width={100}
                    height={100}
                    />
                    <span className="text-center mt-2">
                        Placeholder
                    </span>
                </div>
                <div className="flex flex-col items-center mr-auto">
                    <Image className="h-20 object-contain"
                    src="/assets/fast.png"
                    alt='fast'
                    width={100}
                    height={100}
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