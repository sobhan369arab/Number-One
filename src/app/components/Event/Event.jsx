import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom";

const Event = ({ id, title, date, location, images }) => {
    const { t, i18n } = useTranslation();
    return (
        <Link to={`/EventDetails/${id}`}>
            <div className="border w-60 border-GrayBorder p-4 rounded-md relative hover:shadow-xl duration-200">
                <img src={`./images/Events/${images}`} alt="Event Images" className="h-40" />
                <h1 className="mt-6 mb-2 w-48 font-semibold">{t(title)}</h1>
                <div className="flex gap-1.5 ">
                    <img src="./icons/loc.svg" alt="location Icon" className="h-4" />
                    <span className="text-sm text-gray-500 ">{t(location)}</span>
                </div>
                <div className={`bg-Orange w-28 pt-1 pb-0.5 BoxShadow-BtnOrange text-center rounded-3xl text-sm 
            font-semibold absolute top-40 ${i18n.language === 'fa' ? 'right-4' : 'left-4'}`}>{t(date)}</div>
            </div>
        </Link>
    )
}

export default Event