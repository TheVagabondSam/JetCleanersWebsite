import Image from "next/image";
import Link from "next/link";

const services =[
    {
        id: 1,
        title: "Exterior house washing",
        description: "We clean the exterior of your home thoroughly.",
        image: "/assets/Exterior_House_Washing.png",
    },
    {
        id: 2,
        title: "Driveway and sideways cleaning",
        description: "Clean driveways and sidewalks professionally.",
        image: "/assets/Driveway_and_sideways_cleaning.png",
    },
    {
        id: 3,
        title: "Garage washing",
        description: "Deep wash for garages and driveways.",
        image: "/assets/Garage_Washing.png",
    },
    {
        id: 4,
        title: "Decks and fences cleaning",
        description: "Make your decks and fences look like new.",
        image: "/assets/Decks_and_fences_cleaning.png",
    },
    {
        id: 5,
        title: "Grafitti removal",
        description: "Erase graffiti from walls, fences, and other surfaces.",
        image: "/assets/Graffiti_removal.png",
    },
    {
        id: 6,
        title: "Non-lead Paint stripping",
        description: "Safe removal of non-lead paint from surfaces.",
        image: "/assets/Non_lead_Paint_stripping.png",
    },
    {
        id: 7,
        title: "Bins cleaning",
        description: "We clean and sanitize garbage bins.",
        image: "/assets/Bin_cleaning.png",
    },
    {
        id: 8,
        title: "Pavement cleaning",
        description: "Professional pavement and tile surface cleaning.",
        image: "/assets/Pavement_cleaning.png",
    },
    {
        id: 9,
        title: "Exterior communal space cleaning",
        description: "Maintain shared spaces clean and safe.",
        image: "/assets/Communal_space_cleaning.png",
    },
    {
        id: 10,
        title: "Brick cleaning",
        description: "Restore brick walls and surfaces.",
        image: "/assets/Brick_cleaning.png",
    },
    {
        id: 11,
        title: "Petrol station cleaning",
        description: "Specialized cleaning for fuel station areas.",
        image: "/assets/Petrol_station_cleaning.png",
    },
    {
        id: 12,
        title: "Gum removal",
        description: "Remove chewing gum residues from any surface.",
        image: "/assets/Gum_removal.png",
    },
];


function generateSlug(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
}

    export function SectionServices() {
    return (
        <div className="grid rounded-md mx-auto max-w-[1192px] grid-cols-1 md:grid-cols-2 p-1 xl:grid-cols-3 gap-8 h-full w-[100%]">
            <p className="font-bold text-4xl flex text-nowrap mx-auto w-[100%] p-1 col-span-full text-dark-blue h-36">
            Our Services
            </p>
            {services.map((service) => (
            <Link
                key={service.id}
                href={`/services/${generateSlug(service.title)}`}
                className="flex flex-col transition-transform duration-200 hover:scale-105 "
            >
            <Image
                className="border-2 object-cover border-logo-blue"
                src={service.image}
                alt={`Image for ${service.title}`}
                width={600}
                height={400}
            />
            <p className="pt-2 pb-2">{service.title}</p>
            </Link>
        ))}
        </div>
    );
}