import { useState } from "react"
import { DisLikeIcon, LikeIcon } from "../../core/icon";

const ToLike = ({
    likeNumber,
    disLikeNumber
}) => {

    const [like, setLike] = useState(false);
    const [disLike, setDisLike] = useState(false);
    const [LikeCount, setLikeCount] = useState(likeNumber);
    const [dislikeCount, setDisLikeCount] = useState(disLikeNumber);
    // console.log(like)


    const balance = () => {
        setLike(!like)
        if (like === false) {
            setLikeCount(LikeCount + 1)
        }
        else {
            setLikeCount(LikeCount - 1)
        }

    }

    return (
        <>
            <div onClick={() => balance()} className="px-2 py-0.5 bg-gray-200 flex items-center rounded-2xl">
                <LikeIcon fill={`${like == false ? "none" : "black"}`} />
                <span>{LikeCount}</span>
            </div>
            <div onClick={() => setDisLike(!like)} className="px-2 py-0.5 bg-gray-200 flex items-center rounded-2xl">
                <DisLikeIcon />
                <span>{dislikeCount}</span>
            </div>
        </>
    )
}

export default ToLike