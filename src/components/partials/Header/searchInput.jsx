import { useTranslation } from "react-i18next";
import SearchBtn from "./SearchBtn";
import MediaQuery from "react-responsive";
import { ArrowIcon, CategoryIcon } from "../../../core/icon";

const SearchInput = () => {
    const { t, i18n } = useTranslation();
    return (
        <>
            <MediaQuery minWidth={"1280px"}>
                <div className="border h-full pl-0.5 pr-2 text-sm flex justify-between items-center rounded-3xl max-xl:hidden">
                    <div className="w-[90%] flex items-center">
                        {/* category Section */}
                        <div className={`flex items-center gap-x-2 cursor-pointer hover:text-purpleCustom transition-all duration-200 ${i18n.language === 'fa' ? 'pr-2 pl-6' : 'pr-6 pl-2'}`}>
                            <CategoryIcon height="15px" />
                            <span className="text-nowrap">{t('category')}</span>
                            <ArrowIcon />
                        </div>
                        {/* Search Input */}
                        <input type="text" placeholder={t('PlaceHolder')} className={`w-[200px] h-fit outline-none px-4 border-neutral-400 ${i18n.language === 'fa' ? 'border-r' : 'border-l'}`} />
                    </div>
                    <SearchBtn />
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={"1280px"}>
                <SearchBtn />
            </MediaQuery>
        </>
    )
}

export default SearchInput