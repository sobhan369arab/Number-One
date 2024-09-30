import { PaginatedItems, PaginateHolderItems, handlePageClick, calculatePageCount, CreateModal, SectionTop, SortBox, SortBoxHolder } from "../../components/common"
import MediaQuery, { useMediaQuery } from "react-responsive"
import { CoursesDataFa } from "../../core/constants/Courses/courses-data_Fa"
import { useEffect, useState } from "react"
import TitleSection from "../../components/partials/title-section/TitleSection"
import { useTranslation } from "react-i18next"
import Course from "../../components/pages/course/Course"
import { useDisclosure, Button } from "@nextui-org/react"
import { CloseIcon } from "../../core/icon"
import { sortOptionCal, sortOptionType } from "../../core/constants/sorts/Sort";
import { FilterSide_Courses } from "../../components/pages/course-list"
import BreadCrumb from "../../components/partials/title-section/BreadCrumb"
import GetAllCourseByPagination from "../../core/services/api/GetData/GetAllCourses"

const Courses = () => {
    const { t } = useTranslation();
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 640px)' })
    const isTabletOrLapTop = useMediaQuery({ query: '(min-width: 768px)' })

    // Modal
    const { isOpen, onOpen, onClose } = useDisclosure();

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
    const filterObj_Courses = {
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
    // Paginate
    const currentCourse = isTabletOrMobile ? 6 : 12;
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + currentCourse;
    const currentItems = AllData?.slice(itemOffset, endOffset);

    const getCourseList = async () => {

        const courses = await GetAllCourseByPagination(filterObj_Courses, 1, 34)
        SetAllData(courses.courseFilterDtos)
    }


    useEffect(() => { getCourseList() }, [AllData])


    const [comparisonId, setComparisonId] = useState([])

    return (
        <>
            <TitleSection title={'CoursesTitle'} >
                <BreadCrumb type="Div" text={'CoursesTitle'} />
            </TitleSection>
            <div className="main-container flex gap-7 relative">
                <MediaQuery minWidth={"1050px"}>
                    <FilterSide_Courses
                        coursesData={AllData}
                        SetCoursesData={SetAllData}
                        SetCategoryData={SetCategoryData}
                        SetInstructorData={SetInstructorData}
                        levelId={levelId}
                        typeId={typeId}
                        SetLevelId={SetLevelId}
                        SetTypeId={SetTypeId}
                        SetRating={SetRating}
                        setPriceDown={setPriceDown}
                        setPriceUp={setPriceUp}
                        setQuery={setQuery}
                        categoryData={categoryData}
                        instructorData={instructorData}
                    />
                </MediaQuery>
                <div className="lg:w-[87%] sm:w-full mobile:w-full mx-auto">
                    <MediaQuery maxWidth={"1049px"}>
                        <Button onPress={onOpen} className="sticky top-24 z-30">{t('openFilter')}</Button>
                        <CreateModal
                            isOpen={isOpen}
                            onClose={onClose}
                            header={t('filters')}
                            size="xl"
                            headerStyle="flex flex-col gap-1 text-white"
                        >
                            <div onClick={onClose} className="closeButton_modal bg-neutral-200/65 top-2 left-2">
                                <CloseIcon />
                            </div>
                            <FilterSide_Courses
                                SetCategoryData={SetCategoryData}
                                SetInstructorData={SetInstructorData}
                                levelId={levelId}
                                typeId={typeId}
                                SetLevelId={SetLevelId}
                                SetTypeId={SetTypeId}
                                SetRating={SetRating}
                                setPriceDown={setPriceDown}
                                setPriceUp={setPriceUp}
                                setQuery={setQuery}
                            />
                        </CreateModal>
                    </MediaQuery>
                    <SectionTop
                        AllData={AllData}
                        FilteredData={AllData}
                        setShowGrid={setShowGrid}
                    >
                        <SortBoxHolder>
                            <SortBox setState={setSortType} options={sortOptionType} placeholder="محبوبیت" />
                            <SortBox setState={setSortCal} options={sortOptionCal} placeholder="نزولی" />
                        </SortBoxHolder>
                    </SectionTop>
                    <PaginateHolderItems style="justify-center">
                        <PaginatedItems handlePageClick={(event) => { handlePageClick(event, currentCourse, setItemOffset, AllData) }} pageCount={calculatePageCount(AllData ?? [], currentCourse)}>
                            <div className={`flex flex-wrap relative gap-x-1 justify-around gap-y-5 w-full m-auto my-2 ${showGrid && isTabletOrLapTop ? "grid-list" : ""}`}>
                                {currentItems && currentItems.map((item, index) => (
                                    <Course
                                        id={index}
                                        title={item.title}
                                        images={item.tumbImageAddress}
                                        instructor={item.teacherName}
                                        score={item.courseRate}
                                        category={item.technologyList}
                                        level={item.levelName}
                                        price={item.cost}
                                        date={item.lastUpdate}
                                        studentsNumber={0}
                                        like={item.likeCount}
                                        disLike={item.dissLikeCount}
                                        bio={item.describe}
                                        comparisonId={comparisonId}
                                        setComparisonId={setComparisonId}
                                    />
                                ))}
                            </div>
                        </PaginatedItems>
                    </PaginateHolderItems>
                </div>
            </div>
        </>
    )
}

export default Courses