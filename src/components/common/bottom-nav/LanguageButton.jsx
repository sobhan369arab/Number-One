import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageButton = () => {
    const { i18n } = useTranslation();
    const [lang, setLang] = useState("FA")

    const onChangeLang = () => {
        if (lang == "FA") {
            i18n.changeLanguage("en");
            setLang("EN")
        } else {
            i18n.changeLanguage("fa");
            setLang("FA")
        }
    }
    return (
        <div defaultValue={"fa"} onClick={onChangeLang} className="bottomNav">
            <span>{lang}</span>
        </div>
    )
}

export default LanguageButton
