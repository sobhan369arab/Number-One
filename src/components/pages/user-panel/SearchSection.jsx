import { useTranslation } from "react-i18next"
import { SearchInput } from "../../common"

const SearchSection = () => {
    const options = [
        { value: "جدیدترین", text: ["جدیدترین", "Newest"] },
        { value: "قدیمی ترین", text: ["قدیمی ترین", "Oldest"] },
    ]
    const { i18n } = useTranslation()
    return (
        <div className='w-full flex justify-between'>
            <SearchInput maxResponsiveValue={0} minResponsiveValue={0} showSearchFilter={false} inputStyle="py-2.5 w-[400px]" />
            <select className='w-40 cursor-pointer h-full rounded-full relative shadow-inner bg-transparent px-8 border border-neutral-100'>
                {options.map((obj, index) => <option key={index} value={obj.value}>{i18n.language == "en" ? obj.text[1] : obj.text[0]}</option>)}
            </select>
        </div>
    )
}

export default SearchSection
