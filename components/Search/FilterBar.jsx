import filterIcon from '../../public/filter.png'

const FilterBar = () => {
    return (
        <div className='p-3 border-[1px] border-[#596780] rounded-[10px]'>
            <img src={filterIcon.src} alt="Filter Icon" />
        </div>
    )
}

export default FilterBar