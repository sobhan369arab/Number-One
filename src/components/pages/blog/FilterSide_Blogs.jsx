import { CategoryFilter } from "../../../core/constants/Filters/Filters"
import { FilterCheckBox, FilterSearch } from "../../common/filter-box"

const FilterSide_Blogs = ({ setQuery, SetCategoryData }) => {

    return (
        <div className='h-fit lg:w-72'>
            <FilterSearch variant="Blogs" setQuery={setQuery} />
            <FilterCheckBox
                labelArray={CategoryFilter}
                title={"category"}
                SetFilteredData={SetCategoryData}
            />
        </div>
    )
}

export default FilterSide_Blogs