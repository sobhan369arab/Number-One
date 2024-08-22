import Tab from "./tab"

const TopCourses = () => {
    const options = ["همه دوره ها", "طراحی", "تجارت", "توسعه"]
    return (
        <div className="w-full py-28 lg:px-44 sm:px-16 px-8 flex flex-wrap gap-y-4 justify-center bg-gradientBackground bg-cover bg-center bg-no-repeat">
            <span className="tag">دوره های کلاس برتر</span>
            <h1 className="title-text text-center">بهترین دوره های آموزشی جهان ما را کاوش کنید</h1>
            <p className="description-text w-full text-center">امروزه به دلیل آن که ارتباطات فضای مجازی رونق زیادی یافته است</p>
            <div className=" flex justify-center relative px-20 mt-10">
                {options.map((obj, index) => <Tab key={index} id={index} name="landing" title={obj} />)}
                <span className="w-full h-1 bg-[#D9D9F3] rounded-full bottom-0 absolute"></span>
            </div>
            <div className="w-full h-80 mt-5 bg-yellow-500"></div>
        </div>
    )
}

export default TopCourses
