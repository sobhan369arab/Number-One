import { useTranslation } from "react-i18next";
import { ArrowLeftIcon } from "../../core/icon";

const BlueButton = ({ text, Class, ArrowColor }) => {
    const { t, i18n } = useTranslation();
    return (
        <button className={`${Class} rounded-3xl pb-3 pt-1.5 px-5  
        BoxShadow-BtnBlue hover:BoxShadow-BtnBlue_Hover flex justify-center items-center gap-x-2 duration-200`}>
            <span className="text-sm">{t(text)}</span>
            <div className={`${i18n.language === "en" ? "reverse-img" : ""} `}>
                <ArrowLeftIcon stroke={ArrowColor} />
            </div>
        </button>
    )
}

export default BlueButton