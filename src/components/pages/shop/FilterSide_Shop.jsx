import { FilterCheckBox, FilterRadio, FilterRange, FilterSearch, FilterStars } from "../../common/filter-box"
import { CategoryFilter, ExistType } from "../../../core/constants/Filters/Filters"

const FilterSide_Shop = ({ setQuery, setCategoryData, setRating, setPriceDown, setPriceUp, exist, setExist }) => {
    return (
        <div className='h-fit lg:w-72'>
            <FilterSearch variant="Shop" setQuery={setQuery} />
            <FilterCheckBox
                labelArray={CategoryFilter}
                title={"category"}
                SetFilteredData={setCategoryData}
            />
            <FilterRadio
                title={"exist"}
                setCourseID={setExist}
                inputId={exist}
                labelArray={ExistType}
            />
            <FilterStars
                title={"rating"}
                SetRating={setRating}
            />
            <FilterRange
                title={"price"}
                setPriceDown={setPriceDown}
                setPriceUp={setPriceUp}
            />
        </div>
    )
}

export default FilterSide_Shop
