import { useTranslation } from "react-i18next";
import { ArrowLeftIcon } from "../../core/icon";
import { Link } from "react-router-dom";

const Button = ({ text, arrowColor, vStyle, style, Icon, href, vType, isClick }) => {
    const { t, i18n } = useTranslation();
    const variantStyle = {
        "purple": "bg-purpleCustom text-white buttonPurple_shadow",
        "yellow": "bg-yellowCustom text-black buttonYellow_shadow",
    }
    const variantType = {
        link: (
            <Link to={href} className={`rounded-3xl pb-3 pt-1.5 px-5 flex items-center gap-x-2 duration-200 ${variantStyle?.[vStyle]} ${style}`}>
                <span className="text-sm">{t(text)}</span>
                <div className={i18n.language === "en" ? "reverse-img" : ""}>
                    {Icon ? <Icon /> : <ArrowLeftIcon stroke={arrowColor} height="12px" />}
                </div>
            </Link>
        ),
        button: (
            <button onClick={isClick} type='submit' className={`pb-3 pt-1.5 px-5 flex items-center gap-x-2 rounded-full duration-200 ${variantStyle?.[vStyle]} ${style}`}>
                {t(text)}
                {Icon ? <Icon /> : <ArrowLeftIcon stroke={arrowColor} height="12px" />}
            </button>
        )
    }
    return variantType?.[vType]
}

export default Button