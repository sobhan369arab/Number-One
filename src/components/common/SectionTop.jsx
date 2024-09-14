import { useTranslation } from "react-i18next"
import { SortBox } from "."
import ChangeView from "./ChangeView"


const SectionTop = ({
    label,
    AllData,
    FilteredData,
    setSortCal,
    setSortType,
    setShowGrid,
    showViewBtn = true
}) => {
    const { t } = useTranslation();
    return (
        <div className="sm:flex mobile:block gap-4 justify-between items-center pb-2">
            <h1 className="text-gray-600 text-sm  text-center">{t('show')} <span className="text-blue-600">{FilteredData.length}</span> {t('result')} {AllData.length}</h1>
            <div className="flex items-center gap-4 mx-2 my-2 ">
                <SortBox setSortCal={setSortCal} setSortType={setSortType} label={label} />
                {showViewBtn && <ChangeView setShowGrid={setShowGrid} />}
            </div>
        </div>
    )
}

export default SectionTop