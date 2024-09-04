import { useParams } from "react-router-dom"
import { CoursesDataFa } from "../../core/constants/Courses/courses-data_Fa";
import TitleSection from "../../components/partials/title-section/TitleSection";

const CourseDetail = () => {
    const { id } = useParams();
    // Find the details of the selected course
    const courseSelected = CoursesDataFa.find(course => course.id == id);

    return (
        <>
        <TitleSection title={courseSelected.title}/>

        </>
    )
}

export default CourseDetail