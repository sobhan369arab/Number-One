import { Link } from "react-router-dom"
import ComparisonBtn from "../../common/ComparisonBtn"
import { FavoriteBtn } from "../../common"
import CourseCenterBody from "./CourseCenterBody"
import CourseDownBody from "./CourseDownBody"
import CourseTopBody from "./CourseTopBody"
import {Skeleton } from "@nextui-org/react";
import { useState } from "react"

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
    return (
        <>
            <div className="border border-LightGrayish p-4 pb-3 grid-item w-[300px] h-[435px] rounded-lg hover:shadow-lg duration-200 relative  group/item">
                <div className="w-full h-44 course-height-img mx-auto  rounded-lg">
                    {/* course Images */}
                    <Link to={`/CourseDetails/${id}`}>
                        <Skeleton isLoaded={!isLoaded} className="h-44 rounded-lg">
                            <img src={images} className="w-full h-44 shadow-xl rounded-md" />
                        </Skeleton>
                    </Link >

                    <div className="flex justify-center gap-8 my-3">
                        <ComparisonBtn isLoading={isLoaded} CourseId={id} comparisonId={comparisonId && comparisonId} setComparisonId={setComparisonId && setComparisonId} />
                        <FavoriteBtn isLoading={isLoaded} variantStyle="card" />
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
        </>
    )
}

export default Course