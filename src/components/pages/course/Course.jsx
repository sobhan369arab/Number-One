import { Link } from "react-router-dom"
import ComparisonBtn from "../../common/ComparisonBtn"
import { FavoriteBtn } from "../../common"
import CourseCenterBody from "./CourseCenterBody"
import CourseDownBody from "./CourseDownBody"
import CourseTopBody from "./CourseTopBody"
import { Card, Skeleton, Button } from "@nextui-org/react";
import { useState } from "react"

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
    const [isLoaded, setIsLoaded] = useState(true);

    const toggleLoad = () => {
        setIsLoaded(!isLoaded);
    };

    return (
        <>
            <Card className="w-[300px] h-[435px]">
                <div className="border border-LightGrayish p-4 pb-3 grid-item w-[300px] h-[435px] rounded-lg hover:shadow-lg duration-200 relative  group/item">
                    <div className="w-full h-44 course-height-img mx-auto  rounded-lg">
                        {/* course Images */}
                        <Link to={`/CourseDetails/${id}`}>
                            <Skeleton isLoaded={isLoaded}>
                                <img src={images && images} className="w-full h-44 shadow-xl rounded-md" />
                            </Skeleton>
                        </Link >

                        <div className="flex justify-center gap-8 my-3">
                            <Skeleton isLoaded={isLoaded}>
                                <ComparisonBtn location={location} CourseId={id} comparisonId={comparisonId} setComparisonId={setComparisonId} />
                            </Skeleton>
                            <Skeleton isLoaded={isLoaded}>
                                <FavoriteBtn location={location} variantStyle="card" />
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