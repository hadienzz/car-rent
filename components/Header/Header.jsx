import FilterBar from "../Search/FilterBar"
import SearchBar from "../Search/SearchBar"
import cartIcon from '../../public/cart.png'

const Header = () => {
    return (
        <header className="px-6 py-8 md:px-12 lg:px-16 items-center">
            <div className="flex justify-between">
                <h1 className="font-bold text-2xl text-primary text-[#3563E9]">MORENT</h1>
                <div className="hidden md:flex gap-4 justify-center items-center">
                    <SearchBar />
                    <FilterBar />
                </div>
                <div className="w-8 h-8 cursor-pointer relative">
                    <img src={cartIcon.src} alt="Cart" />
                    <div className="rounded-full w-4 h-4 bg-red-500  absolute -mt-8 ml-5 flex items-center justify-center text-center text-white hidden ">
                        <p className="text-xs">1</p>
                    </div>
                </div>
            </div>
            <div className="text-center flex gap-4 justify-center items-center mt-8 md:hidden">
                <SearchBar />
                <FilterBar />
            </div>
        </header>
    )
}

export default Header