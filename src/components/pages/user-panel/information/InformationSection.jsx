import { useTranslation } from "react-i18next"
import FieldSection from "./FieldSection"

const InformationSection = ({ styleSection, state, section, map = false }) => {
    const { name, nationalCode, email, dateOfBirth, gender, aboutMe, mobileNumber, telegram, linkedIn, address, longitude, latitude } = state
    const initialState = {
        sectionRight: [
            { title: ["نام و نام خانوادگی :", "Name and surname:"], description: name },
            { title: ["کد ملی :", "National code:"], description: nationalCode },
            { title: ["ایمیل :", "Email:"], description: email },
            { title: ["تاریخ تولد :", "Date of birth:"], description: dateOfBirth },
            { title: ["جنسیت :", "Gender:"], description: gender },
            { title: ["درباره من :", "About me:"], description: aboutMe },
        ],
        sectionLeft: [
            { title: ["شماره همراه :", "Mobile number:"], description: mobileNumber },
            { title: ["تلگرام :", "Telegram:"], description: telegram },
            { title: ["لینکداین :", "LinkedIn:"], description: linkedIn },
            { title: ["آدرس :", "Address:"], description: address },
            { title: ["طول جغرافیایی :", "Longitude:"], description: longitude },
            { title: ["عرض جغرافیایی :", "Latitude:"], description: latitude },
        ]
    }
    const { i18n } = useTranslation()
    return (
        <ul className={`w-1/2 px-12 py-5 flex flex-wrap gap-y-10 relative ${styleSection}`}>
            {initialState?.[section].map((obj, index) => <FieldSection key={index} fieldTitle={i18n.language == "en" ? obj.title[1] : obj.title[0]} descriptionTitle={obj.description} />)}
            {map ? <div className={`w-28 h-28 bg-yellowCustom rounded-full absolute bottom-2 ${i18n.language != "en" ? "left-12" : "right-12"}`}></div> : null}
        </ul>
    )
}

export default InformationSection
