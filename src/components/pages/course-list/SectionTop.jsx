import { useTranslation } from "react-i18next"
import { SortBox } from "../../common"
import ChangeView from "./ChangeView"


const SectionTop = ({
    CourseData,
    FilteredData,
    setSortCal,
    setSortType,
    setShowGrid,
}) => {
    const {t} = useTranslation();
    return (
        <div className="flex gap-4 justify-between items-center pb-2">
            <h1 className="text-gray-600 text-sm">{t('show')} <span className="text-blue-600">{FilteredData.length}</span> {t('result')} {CourseData.length}</h1>
            <div className="flex gap-4 mx-2">
            <SortBox setSortCal={setSortCal} setSortType={setSortType} />
            <ChangeView setShowGrid={setShowGrid} />
            </div>
        </div>
    )
}

export default SectionTop