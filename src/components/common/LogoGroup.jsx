import { useTranslation } from "react-i18next"

const LogoGroup = ({color}) => {
    const {t} = useTranslation();
    return (
        <div className="flex gap-1 items-center">
            <img src="../icons/logo.svg" alt="Logo" className="h-10" />
            <div className="mb-1 max-sm:hidden">
                <h1 className={`text-xl font-semibold boldStyle_text ${color}`}>{t('nameGroup')}</h1>
                <h2 className={`text-[10px] -mt-1 ${color}`}>{t('teamSlogan')}</h2>
            </div>
        </div>
    )
}

export default LogoGroup