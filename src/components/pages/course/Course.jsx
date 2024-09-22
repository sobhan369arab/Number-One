import { Link } from "react-router-dom"
import ComparisonBtn from "../../common/ComparisonBtn"
import { FavoriteBtn } from "../../common"
import CourseCenterBody from "./CourseCenterBody"
import CourseDownBody from "./CourseDownBody"
import CourseHeader from "./CourseHeader"
import CourseTopBody from "./CourseTopBody"

const Course = ({
    id,
    title,
    images,
    instructor,
    score,
    category,
    level,
    date,
    studentsNumber,
    price,
    like,
    disLike,
    bio,
    comparisonId,
    setComparisonId

}) => {

    return (
        <div className="border border-LightGrayish p-4 pb-3 grid-item w-[290px] rounded-lg hover:shadow-lg duration-200 relative cursor-pointer">
            <div className="h-44 min-w-64 rounded-lg med_box-shadow">
                <CourseHeader images={images} />
                <div className="flex justify-center gap-8 my-3">
                    <ComparisonBtn location={location} CourseId={id} comparisonId={comparisonId} setComparisonId={setComparisonId} />
                    <FavoriteBtn location={location} variantStyle="card" />
                </div>
            </div>
            <Link to={`/CourseDetails/${id}`} className="py-2 course-body w-full ">
                <CourseTopBody
                    title={title}
                    score={score}
                    category={category}
                    bio={bio}
                />
                <CourseCenterBody
                    instructor={instructor}
                    studentsNumber={studentsNumber}
                    level={level}
                    like={like}
                    disLike={disLike}
                />
                <CourseDownBody
                    price={price}
                    date={date}
                />
            </Link >
        </div>
    )
}

export default Course