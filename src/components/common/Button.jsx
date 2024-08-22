import { useTranslation } from "react-i18next";
import { ArrowLeftIcon } from "../../core/icon";

export const variantButton = {
    "purple": "bg-purpleCustom text-white",
    "yellow": "bg-yellowCustom text-black",
}

const Button = ({ text, arrowColor, variant, style }) => {
    const { t, i18n } = useTranslation();
    return (
        <button className={`rounded-3xl pb-3 pt-1.5 px-5 flex items-center gap-x-2 BoxShadow-BtnBlue duration-200 ${variantButton?.[variant]} ${style}`}>
            <span className="text-sm">{t(text)}</span>
            <ArrowLeftIcon stroke={arrowColor} height="12px" className={i18n.language === "en" ? "reverse-img" : ""} />
        </button>
    )
}

export default Button