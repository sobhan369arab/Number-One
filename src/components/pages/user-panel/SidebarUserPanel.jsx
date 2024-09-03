import { Link } from "react-router-dom"
import { sidebarButtons } from "../../../core/constants/user-panel/SidebarButtons"
import SidebarButton from "./SidebarButton"
import { ExitBtnPanelIcon } from "../../../core/icon"
import { useTranslation } from "react-i18next"

const SidebarUserPanel = () => {
  const { t, i18n } = useTranslation()
  return (
    <div className='min-w-[308px] w-[308px] bg-purpleCustom flex justify-center flex-wrap py-12'>
      <div className="w-32 h-32 bg-yellowCustom rounded-full"></div>
      <h1 className="w-full text-center mt-8 text-xl text-white">فلان فلانی {t("welcome")}</h1>
      <span className="w-full h-1 borderButton_sidebar_userPanel mt-4"></span>
      <div className={`w-full h-[379px] mt-10 ${i18n.language == "en" ? "pl-8" : "pr-8"} flex flex-wrap`}>
        {sidebarButtons.map(item => <SidebarButton key={item.id} Icon={item.icon} href={item.href} name={i18n.language != "en" ? item.name[0] : item.name[1]} />)}
      </div>
      <Link to="/" className="text-white flex items-center mt-14 gap-x-3">
        <ExitBtnPanelIcon />
        <span>{t("exitFromAccount")}</span>
      </Link>
    </div>
  )
}

export default SidebarUserPanel
