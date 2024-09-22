import { useSearchParams } from "react-router-dom"

const Tab = ({ name, title, value }) => {
    const [searchParams, setSearchParams] = useSearchParams({ category: "همه دوره ها" })
    const categoryNow = searchParams.get("category")
    // get the title and filter item
    function callBack(value) {
        console.log(value)
        setSearchParams({ category: value })
    }

    return (
        <label className="mobile:mx-0 mobile:text-sm mx-5 pb-3 h-full relative text-gray-500 cursor-pointer">
            <input checked={categoryNow === value ? true : false} onChange={() => { callBack(value) }} type="radio" name={"tab-" + name} className=" hidden peer/tab" />
            <span className="peer-checked/tab:text-DarkBlue">{title}</span>
            <span className="w-full h-1.5 transition-all duration-300 peer-checked/tab:bg-VioletBlue rounded-full absolute -bottom-0.5 right-0 z-10"></span>
        </label>
    )
}

export default Tab