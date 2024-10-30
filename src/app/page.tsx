import Image from "next/image";
import "./layout.tsx";
import { SectionHero } from "./components/SectionHero";
import { Line } from "./components/Line";
import { SectionServices } from "./components/SectionServices"


export default function Home() {
    return(
        <div>
            <SectionHero />
            <Line />
            <SectionServices />
        </div>
    )
}