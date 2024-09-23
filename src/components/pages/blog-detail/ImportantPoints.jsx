import { useTranslation } from "react-i18next"
import { VigVigIcon } from "../../../core/icon";

const ImportantPoints = ({ bio }) => {
  const { i18n } = useTranslation();
  return (
    <div className={`bg-[#EFEEFE] py-5 px-7 border-VioletBlue flex w-5/6 m-auto justify-between ${i18n.language === 'fa' ? "border-r-4" : "border-l-4"}`}>
      <p className="w-5/6 max-sm:text-sm">{bio}</p>
      <VigVigIcon />

    </div>
  )
}

export default ImportantPoints