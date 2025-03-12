import { CARS } from "@/app/data/cars"
import CollectionCarsCard from "./CollectionCarsCard"

const CollectionCars = ({ types, car }) => {
    return (
        <main className="pl-6 py-8 md:px-12 lg:px-16 xl:px-21">
            <header className="flex justify-between md:px-5">
                <h1 className="text-sm md:text-base font-semibold text-[#90A3BF]">{types}</h1>
                <p className="text-xs md:text-base text-[#3563E9]  cursor-pointer">View All</p>
            </header>
            <section>
                <div className="flex overflow-hidden gap-4">
                    {car.map((item, idx) => (
                        <CollectionCarsCard {...item} key={idx} />
                    ))}
                </div>
            </section>
        </main>
    )
}

export default CollectionCars