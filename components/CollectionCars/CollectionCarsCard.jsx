import TankIcon from '@/icons/TankIcon'
import koenigsegg from '../../public/koenigsegg.png'
import TransmisionIcon from '@/icons/TransmisionIcon'
import PeopleIcon from '@/icons/PeopleIcon'
import love from '../../public/love.png'

const CollectionCarsCard = (props) => {
    return (
        <div className="bg-[#FFFFFF] p-4 lg:p-6 rounded-[10px] cursor-pointer shadow-2xl lg:w-[304px]">
            <div className="flex justify-between">
                <h1 className="text-base text-[#1A202C] font-semibold">{props.name}</h1>
                <div className="text-[150px] font-bold bg-red-500 text-transparent bg-clip-text">
                    <img src={love.src} className='' alt="Love" />
                </div>
            </div>

            <p className="text-xs font-medium text-[#90A3BF]">{props.type}</p>
            <div className='overflow-hidden h-[128px] flex justify-center items-center'>
                <img src={props.image} className='w-[180px]' alt={props.name} />
            </div>

            <div className='flex justify-center gap-4 text-xs lg:text-sm text-[#90A3BF] mt-8'>

                <div className='flex gap-1'>
                    <TankIcon />
                    <p>{props.tank}</p>
                </div>
                <div className='flex gap-1'>
                    <TransmisionIcon />
                    <p>{props.transmision}</p>
                </div>
                <div className='flex gap-1'>
                    <PeopleIcon />
                    <p>{props.amount}</p>
                </div>
            </div>

            <div className='flex items-center text-white gap-4 justify-center mt-7'>
                <p className='text-xs lg:text-sm text-[#90A3BF]'><span className='text-base font-bold text-[#1A202C] lg:text-xl'>${props.price}.00/</span> day</p>
                <button className='bg-[#3563E9] rounded-sm px-5 text-xs lg:text-base font-semibold py-2.5 cursor-pointer'>Buy Now</button>
            </div>
        </div>
    )
}

export default CollectionCarsCard