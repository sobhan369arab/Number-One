import MediaQuery from "react-responsive";
import { OptionIcon } from "../../core/icon";
import { useTranslation } from "react-i18next";

const OptionParts = ({ text, holderStyle, disableIconIn }) => {
    const { i18n } = useTranslation()
    return (
        <li className={`w-full flex gap-x-2 items-center ${holderStyle}`}>
            <MediaQuery minWidth={disableIconIn}>
                <div className={`${i18n.language === "en" ? "reverse-img" : ""} min-w-8 min-h-8 border border-[#282568] rounded-full bg-[#FFC224] flex justify-center items-center OptionIcon_shadow`}>
                    <OptionIcon fill="#1c1A4A" />
                </div>
            </MediaQuery>
            <h4 className="boldStyle_text w-full font-IranSans font-semibold lg:text-start text-center mobile:text-base text-lg">{text}</h4>
        </li>
    )
}

export default OptionParts;
