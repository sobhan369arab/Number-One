import { useParams } from "react-router-dom"
import { CoursesDataFa } from "../../core/constants/Courses/courses-data_Fa";
import TitleSection from "../../components/partials/title-section/TitleSection";
import { DetailsBox, Title_details } from "../../components/common";
import { CertificationsIcon, LevelIcon, MenuIcon, QuizzesIcon, TimeIcon, TopicsIcon, TotalIcon } from "../../core/icon";
import { CoursePic, TabPanel } from "../../components/pages/course-detail";
import MediaQuery from "react-responsive";

const CourseDetail = () => {
    const { id } = useParams();
    // Find the details of the selected course
    let courseSelected = CoursesDataFa.find(course => course.id == id);
    const DetailsCourse = [
        { titleDetail: "level", countDetail: courseSelected.level, iconDetail: LevelIcon },
        { titleDetail: "duration", countDetail: courseSelected.duration, iconDetail: TimeIcon },
        { titleDetail: "lessons", countDetail: courseSelected.lessons, iconDetail: TopicsIcon },
        { titleDetail: "EventQuizzes", countDetail: courseSelected.quizzes, iconDetail: QuizzesIcon },
        { titleDetail: "EventCertifications", countDetail: courseSelected.certifications, iconDetail: CertificationsIcon },
        { titleDetail: "graduation", countDetail: courseSelected.graduation, iconDetail: TotalIcon },
        { titleDetail: "type", countDetail: courseSelected.type, iconDetail: MenuIcon }
    ]

    return (
        <>
            <TitleSection title={courseSelected.title} />
            <div className="main-container lg:flex lg: flex-row-reverse gap-9">
                <div className="w-full">
                    <CoursePic image={courseSelected.img} />
                    <Title_details
                        title={courseSelected.title}
                        creator={courseSelected.instructor}
                        NumberStudents={courseSelected.students}
                        Score={courseSelected.score}
                        category={courseSelected.category}
                        differentDetail={courseSelected.date}
                        variant={"course-detail"}
                    />
                    <MediaQuery maxWidth={'1024px'}>
                        <DetailsBox
                            variant="course-detail"
                            price={courseSelected.price}
                            Detail={DetailsCourse}
                            arrowColor={"#000"}
                            colorButton={"yellow"}
                            btnText={"signUpCourse"}
                            detailInfo={"CourseInfo"}
                            priceInfo={"CoursePrice"}
                        />
                    </MediaQuery>
                    <TabPanel
                        overView={courseSelected.overView}
                        training={courseSelected.training}
                        MajorElements={courseSelected.MajorElements}
                    />
                </div>
                <MediaQuery minWidth={'1024px'}>
                    <DetailsBox
                        variant="course-detail"
                        price={courseSelected.price}
                        Detail={DetailsCourse}
                        arrowColor={"#000"}
                        colorButton={"yellow"}
                        btnText={"signUpCourse"}
                    />
                </MediaQuery>
            </div>

        </>
    )
}

export default CourseDetail