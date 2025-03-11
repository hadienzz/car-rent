import PickOff from "./Pick-Off"
import swapIcon from '../../public/swap-icon.png'


const PickMain = () => {
    return (
        <div className="px-4 lg:px-12 py-8  md:flex justify-center items-center mt-13 w-full">
            <PickOff title={"Pick - Up"} />
            <img className="p-[18px] cursor-pointer mx-auto md:mx-8 xl:mx-11 rounded-[10px] bg-[#3563E9]" src={swapIcon.src} alt="" />
            <PickOff title={"Drop - Off"} />

        </div>
    )
}

export default PickMain