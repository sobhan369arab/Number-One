import { BiDislike, BiLike, BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { useSelector } from "react-redux";
import { AddCourseCommentLike, AddCourseDisLike, AddCourseLike, CourseCommentDisLike } from "../../core/services/api/PostData";
import { DeleteCourseCommentLike, DeleteCourseLike } from "../../core/services/api/DeleteData";

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

    // Variants
    const ApiVariant = {
        'course': [AddCourseLike, AddCourseDisLike, DeleteCourseLike],
        'courseComment': [AddCourseCommentLike, CourseCommentDisLike, DeleteCourseCommentLike]
    }
    const statusVariant = {
        'course': { like: LikeStatus == false, disLike: DissLikeStatus == false },
        'courseComment': { like: LikeStatus !== "LIKED", disLike: LikeStatus !== "DISSLIKED" }
    }

    // like & disLike function
    const handleToLike = (id,api, status, Delete, btnStatus) => {
        if (!UserInfo) {
            alert('لطفا لاگین کنید')
        }
        else {
            if (variant === 'courseComment') {
                if (status === '-' || status !== btnStatus) {
                    api(id, refetch);
                }
                else {
                    Delete(userLikeId, refetch);
                }
            }
            else {
                if (status) {
                    Delete(userLikeId, refetch)
                }
                else {
                    api(id, refetch);
                }
            }
        }
    }
    return (
        <div className="flex gap-1.5">
            <div onClick={() => handleToLike(Id, ApiVariant?.[variant][0],
                LikeStatus, ApiVariant?.[variant][2], "LIKED")} className="px-2 py-0.5 bg-LightLavender mediumStyle_text flex gap-0.5 items-center rounded-2xl cursor-pointer">
                {statusVariant?.[variant]?.like ? <BiLike /> : <BiSolidLike />}
                <span className={numberStatus}>{likeNumber}</span>
            </div>
            <div onClick={() => handleToLike(Id, ApiVariant?.[variant][1],
                variant == 'courseComment' ? LikeStatus : DissLikeStatus, ApiVariant?.[variant][2], "DISSLIKED")} className="px-2 py-0.5 bg-LightLavender mediumStyle_text flex gap-0.5 items-center rounded-2xl cursor-pointer">
                {statusVariant?.[variant]?.disLike ? <BiDislike /> : <BiSolidDislike />}
                <span className={numberStatus}>{disLikeNumber}</span>
            </div>
        </div>
    )
}
export default ToLike