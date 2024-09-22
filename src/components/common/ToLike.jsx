import { useState } from "react"
import { BiDislike, BiLike, BiSolidDislike, BiSolidLike } from "react-icons/bi";

const ToLike = ({
    likeNumber,
    disLikeNumber,
    numberStatus,
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
        <div className="flex gap-1.5">
            <div onClick={() => handleLike()} className="px-2 py-0.5 bg-LightLavender mediumStyle_text flex gap-0.5 items-center rounded-2xl cursor-pointer">
                {like == false ? <BiLike /> : <BiSolidLike />}
                <span className={numberStatus}>{LikeCount}</span>
            </div>
            <div onClick={() => handleDisLike()} className="px-2 py-0.5 bg-LightLavender mediumStyle_text flex gap-0.5 items-center rounded-2xl cursor-pointer">
                {disLike == false ? <BiDislike /> : <BiSolidDislike />}
                <span className={numberStatus}>{dislikeCount}</span>
            </div>
        </div>
    )
}

export default ToLike