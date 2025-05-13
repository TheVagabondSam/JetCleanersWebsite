import { Line } from "../../components/Line";



export default function PavementCleaningPage() {
    return (
        <div>
        <section className="md:h-3/5 h-full flex w-[100%] items-center justify-start md:justify-center p-8 m-4">
            <div className=" w-[100%] lg:w-[60%] md:w-[80%] sm:w-[100%] xl-w-[50%] flex-col md:h-[300px] h-[450px] items-center text-center justify-center p-4">
                <p className="md:text-lg sm:text-md flex w-full h-[50%] items-center text-logo-blue p-1 text-start">
                By removing moss, mold, mildew, dirt, grime, soot and other undesireable aspects by the use of chemicals and a pressure-washer, we guanrantee a new and fresh look to your pavement.
                </p>
            </div>
        </section>
            <Line />
        </div>
    );
}