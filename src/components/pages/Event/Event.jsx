import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom";
import { LocationIcon } from "../../../core/icon";

const Event = ({ id, title, date, location, images }) => {
    const { t, i18n } = useTranslation();
    return (
        <Link to={`/EventDetails/${id}`}>
            <div className="border w-60 border-grayBorder p-4 rounded-md relative hover:shadow-xl duration-200">
                <img src={`./images/Events/${images}`} alt="Event Images" className="h-40" />
                <h1 className="mt-6 mb-2 w-48 font-semibold">{t(title)}</h1>
                <div className="flex gap-1">
                    <LocationIcon height={20} width={20} />
                    <span className="mediumStyle_text">{t(location)}</span>
                </div>
                <div className={`bg-yellowCustom buttonYellow_shadow duration-200 w-28 pt-1 pb-0.5 text-center rounded-3xl text-sm 
            font-semibold absolute top-40 ${i18n.language === 'fa' ? 'right-4' : 'left-4'}`}>{t(date)}</div>
            </div>
        </Link>
    )
}

export default Event