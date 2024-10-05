import { PaginatedItems, PaginateHolderItems, handlePageClick, calculatePageCount, CreateModal, SectionTop, SortBox, SortBoxHolder } from "../../components/common"
import MediaQuery, { useMediaQuery } from "react-responsive"
import { useState } from "react"
import TitleSection from "../../components/partials/title-section/TitleSection"
import { useTranslation } from "react-i18next"
import Course from "../../components/pages/course/Course"
import { useDisclosure, Button } from "@nextui-org/react"
import { CloseIcon } from "../../core/icon"
import { sortOptionCal, sortOptionType } from "../../core/constants/sorts/Sort";
import { FilterSide_Courses } from "../../components/pages/course-list"
import BreadCrumb from "../../components/partials/title-section/BreadCrumb"
import { useQuery } from "react-query"
import { GetAllCourseByPagination } from "../../core/services/api/GetData"

const Courses = () => {
    const { t } = useTranslation();
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 640px)' });
    const isTabletOrLapTop = useMediaQuery({ query: '(min-width: 768px)' });

    // Modal
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [AllData, SetAllData] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}]);
    const [Query, setQuery] = useState(undefined);
    const [ListTech, setListTech] = useState(null);
    const [TechCount, setTechCount] = useState(undefined);
    const [sortCal, setSortCal] = useState("DESC");
    const [sortType, setSortType] = useState("Active");
    const [instructorId, SetInstructorId] = useState(null);
    const [levelId, SetLevelId] = useState(undefined);
    const [typeId, SetTypeId] = useState(undefined);
    // const [rating, SetRating] = useState(0);
    const [priceDown, setPriceDown] = useState(0);
    const [priceUp, setPriceUp] = useState(1000000);
    const [showGrid, setShowGrid] = useState(false);
    const filterObj_Courses = {
        SortingCol: sortType,
        SortType: sortCal,
        Query: Query,
        CostUp: priceUp,
        CostDown: priceDown,
        TechCount: TechCount,
        ListTech: ListTech,
        courseLevelId: levelId,
        CourseTypeId: typeId,
        TeacherId: instructorId,
        PageNumber: 1,
        RowsOfPage: 10000
    };
    console.log(filterObj_Courses)
    const GetCourses = () => {
        return GetAllCourseByPagination(filterObj_Courses)
    }
    // Query Object
    const { data: coursesData, refetch : refetchCourses, isLoading } = useQuery("GetCourses", GetCourses);
    const filterSide = <FilterSide_Courses
        setQuery={setQuery}
        setListTech={setListTech}
        SetTypeId={SetTypeId}
        SetLevelId={SetLevelId}
        setTeacherId={SetInstructorId}
        // SetRating={SetRating}
        setPriceDown={setPriceDown}
        setPriceUp={setPriceUp}
        setTechCount={setTechCount}
        refetch={refetchCourses}
    />
    // Paginate
    const currentCourse = isTabletOrMobile ? 6 : 12;
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + currentCourse;
    const currentItems = coursesData?.slice(itemOffset, endOffset);

    const [comparisonId, setComparisonId] = useState([])
    // Handling the course item before and after loading the data from the api
    const RenderCourse = () => {
        if (isLoading || isLoading === undefined) {
            return (
                AllData.map((item, index) => (
                    <Course key={index} isLoaded={isLoading} />
                ))
            )
        }
        else {
            return (
                currentItems.map((item, index) => (
                    <Course key={index}
                        isLoaded={isLoading}
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
                ))
            )
        }
    }
    return (
        <>
            <TitleSection title={'CoursesTitle'} >
                <BreadCrumb type="Div" text={'CoursesTitle'} />
            </TitleSection>
            <div className="main-container flex gap-7 relative">
                <MediaQuery minWidth={"1050px"}>
                    {filterSide}
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
                            {filterSide}
                        </CreateModal>
                    </MediaQuery>
                    <SectionTop
                        AllData={coursesData}
                        FilteredData={coursesData}
                        setShowGrid={setShowGrid}
                    >
                        <SortBoxHolder>
                            <SortBox setState={setSortType} options={sortOptionType} placeholder={["محبوبیت", "Popularity"]} />
                            <SortBox setState={setSortCal} options={sortOptionCal} placeholder={["نزولی", "Descending"]} />
                        </SortBoxHolder>
                    </SectionTop>
                    <PaginateHolderItems style="justify-center">
                        <PaginatedItems handlePageClick={(event) => { handlePageClick(event, currentCourse, setItemOffset, coursesData) }} pageCount={calculatePageCount(coursesData ?? [], currentCourse)}>
                            <div className={`flex flex-wrap relative gap-x-1 justify-around gap-y-5 w-full m-auto my-2 ${showGrid && isTabletOrLapTop ? "grid-list" : ""}`}>
                                {RenderCourse()}
                            </div>
                        </PaginatedItems>
                    </PaginateHolderItems>
                </div>
            </div>
        </>
    )
}
export default Courses