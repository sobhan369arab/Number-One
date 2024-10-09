import { PaginatedItems, PaginateHolderItems, CreateModal, SectionTop, SortBox, SortBoxHolder, RenderItemsList, ChangeView } from "../../components/common"
import MediaQuery, { useMediaQuery } from "react-responsive"
import { useEffect, useState } from "react"
import TitleSection from "../../components/partials/title-section/TitleSection"
import { useTranslation } from "react-i18next"
import Course from "../../components/pages/course/Course"
import { useDisclosure, Tooltip } from "@nextui-org/react"
import { CloseIcon } from "../../core/icon"
import { sortOptionCal, sortOptionType } from "../../core/constants/sorts/Sort";
import { FilterSide_Courses } from "../../components/pages/course-list"
import BreadCrumb from "../../components/partials/title-section/BreadCrumb"
import { useQuery } from "@tanstack/react-query"
import { GetAllCourseByPagination } from "../../core/services/api/GetData"
import { IoFilter } from "react-icons/io5"
import tooltipStyle from "../../core/constants/tooltip-style/tooltip"
import { useDispatch, useSelector } from "react-redux"
import { setPageNumber, setRowsOfPage, setSortCal, setSortType } from "../../redux/slices/filter-box-slices/FilterCourses"

const Courses = () => {
    const { t, i18n } = useTranslation();
    const filterObj_Courses = useSelector(state => state.FilterCourses)
    const Dispatch = useDispatch();

    // MediaQueries
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 640px)' });
    const isTabletOrLapTop = useMediaQuery({ query: '(min-width: 768px)' });

    // Modal
    const { isOpen, onOpen, onClose } = useDisclosure();

    // View
    const skeletonData = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
    const [showGrid, setShowGrid] = useState(false);

    // Paginate
    const currentCourse = isTabletOrMobile ? 6 : 12;
    useEffect(() => { Dispatch(setRowsOfPage(currentCourse)) }, [currentCourse])

    // Query Object
    const { data: coursesData, isSuccess, isError, isLoading, refetch } = useQuery({
        queryKey: ["GET_COURSES", filterObj_Courses],
        queryFn: async () => {
            return await GetAllCourseByPagination(filterObj_Courses);
        },
    });
    const { data: coursesLength, isSuccess: coursesLengthFinished } = useQuery({
        queryKey: ['GET_COURSES_LENGTH'],
        queryFn: GetAllCourseByPagination,
    })
    console.log(coursesData)
    return (
        <>
            <TitleSection title={'CoursesTitle'} >
                <BreadCrumb type="Div" text={'CoursesTitle'} />
            </TitleSection>
            <div className="main-container flex gap-7">
                <MediaQuery minWidth={"1050px"}><FilterSide_Courses /></MediaQuery>
                <div className="lg:w-[87%] sm:w-full mobile:w-full mx-auto">
                    <MediaQuery maxWidth={"1049px"}>
                        <Tooltip {...tooltipStyle} content={i18n.language == "en" ? "ّFilters" : "فیلتر ها"}>
                            <div onClick={onOpen} className="fixed right-5 bottom-40 bg-VioletBlue dark:bg-LavenderMist bottomNav z-30">
                                <IoFilter color="#fff" />
                            </div>
                        </Tooltip>
                        <CreateModal isOpen={isOpen} onClose={onClose} header={t('filters')} size="xl" headerStyle="flex flex-col gap-1 text-white">
                            <div onClick={onClose} className="closeButton_modal bg-neutral-200/65 top-2 left-2">
                                <CloseIcon />
                            </div>
                            <FilterSide_Courses />
                        </CreateModal>
                    </MediaQuery>
                    <SectionTop
                        lengthAllData={coursesLengthFinished && coursesLength.totalCount}
                        lengthFilteredData={isSuccess && coursesData.totalCount}
                        setShowGrid={setShowGrid}
                    >
                        <SortBoxHolder>
                            <SortBox setState={setSortType} options={sortOptionType} placeholder={["محبوبیت", "Popularity"]} />
                            <SortBox setState={setSortCal} options={sortOptionCal} placeholder={["نزولی", "Descending"]} />
                        </SortBoxHolder>
                        <ChangeView setShowGrid={setShowGrid} />
                    </SectionTop>
                    <PaginateHolderItems style="justify-center">
                        <PaginatedItems setPage={setPageNumber} currentData={isSuccess && coursesData?.totalCount} currentDataInOnePage={currentCourse}>
                            <div className={`flex flex-wrap relative gap-x-1 justify-around gap-y-5 w-full m-auto my-2 ${showGrid && isTabletOrLapTop ? "grid-list" : ""}`}>
                                <RenderItemsList
                                    RenderComponent={Course}
                                    isLoading={isLoading}
                                    isSuccess={isSuccess}
                                    isError={isError}
                                    originalData={isSuccess && coursesData?.courseFilterDtos}
                                    skeletonData={skeletonData}
                                    notFoundText={'course_NotFound'}
                                    refetchData={refetch}
                                />
                            </div>
                        </PaginatedItems>
                    </PaginateHolderItems>
                </div>
            </div>
        </>
    )
}
export default Courses