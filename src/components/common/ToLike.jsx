import { useEffect, useState } from "react"
import { BiDislike, BiLike, BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { useSelector } from "react-redux";
import { AddCourseDisLike, AddCourseLike } from "../../core/services/api/PostData";
import { DeleteCourseLike } from "../../core/services/api/DeleteData";

const ApiVariant = {
    'course': [AddCourseLike, AddCourseDisLike, DeleteCourseLike]
}

const ToLike = ({
    userLikeId,
    likeNumber,
    disLikeNumber,
    LikeStatus,
    DissLikeStatus,
    numberStatus,
    Id,
    variant,
    refetch,
}) => {
    const UserInfo = useSelector(state => state.UserInfo.info)

    // like & disLike function
    const handleToLike = (courseId, userLikeId, api, status, Delete) => {
        if (!UserInfo) {
            alert('لطفا لاگین کنید')
        }
        else {
            if (status) {
                Delete(userLikeId, refetch)
            }
            else {
                api(courseId, refetch);
            }
        }
    }
    return (
        <div className="flex gap-1.5">
            <div onClick={() => handleToLike(Id, userLikeId, ApiVariant?.[variant][0], LikeStatus, ApiVariant?.[variant][2])} className="px-2 py-0.5 bg-LightLavender mediumStyle_text flex gap-0.5 items-center rounded-2xl cursor-pointer">
                {LikeStatus == false ? <BiLike /> : <BiSolidLike />}
                <span className={numberStatus}>{likeNumber}</span>
            </div>
            <div onClick={() => handleToLike(Id, userLikeId, ApiVariant?.[variant][1], DissLikeStatus, ApiVariant?.[variant][2])} className="px-2 py-0.5 bg-LightLavender mediumStyle_text flex gap-0.5 items-center rounded-2xl cursor-pointer">
                {DissLikeStatus == false ? <BiDislike /> : <BiSolidDislike />}
                <span className={numberStatus}>{disLikeNumber}</span>
            </div>
        </div>
    )
}
export default ToLike