// import Image from "next/image";
import { SectionHero } from "./components/SectionHero";
import { Line } from "./components/Line";
import { SectionServices } from "./components/SectionServices"
import { BackGroundVideo } from "./components/backGroundVideo";



export default function Home() {
    return(
        <div>
            <BackGroundVideo />
            <SectionHero />
            <Line />
            <SectionServices />
        </div>
    )
}