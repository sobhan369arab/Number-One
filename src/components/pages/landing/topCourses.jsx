import { useTranslation } from "react-i18next"
import { Label, SwiperSlider } from "../../common"
import Tab from "./tab"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import Course from "../course/Course"
import { SwiperSlide } from "swiper/react"
import { GetAllCourseByPagination, GetTechnologies } from "../../../core/services/api/GetData"
import { useQuery } from "@tanstack/react-query"

const TopCourses = () => {
    const { t, i18n } = useTranslation()
    const theme = useSelector(state => state.DarkMode)
    const [tabValue, setTabValue] = useState(2)

    const Breakpoints = {
        1024: { spaceBetween: 20, slidesPerView: 4 },
        680: { spaceBetween: 20, slidesPerView: 2 },
        300: { spaceBetween: 20, slidesPerView: 1 },
    }

    const { data: tabs, isSuccess: tabIsSuccess } = useQuery({
        queryKey: ['GET_TABS'],
        queryFn: GetTechnologies
    })

    const { data: Courses, isSuccess, isLoading, refetch } = useQuery({
        queryKey: ['GET_COURSES', tabValue],
        queryFn: () => { return GetAllCourseByPagination({ TechCount: 1, ListTech: tabValue }) }
    })
    // if (isSuccess) {
    const CourseReturn = () => {
        if (isLoading) {
            return (
                skeletonData.map((item, index) => {
                    <SwiperSlide key={index}>
                        <Course key={index} item={item} isLoading={isLoading} />
                    </SwiperSlide>
                })
            )
        }
        else if (isSuccess) {
            return courseData?.courseFilterDtos.map((item, index) => {
                <SwiperSlide key={index}>
                    <Course key={index} item={item} isLoading={isLoading} />
                </SwiperSlide>
            })
        }
    }
    // }

    // const getCourseList = async () => {

    //     const courseData = await GetAllCourseByPagination(apiParams)
    //     setCourseList(courseData.courseFilterDtos)
    // }

    // useEffect(() => {
    //     getCourseList()
    // }, [tabValue])

    // const [comparisonId, setComparisonId] = useState([])

    return (
        <div className={`w-full py-28 lg:px-44 sm:px-16 px-8 flex flex-wrap gap-y-4 justify-center ${theme ? "bg-gradientBackgroundDark" : "bg-gradientBackground"} bg-cover bg-center bg-no-repeat`}>
            <Label text={t("topCoursesLabel")} variant="bgGray" />
            <h1 className="boldStyle_text w-full text-center">{t("topCoursesTitle")}</h1>
            <p className="mediumStyle_text w-full text-center">{t("topCoursesDescription")}</p>
            <div className="mobile:w-full sm:w-auto flex mobile:justify-evenly justify-center relative mobile:px-0 sm:px-20 mt-10">
                {tabIsSuccess && tabs.map(obj => <Tab key={obj.id} setTabValue={setTabValue} value={obj.id} name="landing" title={obj.techName} />)}
                <span className="w-full h-1 bg-LightGrayish rounded-full bottom-0 absolute"></span>
            </div>
            <div className="max-[680px]:w-[300px] w-[110%] mt-5 relative">
                {CourseReturn && CourseReturn}
                <SwiperSlider
                    perView={4}
                    Breakpoints={Breakpoints}
                    arrowColor="#fff"
                    buttonSideLeft="top-[190px] xl:-left-[60px] sm:left-[20px] hidden sm:flex h-12 z-30 w-12"
                    buttonSideRight="top-[190px] xl:-right-[60px] sm:right-[20px] hidden sm:flex h-12 z-30 w-12"
                    buttonColor="bg-VioletBlue"
                >
                    {isSuccess && Courses.courseFilterDtos.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Course item={item} isLoading={isLoading} refetch={refetch} />
                        </SwiperSlide>
                    ))}
                </SwiperSlider>
            </div>
        </div>
    )
}

export default TopCourses
