import { useTranslation } from "react-i18next"
import { NavLink } from "react-router-dom";

const MenuHeader = ({ title, href }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className="relative cursor-pointer text-sm max-lg:hidden hover:text-purpleCustom duration-200">
      <NavLink to={href} style={({ isActive }) => ({ color: isActive ? "#5751E1" : "#161439" })}>{t(title)}</NavLink>
      <NavLink to={href} style={({ isActive }) => ({ display: isActive ? "block" : "none" })} className="w-full h-1 bgGradient_menu absolute -bottom-2 right-0"></NavLink>
    </div>
  )
}

export default MenuHeader