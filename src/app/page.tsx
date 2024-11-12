// import Image from "next/image";
import { SectionHero } from "./components/SectionHero";
import { Line } from "./components/Line";
import { SectionServices } from "./components/SectionServices"
import { SectionWhychoose } from "./components/SectionWhychoose"
import { BackGroundImg } from "./components/backGroundImage";



export default function Home() {
    return(
        <div>
            <BackGroundImg />
            <SectionHero />
            <Line />
            <SectionServices />
            <SectionWhychoose />
        </div>
    )
}