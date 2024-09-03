import { useState } from "react";
import { HeartIcon } from "../../core/icon";
import { useMediaQuery } from "react-responsive";

const FavoriteBtn = () => {
    const isTabletOrLapTop = useMediaQuery({ query: '(min-width: 768px)' })
    const [isClick, setClick] = useState(false);
    return (
        <div onClick={() => setClick(!isClick)} className={`${location.search === '?V=2' && isTabletOrLapTop ? "" : "absolute"}  left-5 top-5 favorite-btn bg-white rounded-md`}>
            <HeartIcon fill={isClick ? "red" : "#ccc"} className={"duration-500"} />
        </div>
    )
}

export default FavoriteBtn