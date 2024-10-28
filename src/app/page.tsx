import Image from "next/image";
import "./layout.tsx";
import { SectionHero } from "./components/SectionHero";
import { Line } from "./components/Line";


export default function Home() {
    return(
        <div>
            <SectionHero />
            <Line />
        </div>
    )

}