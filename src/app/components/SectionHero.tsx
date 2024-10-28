export function SectionHero() {
    return(
        <section className="h-[180px] flex w-[100%] items-center justify-center">
            <div className="flex w-[45%] items-center justify-center px-4 py-4 relative">
                <p className="text-lg leading-relaxed w-full absolute px-4 py-4 text-logo-blue">
                We are a small business based in Battersea, London. 
                All of our services are guaranteed to be done with the utmost care
                and attention and we are always ready to exceed the expectations of our clients.
                Only top-of-the-line equipment is used for every job, we work with residential
                and commercial exteriors and are ready for any requests.
                </p>
                <p className="text-lg leading-relaxed w-full absolute top-16 px-4 py-4 text-logo-blue">
                Our services include pressure washing, gum and graffiti removal,
                non-lead paint stripping and others, we are here with the mission
                of reviving your outdoor spaces.
                </p>
            </div>
        </section>
    )
}