

const Ads = ({ bg, text_1, text_2 }) => {
    return (
        <section
            style={{ backgroundImage: `url(${bg})` }}
            className='bg-[#54A6FF] text-white rounded-[10px] p-4 bg-cover bg-no-repeat bg-center h-[320px] mt-[32px] xl:w-[670px] '>
            <h1 className='mb-3 text-3xl'>{text_1}</h1>
            <p className='mb-4'>{text_2}</p>
            <button className='bg-[#3563E9] rounded-sm px-5 py-[14px] cursor-pointer'>Rental Car</button>
        </section>


    )
}

export default Ads