import { LANGUAGES } from "./Languages"
import { useTranslation } from "react-i18next";

const Btn_Languages = () => {
    const { i18n } = useTranslation();
    const onChangeLang = (e) => {
        const lang_code = e.target.value;
        i18n.changeLanguage(lang_code);
    }
    return (
        <select defaultValue={"fa"} onChange={onChangeLang} className="cursor-pointer w-12 h-12 rounded-full text-center bg-blue-200">
            {LANGUAGES.map(({ code, label }) => (
                <option key={code} value={code}>
                    {label}
                </option>
            ))}
        </select>
    )
}


export default Btn_Languages