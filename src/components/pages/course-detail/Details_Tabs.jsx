import { useSearchParams } from "react-router-dom"
import { TabData } from "../../../core/constants/event-details/tabData"
import { useTranslation } from "react-i18next";

const Details_Tabs = ({ children }) => {
    // console.log(children)
    const { i18n } = useTranslation();
    const [searchParams, setSearchParams] = useSearchParams({ detailsTab: "Overview" })
    const TabMood = searchParams.get("detailsTab")

    const SetValue = (value) => {
        // console.log(value)
        setSearchParams({ detailsTab: value })
    }

    return (
        <div>
            <div className="mb-9">
                {TabData.map((tab, index) => (
                    <label key={index} className="duration-300 cursor-pointer py-1.5 mx-2 px-4 rounded-2xl bg-grayCustom text-gray-600 has-[:checked]:text-white
              has-[:checked]:bg-purpleCustom  has-[:checked]:buttonSimple_shadow">
                        <input checked={TabMood === tab.value ? true : false} onChange={() => SetValue(tab.value)} type="radio" name="TabDetail" className="hidden" />
                        {i18n.language === 'fa' ? tab.label[0] : tab.label[1]}
                    </label>
                ))}
            </div>
            <div>
                {children.map((child) => {
                    if (child.props.label === TabMood) {
                        return <div key={child.props.label}>{child.props.children}</div>
                    }
                })}
            </div>
        </div>
    )
}

export default Details_Tabs