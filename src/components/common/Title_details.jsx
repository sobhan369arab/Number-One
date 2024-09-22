import { useTranslation } from "react-i18next"
import { DateIcon, LocationIcon, StarIcon, TotalIcon } from "../../core/icon";
// import arrow from "../../../assets/ArrowSvg.svg"

export const boxTitle_variant = {
    "event-detail": 'lg:w-[70%] border-b border-LightLavender',
    "course-detail": 'w-full',
}

export const categoryItems_variant = {
    "event-detail": 'bg-VioletBlue text-white',
    "course-detail": 'bg-LightLavender text-GrayishPurple',
}
export const icon_variant = {
    "event-detail": <LocationIcon />,
    "course-detail": <DateIcon height={18} width={18} />,
}

const Title_details = ({
    title,
    NumberStudents,
    creator,
    Score,
    category,
    differentDetail,
    variant,
}) => {
    const { t } = useTranslation();
    return (
        <div className={`my-4 py-4 ${boxTitle_variant?.[variant]}`}>
            <div className=" flex gap-2 items-center">
                {/* Category Box */}
                {category.map((item, index) => (
                    <div key={index} className={`${categoryItems_variant?.[variant]} py-1 px-8 rounded-2xl text-sm hover:scale-110 duration-200`}>{item}</div>
                ))}
                {/* Score Box */}
                <StarIcon />
                <span className="mediumStyle_text text-sm ">({Score} {t('Reviews')})</span>
            </div>
            <h1 className="lg:text-3xl text-2xl font-semibold my-4 max-lg:w-[420px] text-DarkBlue">{t(title)}</h1>
            {/* other details */}
            <div className="flex items-center text-sm text-textGray2 gap-3">
                {/* Creator detail */}
                <div className="flex items-center">
                    <img src='../images/Events/creator.png' className="h-11" />
                    <span className="mx-3 text-DarkBlue"><span className="mediumStyle_text">{t('By')}</span> {creator}</span>
                </div>
                .
                <div className="flex items-center mediumStyle_text">
                    {icon_variant?.[variant]}
                    <span className="mx-1">{t(differentDetail)}</span>
                </div>
                .
                <div className="flex items-center mediumStyle_text">
                    <TotalIcon />
                    <span className="mx-1 mt-0.5">{NumberStudents} {t('student')}</span>
                </div>
            </div>
        </div>
    )
}

export default Title_details