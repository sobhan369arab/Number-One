import { useTranslation } from "react-i18next"
import FieldSection from "./FieldSection"
import { useSelector } from "react-redux"
import GenerateField from "./GenerateField"

const InformationSection = ({ styleSection, section, map = false }) => {
    const userInfo = useSelector(state => state.UserInfo.info)
    const {
        lName,
        fName,
        nationalCode,
        email,
        birthDay,
        gender,
        userAbout,
        phoneNumber,
        telegramLink,
        linkdinProfile,
        longitude,
        latitude,
    } = userInfo

    const initialState = {
        sectionRight: [
            GenerateField(["نام و نام خانوادگی :", "Name and surname:"], `${lName} ${fName}`),
            GenerateField(["کد ملی :", "National code:"], nationalCode),
            GenerateField(["ایمیل :", "Email:"], email),
            GenerateField(["تاریخ تولد :", "Date of birth:"], birthDay.slice(0,10)),
            GenerateField(["جنسیت :", "Gender:"], gender ? ["مرد", "Man"] : ["زن", "Woman"]),
            GenerateField(["درباره من :", "About me:"], userAbout),
        ],
        sectionLeft: [
            GenerateField(["شماره همراه :", "Mobile number:"], phoneNumber),
            GenerateField(["تلگرام :", "Telegram:"], telegramLink),
            GenerateField(["لینکداین :", "LinkedIn:"], linkdinProfile),
            GenerateField(["آدرس :", "Address:"], ""),
            GenerateField(["طول جغرافیایی :", "Longitude:"], longitude),
            GenerateField(["عرض جغرافیایی :", "Latitude:"], latitude),
        ]
    }
    const { i18n } = useTranslation()
    return (
        <ul className={`w-full md:w-1/2 mobile:px-4 px-12 py-5 flex flex-wrap gap-y-5 lg:gap-y-10 relative ${styleSection}`}>
            {initialState?.[section].map((obj, index) => <FieldSection key={index} fieldTitle={obj.title} descriptionTitle={obj.description} />)}
            {map ? <div className={`hidden lg:block w-28 h-28 bg-SunshineYellow rounded-full absolute bottom-2 ${i18n.language != "en" ? "left-12" : "right-12"}`}></div> : null}
        </ul>
    )
}

export default InformationSection
