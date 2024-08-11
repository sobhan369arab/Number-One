import { useTranslation } from "react-i18next";
import SearchBtn from "./searchBtn";

const SearchInput = () => {
    const { t, i18n } = useTranslation();
    return (
        <>
            <div className="border border-Gray h-[42px] w-[70%] text-sm flex items-center rounded-3xl max-xl:hidden ">
                {/* category Section */}
                <div className={`px-3 bg-[url('../icons/BlackArrow.png')] bg-11 bg-no-repeat cursor-pointer
            hover:text-Purple hover:bg-[url('../icons/PurpleArrow.png')] duration-200 
            ${i18n.language === 'fa' ? 'pl-2 bg-left' : 'pr-2 bg-right flex'}`}>
                    <img src="../icons/category.png" alt="category Icon" className="inline" />
                    <span className="mx-3">{t('category')}</span>
                </div>
                {/* Search Input */}
                <input type="text" placeholder={t('PlaceHolder')} className={`outline-none w-1/2 mx-1.5 px-2 border-Gray   
            ${i18n.language === 'fa' ? 'ml-6 border-r' : 'mr-9 border-l'}`} />
                <SearchBtn mood={'max-xl:hidden'} />
            </div>
            <SearchBtn mood={'xl:hidden'} />
        </>
    )
}

export default SearchInput