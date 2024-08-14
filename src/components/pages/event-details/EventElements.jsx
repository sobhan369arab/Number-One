import { useTranslation } from "react-i18next"
import event3 from "../../../assets/images/event3.png"
const EventElements = ({ MajorElements, training }) => {
    const { t, i18n } = useTranslation();
    return (
        <>
            <div className="my-5 lg:flex gap-5">
                <img src={event3} alt="event Icon" className="h-48" />
                <div className="sm:w-80 -mt-2 max-lg:mt-3">
                    <h1 className="title-text">{t('EventElements')}</h1>
                    <div className="flex flex-wrap gap-x-6">
                        {MajorElements.map((item, index) => (
                            <div key={index} className="flex gap-3 items-baseline">
                                <div className="bg-orange border leading-7 text-lg font-semibold border-black rounded-full w-6 h-6 px-0.5 mt-3 BoxShadow-BtnOrange ">
                                    {i18n.language === 'fa' ? '>' : '>'}</div>
                                <h1>{t(item)}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <h1>{t(training)}</h1>
        </>
    )
}

export default EventElements