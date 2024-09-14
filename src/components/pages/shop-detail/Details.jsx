import ReactStars from "react-rating-stars-component";
import { Button, Spinner, FavoriteBtn } from "../../common"
import { BasketIcon } from "../../../core/icon"
import KeyDetails from "./KeyDetails";
import { useTranslation } from "react-i18next";

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
    const { t } = useTranslation()
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
                <span className="mediumStyle_text text-sm">( {t("Reviews")} {score}.0 )</span>
            </div>
            <div className="w-full flex flex-wrap gap-y-2">
                <span className="w-full">
                    <span className="text-purpleCustom text-xl">{price} هزار</span>
                    <span className="mediumStyle_text mx-2">{t("priceCount")}</span>
                </span>
                <span className="w-full line-through mediumStyle_text font-Pop_Med">{discount}</span>
            </div>
            <p className="mediumStyle_text line-clamp-3">{bio}</p>
            <div className="w-full flex gap-x-3 mt-5 justify-center xl:justify-start flex-wrap sm:flex-none gap-y-8">
                <div className="w-full sm:w-auto flex justify-center order-2 sm:order-none">
                    <Spinner />
                </div>
                <div className="w-full sm:w-auto flex justify-center order-3 sm:order-none">
                    <Button vStyle="purple" vType="button" text="AddToCart" Icon={BasketIcon} />
                </div>
                <FavoriteBtn variantStyle="other" />
            </div>
            <ul className="w-full flex flex-wrap gap-y-2 mt-10">
                <KeyDetails label={t("ShopDetailId")} value={certificate} dir="ltr" />
                <KeyDetails label={t("category")} value={category} />
                <KeyDetails label={t("ShopDetailTags")} value={tags} />
            </ul>
        </div>
    )
}

export default Details
