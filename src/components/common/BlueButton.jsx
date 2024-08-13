import { useTranslation } from "react-i18next";
import { ArrowLeftIcon } from "../../core/icon";

const BlueButton = ({ text, Class,ArrowColor }) => {
    const { t, i18n } = useTranslation();
    return (
        <button className={`${Class} rounded-3xl pb-3 pt-1.5 block  
        BoxShadow-BtnBlue hover:BoxShadow-BtnBlue_Hover duration-200`}>
            <span className="text-sm">{t(text)}</span>
            <ArrowLeftIcon stroke={ArrowColor}  className={`${i18n.language === "en" ? "reverse-img" : ""}   inline mx-2 h-3 `} />
        </button>
    )
}

export default BlueButton