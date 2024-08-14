import { useTranslation } from "react-i18next"
import { LocationIcon, StarIcon, TotalIcon } from "../../../core/icon";
// import arrow from "../../../assets/ArrowSvg.svg"

const EventTitle = ({
    title,
    location,
    NumberStudents,
    creator,
    Score
}) => {
    const { t } = useTranslation();
    return (
        <div className="my-4 py-4 md:w-[70%] border-b border-grayCustom">
            <div className=" flex gap-4 items-center">
                {/* Score Box */}
                <button className="bg-purpleCustom py-1 px-8 text-white rounded-2xl text-sm hover:scale-110 duration-200">{t('Development')}</button>
                <StarIcon />
                <span className="text-textGray2 ">({Score} {t('Reviews')})</span>
            </div>
            <h1 className="lg:text-3xl text-2xl font-semibold my-3 max-lg:w-[420px]">{t(title)}</h1>
            {/* other details */}
            <div className="flex items-center text-sm text-textGray2 gap-3">
                {/* Creator detail */}
                <div className="flex items-center">
                    <img src='../images/Events/creator.png' className="h-11"/>
                    <span className="mx-3 text-black"><span className="text-textGray2">{t('By')}</span> {creator}</span>
                </div>
                .
                <div className="flex items-center">
                    <LocationIcon />
                    <span className="mx-1">{t(location)}</span>
                </div>
                .
                <div className="flex items-center">
                    <TotalIcon height={15}/>
                    <span className="mx-1 mt-0.5">{NumberStudents} {t('student')}</span>
                </div>
            </div>
        </div>
    )
}

export default EventTitle