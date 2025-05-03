const CarIdPage = ({ params }) => {
    const { carId } = params
    return (
        <main>
            <p>this is {carId} id</p>
        </main>
    )
}

export default CarIdPage