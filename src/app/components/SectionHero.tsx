export function SectionHero() {
    return(
        <section className="md:h-3/5 h-full flex w-[100%] items-center justify-start md:justify-center p-8 m-4">
            <div className=" w-[100%] lg:w-[60%] md:w-[80%] sm:w-[100%] xl-w-[50%] flex-col md:h-[300px] h-[450px] items-center text-center justify-center p-4">
                <p className="md:text-lg sm:text-md flex w-full h-[50%] items-center text-logo-blue p-1 text-start">
                We are a small business based in Battersea, London. 
                All of our services are guaranteed to be done with the utmost care
                and attention and we are always ready to exceed the expectations of our clients.
                Only top-of-the-line equipment is used for every job, we work with residential
                and commercial exteriors and are ready for any requests.
                </p>
                <p className="md:text-lg sm:text-md w-full h-[55%] flex p-1 mt-2 md:mt-1 lg:mt-2 sm:mt-0 items-center text-start text-logo-blue">
                Our services include pressure washing, gum and graffiti removal,
                non-lead paint stripping and others, we are here with the mission
                of reviving your outdoor spaces.
                </p>
                </div>
        </section>
    )
}