import FilterBar from "../Search/FilterBar"
import SearchBar from "../Search/SearchBar"

const Header = () => {
    return (
        <header>
            <div className="flex justify-between md:block">
                <h1 className="font-bold text-2xl text-primary text-[#3563E9]">MORENT</h1>
                <img src={null} className="w-7 h-7 rounded-full "></img >
            </div>
            <div className="text-center flex gap-4 justify-center items-center mt-8">
                <SearchBar />
                <FilterBar />
            </div>
        </header>
    )
}

export default Header