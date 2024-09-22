import { useTranslation } from "react-i18next"
import event3 from "../../../assets/images/event3.png"
import { OptionParts } from "../../common";
const EventElements = ({ MajorElements, training }) => {
    const { t, i18n } = useTranslation();
    return (
        <>
            <div className="my-5 lg:flex gap-5">
                <img src={event3} alt="event Icon" className="h-48" />
                <div className="sm:w-80 -mt-2 max-lg:mt-3">
                    <h1 className="boldStyle_text">{t('EventElements')}</h1>
                    <div className="flex flex-wrap gap-y-4 mt-4">
                        {MajorElements.map((item, index) => <OptionParts key={index} text={item} disableIconIn="0px" />)}
                    </div>
                </div>
            </div>
            <p className="mediumStyle_text">{t(training)}</p>
        </>
    )
}

export default EventElements