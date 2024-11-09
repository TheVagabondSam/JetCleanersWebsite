import "./layout.tsx";
import { SectionHero } from "./components/SectionHero";
import { Line } from "./components/Line";
import { BackGroundImg } from "./components/backGroundImage";


export function Services(){
    return (
        <div>
            <BackGroundImg bgImage="bg-imgBackground" />
            <SectionHero />
            <Line />
        </div>
    )
}