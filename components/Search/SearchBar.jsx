import searchIcon from '../../public/search.png'

const SearchBar = () => {
    return (
        <div className='flex gap-2 rounded-[10px] py-3 pl-6 border-[1px] border-[#596780 w-[263px]'>
            <img src={searchIcon.src} alt="SearchIcon" />
            <input className='text-[#596780] outline-none' type="text" placeholder='Search something here ' />
        </div>
    )
}

export default SearchBar