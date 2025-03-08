const PickOff = ({ title }) => {
    return (
        <div className="grid justify-center gap-6 bg-[#FFF] rounded-[10px]">
            <div className="flex gap-2">
                <div>
                    DOT
                </div>
                <p className="text-[#1A202C] font-semibold">{title}</p>
            </div>
            <div className="flex items-center">
                <div className="pr-5">
                    <h1 className="text-[#1A202C] font-semibold">Locations</h1>
                    <p className="text-[#90A3BF]">Semarang</p>
                </div>
                <div className="border-x px-5">
                    <h1 className="text-[#1A202C] font-semibold">Date</h1>
                    <p className="text-[#90A3BF]">20 July 2022</p>
                </div>
                <div className="pl-5">
                    <h1 className="text-[#1A202C] font-semibold ">Time</h1>
                    <p className="text-[#90A3BF]">07.00</p>
                </div>
            </div>
        </div>
    )
}

export default PickOff