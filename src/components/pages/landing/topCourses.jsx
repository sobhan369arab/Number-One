import { useTranslation } from "react-i18next"
import { Label, SwiperSlider } from "../../common"
import Tab from "./tab"
import { tabOptions } from "../../../core/constants/landing/TopCoursesTab"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { GetAllCourseByPagination, GetTechnologies } from "../../../core/services/api/Courses"
import Course from "../course/Course"
import { useLocation } from "react-router-dom"
import { SwiperSlide } from "swiper/react"

const TopCourses = () => {
    const { t, i18n } = useTranslation()
    const [tabs, setTabs] = useState([])
    const [courseList, setCourseList] = useState([])
    const theme = useSelector(state => state.DarkMode)
    const [tabValue, setTabValue] = useState(2)

    const Breakpoints = {
        1024: { spaceBetween: 20, slidesPerView: 4 },
        680: { spaceBetween: 20, slidesPerView: 2 },
        300: { spaceBetween: 20, slidesPerView: 1 },
    }

    const getTabs = async () => {
        setTabs(await GetTechnologies())
    }

    useEffect(() => { getTabs() }, [])

    const getCourseList = async () => {
        const apiParams = { TechCount: 1, ListTech: tabValue }

        const courseData = await GetAllCourseByPagination(apiParams)
        setCourseList(courseData.courseFilterDtos)
    }

    useEffect(() => {
        getCourseList()
    }, [tabValue])

    const [comparisonId, setComparisonId] = useState([])



    return (
        <div className={`w-full py-28 lg:px-44 sm:px-16 px-8 flex flex-wrap gap-y-4 justify-center ${theme ? "bg-gradientBackgroundDark" : "bg-gradientBackground"} bg-cover bg-center bg-no-repeat`}>
            <Label text={t("topCoursesLabel")} variant="bgGray" />
            <h1 className="boldStyle_text w-full text-center">{t("topCoursesTitle")}</h1>
            <p className="mediumStyle_text w-full text-center">{t("topCoursesDescription")}</p>
            <div className="mobile:w-full sm:w-auto flex mobile:justify-evenly justify-center relative mobile:px-0 sm:px-20 mt-10">
                {tabs.map(obj => <Tab key={obj.id} setTabValue={setTabValue} value={obj.id} name="landing" title={obj.techName} />)}
                <span className="w-full h-1 bg-LightGrayish rounded-full bottom-0 absolute"></span>
            </div>
            <div className="max-[680px]:w-[300px] w-[110%] mt-5 relative">
                <SwiperSlider
                    perView={4}
                    Breakpoints={Breakpoints}
                    arrowColor="#fff"
                    buttonSideLeft="top-[190px] xl:-left-[60px] sm:left-[20px] hidden sm:flex h-12 z-30 w-12"
                    buttonSideRight="top-[190px] xl:-right-[60px] sm:right-[20px] hidden sm:flex h-12 z-30 w-12"
                    buttonColor="bg-VioletBlue"
                >
                    {courseList.length > 0 && courseList.map((item, index) => (
                        <SwiperSlide key={index}>
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
                        </SwiperSlide>
                    ))}
                </SwiperSlider>
            </div>
        </div>
    )
}

export default TopCourses
