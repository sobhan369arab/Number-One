import aboutUs_poster from "../../../assets/images/aboutus_landing.png"
import liveClass_icon from "../../../assets/images/liveClass.png"
import { Button, ImportantWord, Label, OptionParts } from "../../common"
import { PlayIcon } from "../../../core/icon"
import { useTranslation } from "react-i18next"
import { aboutUsOptions } from "../../../core/constants/landing/aboutUs"
import { useSelector } from "react-redux"

const AboutUs = () => {
  const { t, i18n } = useTranslation()
  const theme = useSelector(state => state.DarkMode)

  return (
    <div className={`w-full ${theme ? "bg-gradientBackgroundDark" : "bg-gradientBackground"} lg:bg-none flex justify-center gap-x-12 max-lg:py-28 lg:px-44 sm:px-16 px-8`}>
      <div className=" w-[400px] hidden h-fit relative lg:flex flex-wrap justify-center">
        <img className="w-20 absolute left-28 top-10 transition-all duration-200" src={liveClass_icon} alt="Live Class" />
        <button className="playButton top-[40%]">
          <PlayIcon width="55px" />
        </button>
        <img className="w-[400px] h-[400px]" src={aboutUs_poster} alt="Poster" />
        <div className={`${i18n.language == "en" ? "-left-48" : "-right-48"} w-44 p-2 h-24 rounded-lg bg-MainBg relative bottom-28 border-2 border-LightGray drop-shadow-xl`}>
          <h1 className="text-center text-DarkBlue text-sm">{t("boardText")}</h1>
          <ul className="w-full h-1/2 flex justify-center items-end">
            <li className={`bg-yellow-100 min-w-9 h-9 rounded-full -mr-4`}></li>
          </ul>
        </div>
      </div>
      <div className="w-full lg:w-3/5 xl:w-2/5 h-fit flex lg:justify-start justify-center flex-wrap gap-y-3">
        <Label text={t("aboutLabel")} variant="bgGray" />
        <div className="w-full flex flex-wrap justify-center lg:justify-start h-fit gap-x-3 items-end">
          <h1 className="boldStyle_text w-auto">{t("aboutTitle1")}</h1>
          <ImportantWord>{t("aboutImportantWord")}</ImportantWord>
        </div>
        <h1 className="boldStyle_text">{t("aboutTitle2")}</h1>
        <p className="w-full mediumStyle_text text-center lg:text-start">{t("aboutDescription")}</p>
        <ul className="w-full flex flex-wrap gap-y-3">
          {aboutUsOptions.map(item => (<OptionParts key={item.id} text={i18n.language === "en" ? item.text[1] : item.text[0]} holderStyle="justify-center lg:justify-start" disableIconIn="1024px" />))}
        </ul>
        <Button text={t("aboutBtn")} style="mt-5" variant={"purple"} arrowColor="#fff" />
      </div>
    </div>
  )
}

export default AboutUs
