import FilterBar from "../Search/FilterBar"
import SearchBar from "../Search/SearchBar"

const Header = () => {
    return (
        <header className=" items-center">
            <div className="flex justify-between">
                <h1 className="font-bold text-2xl text-primary text-[#3563E9]">MORENT</h1>
                <div className="hidden md:flex gap-4 justify-center items-center">
                    <SearchBar />
                    <FilterBar />
                </div>
                <p>IMAGE</p>
            </div>
            <div className="text-center flex gap-4 justify-center items-center mt-8 md:hidden">
                <SearchBar />
                <FilterBar />
            </div>
        </header>
    )
}

export default Header