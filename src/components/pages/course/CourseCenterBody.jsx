import { Skeleton } from "@nextui-org/react"
import { LevelIcon, StudentIcon, TeacherIcon } from "../../../core/icon"
import ToLike from "../../common/ToLike"

const CourseCenterBody = ({
    instructor,
    studentsNumber,
    level,
    like,
    disLike,
    isLoaded
}) => {

    const Data = [
        { icon: <StudentIcon stroke={"gray"} />, title: studentsNumber ?? "" },
        { icon: <LevelIcon stroke={"gray"} />, title: level ?? "", justify: "justify-end" },
        { icon: <TeacherIcon stroke={"gray"} />, title: instructor ?? "" },
    ]

    return (
        <div className="grid grid-cols-2 course-centerBody gap-y-5 place-content-between justify-between">
            {Data.map((item, index) => (
                <div key={index} className="course-flexBody">
                    <Skeleton isLoaded={!isLoaded}>
                        <div className={`flex items-center gap-1 ${item.justify}`}>
                            {item.icon}
                            <p className="line-clamp-1 text-gray-500">{item.title}</p>
                        </div>
                    </Skeleton>
                </div>
            ))}
            <div className="flex items-center gap-1 justify-end">
                <Skeleton isLoaded={!isLoaded}>
                    <ToLike
                        likeNumber={like && like}
                        disLikeNumber={disLike && disLike}
                    />
                </Skeleton>
            </div>
        </div>
    )
}

export default CourseCenterBody