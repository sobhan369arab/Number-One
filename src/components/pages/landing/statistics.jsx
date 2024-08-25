import { useTranslation } from "react-i18next"
import CreateStatisticsItem from "./CreateStatisticsItem"
import { statisticsItem } from "../../../core/constants/landing/Statistics"

const Statistics = () => {
    const { i18n } = useTranslation()
    return (
        <div className="w-full lg:px-44 sm:px-16 px-8 pb-28">
            <div className="w-full py-16 lg:py-20 xl:px-24 flex gap-y-16 flex-wrap md:flex-nowrap statistics_holder">
                {statisticsItem.map(item => (<CreateStatisticsItem key={item.id} Statistics={item.statistics} name={i18n.language === "en" ? item.name[1] : item.name[0]} isBorder={item.isBorder} />))}
            </div>
        </div>
    )
}

export default Statistics
