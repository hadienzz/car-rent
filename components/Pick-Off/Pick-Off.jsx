import ArrowDown from "@/icons/ArrowDown"

const PickOff = ({ title }) => {
    return (
        <div className="grid justify-center gap-6 bg-[#FFF] rounded-[10px] md:px-12 px-5 py-5 md:py-6 lg:w-[582px] ">
            <div className="flex gap-2 items-center">
                <div className="bg-[rgba(53,99,233,0.30)] rounded-full w-4 h-4 flex items-center justify-center">
                    <div className="rounded-full w-2 h-2 bg-[#3563E9]"></div>
                </div>
                <p className="text-[#1A202C] font-semibold">{title}</p>
            </div>

            <div className="flex items-center">
                <div className="px-5 2xl:px-6 lg:px-4 md:px-2">
                    <h1 className="text-[#1A202C] font-semibold">Locations</h1>
                    <div className="flex  items-center justify-center">
                        <p className="text-[#90A3BF] text-xs">Select your location</p>
                        <ArrowDown />
                    </div>
                </div>

                <div className="border-x px-5 2xl:px-6 lg:px-4 md:px-2 ">
                    <h1 className="text-[#1A202C] font-semibold">Date</h1>
                    <div className="flex gap-2 items-center justify-center">
                        <p className="text-[#90A3BF] text-xs">Select your date</p>
                        <ArrowDown />
                    </div>
                </div>

                <div className="px-5 2xl:px-6 lg:px-4 md:px-2">
                    <h1 className="text-[#1A202C] font-semibold ">Time</h1>
                    <div className="flex gap-2 items-center justify-center">
                        <p className="text-[#90A3BF] text-xs">Select your date</p>
                        <ArrowDown />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PickOff