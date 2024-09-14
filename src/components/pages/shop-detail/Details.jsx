import ReactStars from "react-rating-stars-component";
import { Button, Spinner, FavoriteBtn } from "../../common"
import { BasketIcon } from "../../../core/icon"
import KeyDetails from "./KeyDetails";

const Details = ({
    title,
    score,
    price,
    discount,
    certificate,
    category,
    tags,
    bio
}) => {
    return (
        <div className="w-full xl:w-1/2 h-fit flex flex-wrap gap-y-3 text-center xl:text-start">
            <h1 className="w-full boldStyle_text">{title}</h1>
            <div className="w-full flex gap-x-2 items-center justify-center xl:justify-start">
                <ReactStars
                    value={parseInt(score)}
                    edit={false}
                    count={5}
                    size={25}
                    activeColor="#ffd700"
                    color={"#ccc"}
                />
                <span className="mediumStyle_text text-sm">( امتیاز {score}.0 )</span>
            </div>
            <div className="w-full flex flex-wrap gap-y-2">
                <span className="w-full">
                    <span className="text-purpleCustom text-xl">{price} هزار</span>
                    <span className="mediumStyle_text mx-2">تومان</span>
                </span>
                <span className="w-full line-through mediumStyle_text font-Pop_Med">{discount}</span>
            </div>
            <p className="mediumStyle_text line-clamp-3">{bio}</p>
            <div className="w-full flex gap-x-3 mt-5 justify-center xl:justify-start flex-wrap sm:flex-none gap-y-8">
                <div className="w-full sm:w-auto flex justify-center order-2 sm:order-none">
                    <Spinner />
                </div>
                <div className="w-full sm:w-auto flex justify-center order-3 sm:order-none">
                    <Button vStyle="purple" vType="button" text="افزودن به سبد خرید" Icon={BasketIcon} />
                </div>
                <FavoriteBtn variantStyle="other" />
            </div>
            <ul className="w-full flex flex-wrap gap-y-2 mt-10">
                <KeyDetails label="شناسه" value={certificate} dir="ltr" />
                <KeyDetails label="دسته بندی ها" value={category} />
                <KeyDetails label="برچسب ها" value={tags} />
            </ul>
        </div>
    )
}

export default Details
