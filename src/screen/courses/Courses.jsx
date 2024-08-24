import { FilterSide, PaginatedItems, SortBox } from "../../components/common"
import TitleSection from "../../components/partials/TitleSection/titleSection"
import { useMediaQuery } from "react-responsive"
import { CoursesDataFa } from "../../core/constants/Courses/courses-data_Fa"
import { useEffect, useState } from "react"


const Courses = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 530px)' })

    const [AllData, SetAllData] = useState([]);
    const [sortCal, setSortCal] = useState("DESC");
    const [sortType, setSortType] = useState("Rate");


    useEffect(() => {
        if (AllData.length === 0) {
            SetAllData(CoursesDataFa);
        }
    }, [AllData])
console.log(sortCal)
console.log(sortType)


    return (
        <>
            <TitleSection title={'CoursesTitle'} />
            <div className="main-container">
                <FilterSide coursesData={AllData} SetCoursesData={SetAllData} />
                <div className="w-[95%]">
                    <SortBox setSortCal={setSortCal} setSortType={setSortType} allDataNumber={CoursesDataFa.length}  data={AllData}/>
                    {AllData.length !== 0 ? <PaginatedItems itemsPerPage={isTabletOrMobile ? 6 : 12} Data={AllData} /> : null}
                </div>
            </div>
        </>
    )
}

export default Courses