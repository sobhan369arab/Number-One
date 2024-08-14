
const SearchBtn = ({mood}) => {
    return (
        <div className={`w-9 h-9 bg-purpleCustom rounded-full bg-[url('../icons/iconsSearch.png')]
         bg-70 bg-no-repeat bg-center ${mood}`}></div>

    )
}

export default SearchBtn