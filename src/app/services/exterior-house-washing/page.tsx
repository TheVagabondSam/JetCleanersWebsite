import { Line } from "../../components/Line";
import { BackGroundImg2 } from "../../components/backGroundImage";


export default function ExteriorHouseWashingPage() {
    return (
        <div>
            <section className="md:h-3/5 h-full flex w-[100%] items-center justify-start md:justify-center p-8 m-4">
            <div className=" w-[100%] lg:w-[60%] md:w-[80%] sm:w-[100%] xl-w-[50%] flex-col md:h-[300px] h-[450px] items-center text-center justify-center p-4">
                <p className="md:text-lg sm:text-md flex w-full h-[50%] items-center text-logo-blue p-1 text-start">
                We ensure the cleanliness of your home exterior by removing moss, mold, mildew, dirt, grime, soot or other undesireable aspects. We do this with or without chemical products and with a pressure-washer machine.
                Our chemicals ensure the longlasting aspect of your exterior by preventing the come-back of organic material for many more months than it would without.
                </p>
                </div>
            </section>
            <Line />
        </div>
    );
}
