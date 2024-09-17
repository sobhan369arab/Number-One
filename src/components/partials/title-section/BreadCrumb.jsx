import { useTranslation } from "react-i18next"
import { BiArrowFromBottom } from "react-icons/bi";
import { Link } from "react-router-dom"
import { ArrowIcon } from "../../../core/icon";


const BreadCrumb = ({ text, href, type = "Link" }) => {
  const { t } = useTranslation();
  const Variant = {
    "Link": (
      <>
        <Link to={href} className="w-fit h-fit text-center hover:text-purpleCustom duration-150">{t(text)}</Link>
        <ArrowIcon className={'rotate-90 mx-2'} fill={'#ccc'} />
      </>
    ),
    "Div": (
      <div className="w-fit h-fit text-center cursor-default text-purpleCustom">{t(text)}</div>
    ),
  }

  return (
    <div className="flex items-center ">
      {Variant?.[type]}
    </div>
  )
}

export default BreadCrumb