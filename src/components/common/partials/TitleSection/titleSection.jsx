import { useTranslation } from "react-i18next"
import BreadCrumb from "./breadCrumb"
import TitlePage from "./titlePage"

const TitleSection = ({ title }) => {
  const { i18n } = useTranslation();
  return (
    <div className={`${i18n.language === "fa" ? "bg-[url(../images/Section.png)]" : "bg-[url(../images/Section-reverse.jpg)]"} bg-cover`}>
      <div className="sm:py-20 py-12 lg:mx-44 mx-16 max-sm:text-center">
        <TitlePage title={title} />
        <BreadCrumb />
      </div>
    </div>
  )
}

export default TitleSection