const CarIdPage = ({ params }) => {
    const { carId } = params
    return (
        <>
            <p>Car Id: {carId}</p>
        </>
    )
}

export default CarIdPage