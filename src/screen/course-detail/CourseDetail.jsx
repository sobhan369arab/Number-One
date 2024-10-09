import { useParams } from "react-router-dom"
import TitleSection from "../../components/partials/title-section/TitleSection";
import { DetailsBox, Title_details } from "../../components/common";
import { LevelIcon, MenuIcon, QuizzesIcon, TimeIcon, TopicsIcon, TotalIcon } from "../../core/icon";
import { TabPanel } from "../../components/pages/course-detail";
import MediaQuery from "react-responsive";
import BreadCrumb from "../../components/partials/title-section/BreadCrumb";
import { useQuery } from "@tanstack/react-query";
import { GetCourseDetails } from "../../core/services/api/GetData";
import NotFoundImg from "../../assets/images/image-not-found.png"



const CourseDetail = () => {
    const { id } = useParams();
    console.log(id)
    const { data: courseDetails, isSuccess } = useQuery({
        queryKey: 'GET_COURSE_DETAILS',
        queryFn: async () => {
            return await GetCourseDetails(id);
        }
    })
    // if (isSuccess) {
    console.log(courseDetails)
    // }

    const {
        title,
        imageAddress,
        courseLevelName,
        startTime,
        endTime,
        capacity,
        currentRegistrants,
        courseStatusName,
        teacherName,
        currentRate,
        techs,
        cost,
        describe,
        miniDescribe,
    } = isSuccess && courseDetails

    if (isSuccess) {
        console.log(miniDescribe)
    }

    const DetailsCourse = [
        { titleDetail: "level", countDetail: courseLevelName, iconDetail: LevelIcon },
        { titleDetail: "duration", countDetail: startTime, iconDetail: TimeIcon },
        { titleDetail: "lessons", countDetail: endTime, iconDetail: TopicsIcon },
        { titleDetail: "EventQuizzes", countDetail: capacity, iconDetail: QuizzesIcon },
        { titleDetail: "graduation", countDetail: currentRegistrants, iconDetail: TotalIcon },
        { titleDetail: "type", countDetail: courseStatusName, iconDetail: MenuIcon }
    ]

    const handleImg = () => {
        if (imageAddress == null || imageAddress === 'testimg') return NotFoundImg
        else return imageAddress
    }

    return (
        <>
            <TitleSection title={title}>
                <BreadCrumb href={'/courses'} text={'CoursesTitle'} />
                <BreadCrumb type="Div" text={title} />
            </TitleSection>
            <div className="main-container lg:flex lg: flex-row-reverse gap-9">
                <div className="w-full">
                    <img src={handleImg()} alt="course-img" className='w-full h-96 rounded-xl' />
                    <Title_details
                        title={title}
                        creator={teacherName}
                        NumberStudents={currentRegistrants}
                        Score={currentRate}
                        category={techs}
                        differentDetail={startTime}
                        variant={"course-detail"}
                    />
                    <MediaQuery maxWidth={'1024px'}>
                        <DetailsBox
                            variant="course-detail"
                            price={cost}
                            Detail={DetailsCourse}
                            arrowColor={"#000"}
                            colorButton={"yellow"}
                            btnText={"signUpCourse"}
                            detailInfo={"CourseInfo"}
                            priceInfo={"CoursePrice"}
                        />
                    </MediaQuery>
                    <TabPanel
                        overView={describe}
                        training={miniDescribe}
                        MajorElements={["", "", "", ""]}
                    />
                </div>
                <MediaQuery minWidth={'1024px'}>
                    <DetailsBox
                        variant="course-detail"
                        price={cost}
                        Detail={DetailsCourse}
                        arrowColor={"#000"}
                        colorButton={"yellow"}
                        btnText={"signUpCourse"}
                    />
                </MediaQuery>
            </div>

        </>
    )
    // }
}

export default CourseDetail