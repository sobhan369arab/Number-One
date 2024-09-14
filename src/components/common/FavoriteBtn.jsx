import { useState } from "react";
import { UnCheckedHeartIcon, CheckedHeartIcon } from "../../core/icon";
import { useMediaQuery } from "react-responsive";

const FavoriteBtn = ({variantStyle}) => {
    const isTabletOrLapTop = useMediaQuery({ query: '(min-width: 768px)' })
    const [isClick, setClick] = useState(false);
    const variant = {
        card: (
            <div onClick={() => setClick(!isClick)} className={`${location.search === '?V=2' && isTabletOrLapTop ? "" : "absolute"} cursor-pointer left-5 top-5 favorite-btn bg-white p-1 rounded-md`}>
                {isClick ? <CheckedHeartIcon width="25px" height="25px" /> : <UnCheckedHeartIcon width="25px" height="25px" />}
            </div>
        ),
        other: (
            <div onClick={() => setClick(!isClick)} className="bg-[#F6F7FA] border-2 border-neutral-300 flex justify-center cursor-pointer items-center rounded-full w-[50px] h-[50px]">
                {isClick ? <CheckedHeartIcon width="27px" height="27px" /> : <UnCheckedHeartIcon width="23px" height="23px" />}
            </div>
        )
    }
    return variant?.[variantStyle]
}

export default FavoriteBtn