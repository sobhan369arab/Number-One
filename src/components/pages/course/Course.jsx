import { useLocation } from "react-router-dom"
import { ComparisonIcon } from "../../../core/icon"
import ComparisonBtn from "../../common/ComparisonBtn"
import FavoriteBtn from "../../common/FavoriteBtn"
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

}) => {

    return (
        <div className="border border-grayBorder p-4 pb-3 course-item w-[290px] rounded-lg hover:shadow-lg duration-200 relative cursor-pointer">
            <div className="bg-slate-300 h-44 w-64">
                <CourseHeader images={images} />
                <div className="flex justify-center gap-8 my-3">
                    <ComparisonBtn location={location} />
                    <FavoriteBtn location={location} />
                </div>
            </div>
            <div className="py-2 course-body">
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
            </div>
        </div>
    )
}

export default Course