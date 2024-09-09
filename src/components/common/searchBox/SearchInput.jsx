import { useTranslation } from "react-i18next";
import SearchBtn from "./SearchBtn";
import MediaQuery from "react-responsive";
import { ArrowIcon, CategoryIcon } from "../../../core/icon";

const SearchInput = ({ maxResponsiveValue, minResponsiveValue, showSearchFilter = true, inputStyle }) => {
    const { t, i18n } = useTranslation();
    return (
        <>
            <MediaQuery minWidth={minResponsiveValue}>
                <div className="w-fit border h-full overflow-hidden px-px text-sm flex justify-between items-center rounded-full max-xl:hidden">
                    <div className="w-[90%] flex items-center">
                        {/* category Section */}
                        <div style={{ display: showSearchFilter ? "flex" : "none" }} className={`items-center gap-x-2 cursor-pointer hover:text-purpleCustom transition-all duration-200 border-neutral-400 ${i18n.language === 'fa' ? 'border-l' : 'border-r'} ${i18n.language === 'fa' ? 'pr-2 pl-6' : 'pr-6 pl-2'}`}>
                            <CategoryIcon height="15px" />
                            <span className="text-nowrap">{t('category')}</span>
                            <ArrowIcon />
                        </div>
                        {/* Search Input */}
                        <input type="text" placeholder={t('PlaceHolder_Courses')} className={`w-[200px] h-fit outline-none px-4 ${inputStyle}`} />
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