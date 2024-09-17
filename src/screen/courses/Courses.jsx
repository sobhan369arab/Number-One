import { PaginatedItems, PaginateHolderItems, handlePageClick, calculatePageCount, CreateModal, SectionTop, SortBox } from "../../components/common"
import MediaQuery, { useMediaQuery } from "react-responsive"
import { CoursesDataFa } from "../../core/constants/Courses/courses-data_Fa"
import { useEffect, useState } from "react"
import TitleSection from "../../components/partials/title-section/TitleSection"
import { useTranslation } from "react-i18next"
import Course from "../../components/pages/course/Course"
import { useDisclosure, Button } from "@nextui-org/react"
import { CloseIcon } from "../../core/icon"
import { FilterSide_Courses } from "../../components/pages/course-list"

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
    // console.log(filterObj_Courses)

    useEffect(() => {
        if (AllData.length === 0) {
            SetAllData(CoursesDataFa);
        }
    }, [AllData])

    // Paginate
    const currentCourse = isTabletOrMobile ? 6 : 12;
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + currentCourse;
    const currentItems = AllData.slice(itemOffset, endOffset);

    const [comparisonId, setComparisonId] = useState([])

    return (
        <>
            <TitleSection title={'CoursesTitle'} />
            <div className="main-container flex gap-7 relative">

                <MediaQuery minWidth={"1024px"}>
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
                    <MediaQuery maxWidth={"1023px"}>
                        <Button onPress={onOpen} className="sticky top-3 z-50">{t('openFilter')}</Button>
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
                        AllData={CoursesDataFa}
                        FilteredData={AllData}
                        setShowGrid={setShowGrid}
                    >
                        <SortBox setSortType={setSortType} setSortCal={setSortCal} label={"course"} />
                    </SectionTop>
                    <PaginateHolderItems style="justify-center">
                        <PaginatedItems handlePageClick={(event) => { handlePageClick(event, currentCourse, setItemOffset, AllData) }} pageCount={calculatePageCount(AllData, currentCourse)}>
                            <div className={`flex flex-wrap relative gap-x-1 justify-around gap-y-5 w-full m-auto my-2 ${showGrid && isTabletOrLapTop ? "grid-list" : ""}`}>
                                {currentItems.map((item, index) => (
                                    <Course
                                        key={index}
                                        id={item.id}
                                        title={item.title}
                                        images={item.img}
                                        instructor={item.instructor}
                                        score={item.score}
                                        category={item.category}
                                        level={item.level}
                                        price={item.price}
                                        date={item.date}
                                        studentsNumber={item.students}
                                        like={item.like}
                                        disLike={item.disLike}
                                        bio={item.bio}
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