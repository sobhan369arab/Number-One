import { useQuery } from "@tanstack/react-query"
import { FilterRadio, FilterSearch } from "../../common/filter-box"
import GetListNewsCategory from "../../../core/services/api/GetData/GetListNewsCategory"
import { setNewsCategoryId, setQuery } from "../../../redux/slices/filter-box-slices/FilterBlog"

const FilterSide_Blogs = () => {
    const { data: newsCategory } = useQuery({
        queryKey: ['GET_NEW_CATEGORY'],
        queryFn: GetListNewsCategory,
    })

    return (
        <div className='h-fit lg:w-72'>
            <FilterSearch setQuery={setQuery} variant="Blogs" />
            <FilterRadio
                title={"category"}
                setInputID={setNewsCategoryId}
                inputData={newsCategory}
                titleKey={"categoryName"}
            />
        </div>
    )
}

export default FilterSide_Blogs