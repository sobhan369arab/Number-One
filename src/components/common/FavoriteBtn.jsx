import { useState } from "react";
import { HeartIcon } from "../../core/icon";

const FavoriteBtn = () => {
    const [isClick, setClick] = useState(false);
    return (
        <div onClick={() => setClick(!isClick)} className={`${location.search === '?V=1'? "absolute":""}  left-5 top-5 favorite-btn bg-white rounded-md`}>
            <HeartIcon fill={isClick ? "red" : "#ccc"} className={"duration-500"} />
        </div>
    )
}

export default FavoriteBtn