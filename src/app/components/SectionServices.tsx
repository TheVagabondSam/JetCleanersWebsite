import Image from "next/image";
import placeholder  from "/public/assets/placeholder.png"


export function SectionServices() {
    /* const services = [
        { id: 1, text: "This is JetCleaner - Service 1" },
        { id: 2, text: "This is JetCleaner - Service 2" },
        { id: 3, text: "This is JetCleaner - Service 3" },
        { id: 4, text: "This is JetCleaner - Service 4" },
        { id: 5, text: "This is JetCleaner - Service 5" },
        { id: 6, text: "This is JetCleaner - Service 6" },
        { id: 7, text: "This is JetCleaner - Service 7" },
        { id: 8, text: "This is JetCleaner - Service 8" },
        { id: 9, text: "This is JetCleaner - Service 9" },
        { id: 10, text: "This is JetCleaner - Service 10" },
        { id: 11, text: "This is JetCleaner - Service 11" },
        { id: 12, text: "This is JetCleaner - Service 12" },
    ];
    */ 


    return(
            <div className="grid rounded-md mx-auto max-w-[1192px] grid-cols-1 md:grid-cols-2 p-1 xl:grid-cols-3 gap-8 h-full w-[100%]">
                    <p className="font-bold text-4xl flex text-nowrap mx-auto w-[100%] p-1 col-span-full text-dark-blue h-36">
                    Our Services
                    </p>
                    {Array.from({ length: 12 }).map((_, index) => (
                        <div key={index} className="flex flex-col">
                            <Image
                                className="border-2 border-logo-blue"
                                src={placeholder}
                                alt="placeholder"
                            />
                            <p className="pt-2 pb-2">This is JetCleaner</p>
                        </div>
                    ))}
        </div>
    )
}

/*
exterior house washing
Driveway and sideways cleaning
Garage washing
Decks and fences cleaning
Grafitti removal
Non-lead Paint stripping
bins cleaning
Pavement cleaning
Communal space cleaning
Brick cleaning
Petrol station cleaning
Gum removal */