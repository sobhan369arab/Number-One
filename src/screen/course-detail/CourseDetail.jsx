import { useParams } from "react-router-dom"
import { CoursesDataFa } from "../../core/constants/Courses/courses-data_Fa";
import TitleSection from "../../components/partials/title-section/TitleSection";
import { DetailsBox } from "../../components/common";
import { CertificationsIcon, LevelIcon, QuizzesIcon, TimeIcon, TopicsIcon, TotalIcon } from "../../core/icon";

const CourseDetail = () => {
    const { id } = useParams();
    // Find the details of the selected course
    let courseSelected = CoursesDataFa.find(course => course.id == id);
    const DetailsCourse = [
        { titleDetail: "level", countDetail: courseSelected.level, iconDetail: LevelIcon },
        { titleDetail: "duration", countDetail: courseSelected.duration, iconDetail: TimeIcon},
        { titleDetail: "lessons", countDetail: courseSelected.lessons, iconDetail: TopicsIcon},
        { titleDetail: "EventQuizzes", countDetail: courseSelected.quizzes, iconDetail: QuizzesIcon},
        { titleDetail: "EventCertifications", countDetail: courseSelected.certifications, iconDetail: CertificationsIcon },
        { titleDetail: "graduation", countDetail: courseSelected.graduation, iconDetail: TotalIcon},
        { titleDetail: "type", countDetail: courseSelected.type, iconDetail: TotalIcon}
    ]

    return (
        <>
            <TitleSection title={courseSelected.title} />
            <div className="main-container">
                <DetailsBox
                    variant="course-detail"
                    price={courseSelected.price}
                    Detail={DetailsCourse}
                />
                <div></div>
            </div>

        </>
    )
}

export default CourseDetail