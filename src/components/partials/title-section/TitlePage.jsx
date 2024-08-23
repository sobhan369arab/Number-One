import { useTranslation } from "react-i18next"

const TitlePage = ({title}) => {
    const {t} = useTranslation();
  return (
    <h1 className="w-full h-fit text-center text-3xl font-bold cursor-default">{t(title)}</h1>
  )
}

export default TitlePage