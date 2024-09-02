import { SearchInput } from "../../common"

const SearchSection = () => {
    return (
        <div className='w-full flex justify-between'>
            <SearchInput maxResponsiveValue={0} minResponsiveValue={0} showSearchFilter={false} inputStyle="py-2.5 w-[400px]" />
            <select className='w-40 cursor-pointer h-full rounded-full relative shadow-inner bg-transparent px-8 border border-neutral-100'>
                <option value="جدیدترین">جدیدترین</option>
                <option value="قدیمی ترین">قدیمی ترین</option>
            </select>
        </div>
    )
}

export default SearchSection
