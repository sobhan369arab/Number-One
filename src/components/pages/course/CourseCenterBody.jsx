import { useState } from "react";
import { LevelIcon, StudentIcon, TeacherIcon } from "../../../core/icon"
import ToLike from "../../common/ToLike"

const CourseCenterBody = ({
    instructor,
    studentsNumber,
    level,
    like,
    disLike
}) => {

    const Data = [
        { icon: <StudentIcon stroke={"gray"}/>, title: studentsNumber },
        { icon: <LevelIcon stroke={"gray"}/>, title: level, justify: "justify-end" },
        { icon: <TeacherIcon stroke={"gray"}/>, title: instructor },
    ]

    return (
        <div className="grid grid-cols-2 gap-y-5 place-content-between">
            {Data.map((item, index) => (
                <div key={index} className={`flex items-center gap-1 ${item.justify}`}>
                    {item.icon }
                    <h1 className="line-clamp-1  text-gray-500">{item.title}</h1>
                </div>
            ))}
            <div className="flex items-center gap-1 justify-end">
                <ToLike
                    likeNumber={like}
                    disLikeNumber={disLike}
                />
            </div>
        </div>
    )
}

export default CourseCenterBody