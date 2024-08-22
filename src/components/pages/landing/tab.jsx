const Tab = ({ name, title }) => {
    // get the title and filter item
    function callBack(title) {
        console.log(title)
    }

    return (
        <label className="mx-5 pb-3 h-full relative text-neutral-400 cursor-pointer">
            <input onChange={() => { callBack(title) }} type="radio" name={"tab-" + name} className=" hidden peer/tab" />
            <span className="peer-checked/tab:text-black">{title}</span>
            <span className="w-full h-1.5 transition-all duration-300 peer-checked/tab:bg-purpleCustom rounded-full absolute -bottom-0.5 right-0 z-10"></span>
        </label>
    )
}

export default Tab