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
    disLike

}) => {
    return (
        <div className="border border-grayBorder p-4 pb-3 w-[288px] rounded-lg hover:shadow-lg duration-200 relative cursor-pointer">
            <ComparisonBtn/>
            <FavoriteBtn/>
            <CourseHeader images={images} />
            <div className="py-2 ">
                <CourseTopBody
                    title={title}
                    score={score}
                    category={category}
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