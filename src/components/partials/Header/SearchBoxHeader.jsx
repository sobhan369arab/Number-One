import { useTranslation } from "react-i18next";
import SearchBtn from "./SearchBtn";
import MediaQuery from "react-responsive";
import { ArrowIcon, CategoryIcon } from "../../../core/icon";

const SearchBoxHeader = () => {
    const { t, i18n } = useTranslation();
    return (
        <>
            <MediaQuery minWidth={"1280px"}>
                <div className="border h-full pl-0.5 pr-2 text-sm flex justify-between items-center rounded-3xl max-xl:hidden">
                    <div className="w-[90%] flex items-center">
                        {/* category Section */}
                        <div className={`flex items-center gap-x-2 cursor-pointer hover:text-purpleCustom transition-all duration-200 border-neutral-400 ${i18n.language === 'fa' ? 'pr-2 pl-4 border-l' : 'pr-6 pl-2 border-r'}`}>
                            <CategoryIcon height="15px" />
                            <span className="text-nowrap">{t('category')}</span>
                            <ArrowIcon />
                        </div>
                        <div className="flex items-center">
                            <input type="text" placeholder={t('PlaceHolder_Courses')} className={` w-[250px] h-fit outline-none px-4`} />
                            <SearchBtn />
                        </div>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={"1280px"}>
                <SearchBtn />
            </MediaQuery>
        </>
    )
}

export default SearchBoxHeader