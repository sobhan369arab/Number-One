import { useTranslation } from "react-i18next"

const MenuHeader = ({ title }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className={`h-6 bg-[url('../icons/BlackArrow.png')] bg-no-repeat bg-11 cursor-pointer text-sm max-lg:hidden 
      hover:text-Purple hover:bg-[url('../icons/PurpleArrow.png')] duration-200 
        ${i18n.language === 'fa' ? 'pl-8 bg-left-bottom' : 'pr-7 bg-right-bottom'}`}>{t(title)}</div>
  )
}

export default MenuHeader