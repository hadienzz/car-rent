import { CARS } from "@/app/data/cars"
import CollectionCars from "./CollectionCars"

const CollectionCarsMain = () => {
    return (
        CARS.map((item, idx) => (
            <CollectionCars types={item.types} car={item.car} key={idx} />
        ))
    )
}

export default CollectionCarsMain