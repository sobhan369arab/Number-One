import { useTranslation } from "react-i18next"
import BreadCrumb from "./BreadCrumb"
import TitlePage from "./TitlePage"

const TitleSection = ({ title }) => {
  const { i18n } = useTranslation();
  return (
    <div className="flex py-7 justify-center flex-wrap gap-y-2 bg-titleSectionGradient bg-cover">
      <TitlePage title={title} />
      <BreadCrumb />
    </div>
  )
}

export default TitleSection