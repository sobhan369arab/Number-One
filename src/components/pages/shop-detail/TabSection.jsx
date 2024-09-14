import { Tab, Tabs } from "@nextui-org/react"

const TabSection = ({ bio }) => {
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
                <Tab key="Explain" title="شرح" className="mediumStyle_text">
                    <p>{bio}</p>
                </Tab>
                <Tab key="Reviews" title="کامنت ها" className="mediumStyle_text">
                    <p>کامنت ها</p>
                </Tab>
            </Tabs>
        </div>
    )
}

export default TabSection
