import { useTranslation } from "react-i18next";
import { ArrowLeftIcon } from "../../core/icon";
import { Link } from "react-router-dom";

export const variantButton = {
    "purple": "bg-purpleCustom text-white buttonPurple_shadow",
    "yellow": "bg-yellowCustom text-black buttonYellow_shadow",
}

const Button = ({ text, arrowColor, variant, style, Icon, href }) => {
    const { t, i18n } = useTranslation();
    return (
        <Link to={href} className={`rounded-3xl pb-3 pt-1.5 px-5 flex items-center gap-x-2 duration-200 ${variantButton?.[variant]} ${style}`}>
            <span className="text-sm">{t(text)}</span>
            <div className={i18n.language === "en" ? "reverse-img" : ""}>
                {Icon ? <Icon /> : <ArrowLeftIcon stroke={arrowColor} height="12px" />}
            </div>
        </Link>
    )
}

export default Button