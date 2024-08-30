import { useState } from "react"
import { BiDislike, BiLike, BiSolidDislike, BiSolidLike } from "react-icons/bi";
// import { DisLikeIcon, LikeIcon } from "../../core/icon";

const ToLike = ({
    likeNumber,
    disLikeNumber
}) => {

    const [like, setLike] = useState(false);
    const [disLike, setDisLike] = useState(false);
    const [LikeCount, setLikeCount] = useState(likeNumber);
    const [dislikeCount, setDisLikeCount] = useState(disLikeNumber);


    const handleLike = () => {
        setLike(!like);
        if (like === false) {
            setLikeCount(LikeCount + 1)
            if (disLike === true) {
                setDisLikeCount(dislikeCount - 1)
                setDisLike(false)
            }
        }
        else {
            setLikeCount(LikeCount - 1)
        }
    }
    const handleDisLike = () => {
        setDisLike(!disLike);
        if (disLike === false) {
            setDisLikeCount(dislikeCount + 1)
            if (like === true) {
                setLikeCount(LikeCount - 1)
                setLike(false)
            }
        }
        else {
            setDisLikeCount(dislikeCount - 1)
        }
    }
    return (
        <>
            <div onClick={() => handleLike()} className="px-2 py-0.5 bg-grayCustom flex gap-0.5 items-center rounded-2xl">
                {like == false ? <BiLike/> : <BiSolidLike />}
                <span>{LikeCount}</span>
            </div>
            <div onClick={() => handleDisLike()} className="px-2 py-0.5 bg-grayCustom flex  gap-0.5 items-center rounded-2xl">
                {disLike == false ? <BiDislike /> : <BiSolidDislike />}
                <span>{dislikeCount}</span>
            </div>
        </>
    )
}

export default ToLike