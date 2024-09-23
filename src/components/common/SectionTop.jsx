import { useTranslation } from "react-i18next"
import ChangeView from "./ChangeView"


const SectionTop = ({
    AllData,
    FilteredData,
    setShowGrid,
    showViewBtn = true,
    children
}) => {
    const { t } = useTranslation();
    return (
        <div className="sm:flex mobile:block gap-4 justify-between items-center pb-2">
            <div className="mediumStyle_text text-sm text-center flex gap-x-2">
                <span>{t('show')}</span>
                <span className="text-blue-600">{FilteredData.length}</span>
                <span>{t('result')}</span>
                <span>{AllData.length}</span>
            </div>
            <div className="flex items-center gap-4 mx-2 my-2">
                {children}
                {showViewBtn && <ChangeView setShowGrid={setShowGrid} />}
            </div>
        </div>
    )
}

export default SectionTop