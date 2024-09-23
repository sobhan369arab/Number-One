import { useTranslation } from "react-i18next"
import { Label } from "../../common"
import Tab from "./tab"
import { tabOptions } from "../../../core/constants/landing/TopCoursesTab"
import { useSelector } from "react-redux"

const TopCourses = () => {
    const { t, i18n } = useTranslation()
    const theme = useSelector(state => state.DarkMode)
    return (
        <div className={`w-full py-28 lg:px-44 sm:px-16 px-8 flex flex-wrap gap-y-4 justify-center ${theme ? "bg-gradientBackgroundDark" : "bg-gradientBackground"} bg-cover bg-center bg-no-repeat`}>
            <Label text={t("topCoursesLabel")} variant="section" />
            <h1 className="boldStyle_text w-full text-center">{t("topCoursesTitle")}</h1>
            <p className="mediumStyle_text w-full text-center">{t("topCoursesDescription")}</p>
            <div className="mobile:w-full sm:w-auto flex mobile:justify-evenly justify-center relative mobile:px-0 sm:px-20 mt-10">
                {tabOptions.map(obj => <Tab key={obj.id} value={obj.value} name="landing" title={i18n.language === "en" ? obj.text[1] : obj.text[0]} />)}
                <span className="w-full h-1 bg-LightGrayish rounded-full bottom-0 absolute"></span>
            </div>
            <div className="w-full h-80 mt-5 bg-yellow-500"></div>
        </div>
    )
}

export default TopCourses
