import { useTranslation } from "react-i18next"
import { DateIcon, LocationIcon, StarIcon, TotalIcon } from "../../core/icon";
import Label from "./Label";

export const boxTitle_variant = {
    "event-detail": 'lg:w-[70%] border-b border-LightLavender',
    "course-detail": 'w-full',
}

export const categoryItems_variant = {
    "event-detail": 'bgBlue',
    "course-detail": 'bgTextGray',
}
export const icon_variant = {
    "event-detail": <LocationIcon />,
    "course-detail": <DateIcon width={18} fill={'gray'} />,
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
        <div className={`my-4 py-4  ${boxTitle_variant?.[variant]}`}>
            <div className=" flex max-sm:justify-between flex-wrap gap-2 items-center ">
                {/* Category Box */}
                {category.map((item, index) => (
                    <Label key={index} variant={categoryItems_variant?.[variant]} text={item} style=' py-1 px-8 text-sm hover:scale-110 duration-200 ' />
                ))}
                {/* Score Box */}
                <div className="flex gap-1 max-sm:mx-auto max-sm:mt-2">
                    <StarIcon />
                    <span className="mediumStyle_text text-sm ">({Score} {t('Reviews')})</span>
                </div>
            </div>
            <h1 className="lg:text-3xl text-2xl font-semibold my-4 max-sm:text-center max-sm:mx-auto text-DarkBlue">{t(title)} </h1>
            {/* other details */}
            <div className="sm:flex items-center text-sm text-textGray2 gap-3">
                {/* Creator detail */}
                <div className="flex items-center w-fit  max-sm:mx-auto">
                    <img src='../images/Events/creator.png' className="h-11" />
                    <span className="mx-3 text-DarkBlue"><span className="mediumStyle_text">{t('By')}</span> {creator}</span>
                </div>
                <div className="flex w-fit gap-5 max-sm:mx-auto max-sm:mt-3">
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
        </div>
    )
}

export default Title_details