import { Link } from "react-router-dom"
import ComparisonBtn from "../../common/ComparisonBtn"
import { FavoriteBtn } from "../../common"
import CourseCenterBody from "./CourseCenterBody"
import CourseDownBody from "./CourseDownBody"
import CourseTopBody from "./CourseTopBody"
import { Card, Skeleton } from "@nextui-org/react";

const Course = ({
    isLoaded,
    id,
    title,
    images,
    instructor,
    score,
    category,
    level,
    price,
    date,
    studentsNumber,
    like,
    disLike,
    bio,
    comparisonId,
    setComparisonId

}) => {
    // const Props = JSON.parse(props)
    return (
        <>
            <Card>
                <div className="border border-LightGrayish p-4 pb-3 grid-item w-[300px] h-[435px] rounded-lg hover:shadow-lg duration-200 relative  group/item">
                    <div className="w-full h-44 course-height-img mx-auto  rounded-lg">
                        {/* course Images */}
                        <Link to={`/CourseDetails/${id}`}>
                            <Skeleton isLoaded={!isLoaded} className="h-44">
                                <img src={images} className="w-full h-44 shadow-xl rounded-md" />
                            </Skeleton>
                        </Link >

                        <div className="flex justify-center gap-8 my-3">
                            <Skeleton isLoaded={!isLoaded} className="top-6 right-6">
                                <ComparisonBtn CourseId={id} comparisonId={comparisonId && comparisonId} setComparisonId={setComparisonId && setComparisonId} />
                            </Skeleton>
                            <Skeleton isLoaded={!isLoaded} className="top-6 left-6">
                                <FavoriteBtn variantStyle="card" />
                            </Skeleton>
                        </div>
                    </div>
                    <div to={`/CourseDetails/${id}`} className="py-2 course-body w-full ">
                        <Link to={`/CourseDetails/${id}`}>
                            <CourseTopBody
                                title={title}
                                score={score}
                                category={category}
                                bio={bio}
                                isLoaded={isLoaded}
                            />
                        </Link >
                        <CourseCenterBody
                            instructor={instructor}
                            studentsNumber={studentsNumber}
                            level={level}
                            like={like}
                            disLike={disLike}
                            isLoaded={isLoaded}
                        />
                        <CourseDownBody
                            price={price}
                            date={date}
                            isLoaded={isLoaded}
                        />
                    </div >
                </div>
            </Card>
            {/* <Button size="sm" color="secondary" onPress={toggleLoad}>
                {isLoaded ? "Show" : "Hide"} Skeleton
            </Button> */}
        </>
    )
}

export default Course