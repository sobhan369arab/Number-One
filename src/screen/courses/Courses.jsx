import { FilterSide, PaginatedItems} from "../../components/common"
import { useMediaQuery } from "react-responsive"
import { CoursesDataFa } from "../../core/constants/Courses/courses-data_Fa"
import { useEffect, useState } from "react"
import TitleSection from "../../components/partials/title-section/TitleSection"
import { useTranslation } from "react-i18next"
import SectionTop from "../../components/pages/course-list/SectionTop"


const Courses = () => {
    const { t } = useTranslation();
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 530px)' })

    const [AllData, SetAllData] = useState([]);
    const [sortCal, setSortCal] = useState("DESC");
    const [sortType, setSortType] = useState("Rate");
    const [categoryData, SetCategoryData] = useState(null);
    const [instructorData, SetInstructorData] = useState(null);
    const [levelId, SetLevelId] = useState(undefined);
    const [typeId, SetTypeId] = useState(undefined);
    const [rating, SetRating] = useState(0);
    const [priceDown, setPriceDown] = useState(0);
    const [priceUp, setPriceUp] = useState(1000000);
    const [showGrid, setShowGrid] = useState(false);
    const [Query, setQuery] = useState(undefined);
    const filterObj = {
        SortingCol: sortCal,
        SortType: sortType,
        Query: Query,
        CostDown: priceDown,
        CostUp: priceUp,
        ListCategory: categoryData,
        ListInstructor: instructorData,
        courseRating: rating,
        courseLevelId: levelId,
        courseTypeId: typeId,
    };
    console.log(filterObj)

    useEffect(() => {
        if (AllData.length === 0) {
            SetAllData(CoursesDataFa);
        }
    }, [AllData])

    return (
        <>
            <TitleSection title={'CoursesTitle'} />
            <div className="main-container flex gap-7 relative">
                <FilterSide
                    coursesData={AllData}
                    SetCoursesData={SetAllData}
                    SetCategoryData={SetCategoryData}
                    SetInstructorData={SetInstructorData}
                    SetLevelId={SetLevelId}
                    SetTypeId={SetTypeId}
                    SetRating={SetRating}
                    setPriceDown={setPriceDown}
                    setPriceUp={setPriceUp}
                    setQuery={setQuery}
                />

                <div className="w-[87%]">
                    <SectionTop
                    CourseData={CoursesDataFa}
                    FilteredData={AllData}
                    setSortCal={setSortCal}
                    setSortType={setSortType}
                    setShowGrid={setShowGrid}
                    
                    />
                    {AllData.length !== 0 ? <PaginatedItems showGrid={showGrid} itemsPerPage={isTabletOrMobile ? 6 : 12} Data={AllData} /> : null}
                </div>
            </div>
        </>
    )
}

export default Courses