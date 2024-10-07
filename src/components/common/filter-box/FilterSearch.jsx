import { useTranslation } from "react-i18next"
import { Search_TwoIcon } from "../../../core/icon";

export const variantPlaceHolder = {
    "Courses": "PlaceHolder_Courses",
    "Blogs": "PlaceHolder_Blogs",
    "Shop": "PlaceHolder_Shop"
}

const FilterSearch = ({ variant, setQuery, Style}) => {
    const { t } = useTranslation();

    const SetFilterQuery = (e) => {
        if (e.target.value !== "") {
            setQuery(e.target.value);
        }
        else {
            setQuery(undefined);
        }
    }
    return (
        <div className={`flex items-center p-3 bg-LightGray rounded-lg mb-5 ${Style}`}>
            <input type="text" onChange={(e) => SetFilterQuery(e)} placeholder={t(variantPlaceHolder?.[variant])} className="text-sm w-11/12 bg-transparent outline-none" />
            <Search_TwoIcon />
        </div>
    )
}

export default FilterSearch