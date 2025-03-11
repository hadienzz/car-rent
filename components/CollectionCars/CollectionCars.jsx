import CollectionCarsCard from "./CollectionCarsCard"

const CollectionCars = () => {
    return (
        <main className="px-6 py-8 md:px-12 lg:px-16 xl:px-21">
            <header className="flex justify-between px-5">
                <h1 className="text-sm md:text-base font-semibold text-[#90A3BF]">Popular Car</h1>
                <p className="text-xs md:text-base text-[#3563E9]  cursor-pointer">View All</p>
            </header>
            <section>
                <div className="flex justify-center">
                    <CollectionCarsCard />
                </div>
            </section>
        </main>
    )
}

export default CollectionCars