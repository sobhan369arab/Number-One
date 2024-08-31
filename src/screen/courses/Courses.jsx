import { FilterSide, PaginatedItems, SortBox } from "../../components/common"
import { useMediaQuery } from "react-responsive"
import { CoursesDataFa } from "../../core/constants/Courses/courses-data_Fa"
import { useEffect, useState } from "react"
import TitleSection from "../../components/partials/title-section/TitleSection"
import View2 from "../../components/pages/course-list/View2"


const Courses = () => {
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

    const filterObj = {
        SortingCol: sortCal,
        SortType: sortType,
        // Query: Query,
        CostDown: priceDown,
        CostUp: priceUp,
        ListCategory: categoryData,
        ListInstructor: instructorData,
        courseRating:rating,
        courseLevelId: levelId,
        courseTypeId: typeId,
    };

    useEffect(() => {
        if (AllData.length === 0) {
            SetAllData(CoursesDataFa);
        }
    }, [AllData])

    return (
        <>
            <TitleSection title={'CoursesTitle'} />
            <div className="main-container flex gap-7">
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
                />

                <div className="w-[87%]">
                    <div className="flex gap-5 items-center pb-2">
                        <SortBox setSortCal={setSortCal} setSortType={setSortType} allDataNumber={CoursesDataFa.length} data={AllData} />
                        <View2 />
                    </div>
                    {AllData.length !== 0 ? <PaginatedItems itemsPerPage={isTabletOrMobile ? 6 : 12} Data={AllData} /> : null}
                </div>
            </div>
        </>
    )
}

export default Courses