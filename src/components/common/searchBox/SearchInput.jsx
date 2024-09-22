import { useTranslation } from "react-i18next";
import SearchBtn from "./SearchBtn";
import MediaQuery from "react-responsive";
import { ArrowIcon, CategoryIcon } from "../../../core/icon";
import { useSelector } from "react-redux";

const SearchInput = ({ maxResponsiveValue, minResponsiveValue, showSearchFilter = true, inputStyle }) => {
    const { t, i18n } = useTranslation();
    const theme = useSelector(state => state.DarkMode)
    return (
        <>
            <MediaQuery minWidth={minResponsiveValue}>
                <div className="w-fit border border-LightGrayish h-full overflow-hidden px-px text-sm flex justify-between items-center rounded-full max-xl:hidden">
                    <div className="w-[90%] flex items-center">
                        {/* category Section */}
                        <div style={{ display: showSearchFilter ? "flex" : "none" }} className={`group text-DarkBlue items-center gap-x-2 cursor-pointer duration-200 border-neutral-400 ${i18n.language === 'fa' ? 'border-l' : 'border-r'} ${i18n.language === 'fa' ? 'pr-2 pl-6' : 'pr-6 pl-2'}`}>
                            <CategoryIcon height="15px" />
                            <span className="text-nowrap group-hover:text-VioletBlue duration-200">{t('category')}</span>
                            <ArrowIcon className={`group-hover:fill-VioletBlue duration-200 ${theme ? "fill-white" : "fill-black"}`} />
                        </div>
                        {/* Search Input */}
                        <input type="text" placeholder={t('PlaceHolder_Courses')} className={`w-[200px] h-fit outline-none px-4 ${inputStyle} bg-transparent`} />
                    </div>
                    <SearchBtn />
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={maxResponsiveValue}>
                <SearchBtn />
            </MediaQuery>
        </>
    )
}

export default SearchInput