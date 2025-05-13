import { Line } from "../../components/Line";



export default function NonLeadPaintStrippingPage() {
    return (
        <div>
        <section className="md:h-3/5 h-full flex w-[100%] items-center justify-start md:justify-center p-8 m-4">
            <div className=" w-[100%] lg:w-[60%] md:w-[80%] sm:w-[100%] xl-w-[50%] flex-col md:h-[300px] h-[450px] items-center text-center justify-center p-4">
                <p className="md:text-lg sm:text-md flex w-full h-[50%] items-center text-logo-blue p-1 text-start">
                We can strip the paint of any non-lead paint painted surface, to include wood, metal, brick, and plaster. We do this process by hand if necessary, to ensure delicate surfaces do not get damaged.
                </p>
            </div>
        </section>
            <Line />
        </div>
    );
}