import { SearchInput, SortBox } from "../../common"
import { setQuery} from "../../../redux/slices/userPanel-filter-slices/MyCourses"
import { sortOptionPanelDuel} from "../../../core/constants/sorts/Sort"
import { useTranslation } from "react-i18next"

const SearchSection = ({setState}) => {
    const { i18n } = useTranslation()

    return (
        <div className='w-full flex justify-between'>
            <SearchInput setQuery={setQuery} maxResponsiveValue={709} minResponsiveValue={710} showSearchFilter={false} inputStyle="py-2.5 w-72 lg:w-[400px]" />
            <SortBox
                radius="full"
                setState={setState}
                options={sortOptionPanelDuel}
                placeholder={["دوره ها","Courses"]}
                classNames={{
                    base: "!w-auto",
                    trigger: "bg-transparent border border-LightGrayish hover:!bg-transparent duration-500 h-[47px] w-[180px]",
                    selectorIcon: "stroke-[#5751E1]",
                    value: `border-LightGrayish`,
                    listboxWrapper: `font-IranSans ${i18n.language != "en" && "select_dir"}`
                }}
            />
        </div>
    )
}

export default SearchSection
