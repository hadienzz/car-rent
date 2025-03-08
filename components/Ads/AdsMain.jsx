import bg_ads_1 from "../../public/bg-ads-1.png";
import bg_ads_2 from "../../public/bg-ads-2.png";
import Ads from "./Ads";

const AdsMain = () => {
    return (
        <main className="md:grid grid-cols-[640px_640px] gap-8 justify-center items-center w-screen">
            <div className="">
                <Ads
                    bg={bg_ads_1.src}
                    text_1={"The Best Platform to Car Rental"}
                    text_2={
                        "Ease of doing a car rental safely and reliably. Of course at a low price."
                    }
                />
            </div>
            <div className=" hidden md:block">
                <Ads
                    bg={bg_ads_2.src}
                    text_1={"Easy way to rent a car at a low price"}
                    text_2={
                        "Providing cheap car rental services and safe and comfortable facilities."
                    }
                />
            </div>
        </main>
    )
}

export default AdsMain