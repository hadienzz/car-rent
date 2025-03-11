import TankIcon from '@/icons/TankIcon'
import car from '../../public/car.png'
import TransmisionIcon from '@/icons/TransmisionIcon'
import PeopleIcon from '@/icons/PeopleIcon'
import Button from '../UI/Button'

const CollectionCarsCard = () => {
    return (
        <div className="bg-[#FFFFFF] p-4 rounded-[10px]">
            <div className="flex gap-22">
                <h1 className="text-base text-[#1A202C] font-semibold">Koenigsegg</h1>
                <p className=" "> LOVE</p>
            </div>
            <p className="text-xs font-medium text-[#90A3BF]">Sport</p>
            <img src={car.src} className='w-[180px]' alt="Koenigsegg" />
            <div className='flex justify-center gap-4 text-xs text-[#90A3BF]'>
                <div className='flex gap-1'>
                    <TankIcon />
                    <p>90 L</p>
                </div>
                <div className='flex gap-1'>
                    <TransmisionIcon />
                    <p>Matic</p>
                </div>
                <div className='flex gap-1'>
                    <PeopleIcon />
                    <p>2 People</p>
                </div>
            </div>

            <div className='flex'>
                <p className='text-xs text-[#90A3BF]'><span className='text-base font-bold text-[#1A202C]'>$99.00/</span> day</p>
                <Button>Buy Now</Button>
            </div>
        </div>
    )
}

export default CollectionCarsCard