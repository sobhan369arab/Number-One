import { Link } from "react-router-dom"
import ComparisonBtn from "../../common/ComparisonBtn"
import { FavoriteBtn } from "../../common"
import CourseCenterBody from "./CourseCenterBody"
import CourseDownBody from "./CourseDownBody"
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
        <div className="border border-LightGrayish p-4 pb-3 grid-item w-[300px] rounded-lg hover:shadow-lg duration-200 relative  group/item">
            <div className="w-full h-44 course-height-img mx-auto  rounded-lg">
                {/* course Images */}
                <Link to={`/CourseDetails/${id}`}>
                    <img src={images} className="w-full h-44 shadow-xl rounded-md" />
                </Link >

                <div className="flex justify-center gap-8 my-3">
                    <ComparisonBtn location={location} CourseId={id} comparisonId={comparisonId} setComparisonId={setComparisonId} />
                    <FavoriteBtn location={location} variantStyle="card" />
                </div>
            </div>
            <div to={`/CourseDetails/${id}`} className="py-2 course-body w-full ">
                <Link to={`/CourseDetails/${id}`}>
                    <CourseTopBody
                        title={title}
                        score={score}
                        category={category}
                        bio={bio}
                    />
                </Link >
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
            </div >
        </div>
    )
}

export default Course