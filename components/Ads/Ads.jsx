import bg_ads_1 from '../../public/bg-ads-1.png'

const Ads = () => {
    return (
        <section
            style={{ backgroundImage: `url(${bg_ads_1.src})` }}
            className='bg-[#54A6FF] text-white rounded-[10px] p-4 bg-cover bg-no-repeat bg-right md:max-w-[400px] h-[320px] mt-[32px]'>
            <h1 className='mb-3'>The Best Platform to Car Rental</h1>
            <p className='mb-4 cursor-pointer'>Ease of doing a car rental safely and reliably. Of course at a low price.</p>
            <button className='bg-[#3563E9] rounded-sm px-5 py-[14px] w-[128px] cursor-pointer'>Rental Car</button>
        </section>
    )
}

export default Ads