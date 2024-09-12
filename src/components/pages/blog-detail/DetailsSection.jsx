import { BsClock, BsEyeFill } from "react-icons/bs"
import { DateIcon, TimeIcon } from "../../../core/icon"
import { BiComment } from "react-icons/bi"
import { useTranslation } from "react-i18next"

const DetailsSection = ({
    category,
    date,
    view,
    studyTime,
    commentsNumber
}) => {
    const { t } = useTranslation();

    const firstDetails = [
        { text: date, icon: <DateIcon fill="#5751E1" height={18} width={18} /> },
        { text: view, icon: <BsEyeFill color="#5751E1" /> },
    ]
    const lastDetails = [
        { text: 'studyTime', count: studyTime, icon: <BsClock color="#5751E1" /> },
        { text: 'comment', count: commentsNumber, icon: <BiComment color="#5751E1" /> },
    ]


    return (
        <div className="flex justify-between mt-8 mb-6">
            <div className="flex gap-4 items-center">
                <div className="px-4 py-1 bg-purpleCustom text-sm text-white rounded-2xl whitespace-nowrap cursor-default">{category}</div>
                {firstDetails.map((item, index) => (
                    <div key={index} className="flex gap-1.5">
                        {item.icon}
                        <h1 className="text-gray-500 text-sm">{item.text}</h1>
                    </div>
                ))}
            </div>
            <div className="flex gap-4 items-center">
                {lastDetails.map((item, index) => (
                    <div key={index} className="flex gap-1.5">
                        {item.icon}
                        <div className="flex gap-1">
                            <h1 className="text-gray-500 text-sm">{item.count}</h1>
                            <h2 className="text-gray-500 text-sm">{t(item.text)}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default DetailsSection