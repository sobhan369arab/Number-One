import { useTranslation } from "react-i18next";
import { CustomMap } from "../../common";

export const Map = () => {
    const { t,i18n } = useTranslation();

    return (
        <div className={`${i18n.language==='fa'?'md:left-7 left-1':'md:right-7 right-1'} sm:absolute max-sm:mt-3 -bottom-6 tom-0 Box-shadow1 max-sm:w-11/12 w-68 p-5 bg-white rounded-lg border border-grayCustom`}>
            <h1 className="mb-2">{t('map')}</h1>
            <CustomMap width="208px" height="200px" />
        </div>
    )
}
