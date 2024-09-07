import { useTranslation } from "react-i18next"
import { TabData } from "../../../core/constants/event-details/tabData"
import Details_Tabs from "./Details_Tabs"

const TabPanel = () => {
    const { i18n } = useTranslation();
    return (
        <div>
            <Details_Tabs/>
            {/* {TabData.map((tab,index) => {
                return (
                    <Details_Tabs key={index} value={tab.value} name="courses" label={i18n.language === 'fa' ? tab.label[0] : tab.label[1]} />
                )
            })} */}
        </div>
    )
}

export default TabPanel