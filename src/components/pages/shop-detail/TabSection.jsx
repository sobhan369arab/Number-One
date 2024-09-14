import { Tab, Tabs } from "@nextui-org/react"
import { useTranslation } from "react-i18next"

const TabSection = ({ bio }) => {
    const { t } = useTranslation()
    return (
        <div>
            <Tabs
                variant="underlined"
                aria-label="Tabs variants"
                className="w-full"
                classNames={{
                    tabList: "w-full relative rounded-none p-0 border-b border-divider",
                    cursor: "w-full bg-[#5751E1]",
                    tab: "max-w-fit px-8 h-12",
                    tabContent: "group-data-[selected=true]:text-[#5751E1]"
                }}
            >
                <Tab key="Explain" title={t("description")} className="mediumStyle_text">
                    <p>{bio}</p>
                </Tab>
                <Tab key="Reviews" title={t("Comments")} className="mediumStyle_text">
                    <p>کامنت ها</p>
                </Tab>
            </Tabs>
        </div>
    )
}

export default TabSection
