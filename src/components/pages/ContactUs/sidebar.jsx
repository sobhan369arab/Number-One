import { useTranslation } from "react-i18next"

const SidebarItem = ({ icon, title, paragraph }) => {
    return (
        <div className="w-full md:w-1/3 xl:w-full min-h-40 max-h-40 flex flex-wrap lg:flex-nowrap gap-x-4 items-center bg-blueGray p-4 xl:p-8 rounded-lg border-2 border-GrayBorder">
            <div className="min-w-12 xl:min-w-16 h-12 xl:h-16 rounded-full flex justify-center items-center bg-purpleCustom">{icon}</div>
            <div className="w-full">
                <h1 className="text-2xl text-DarkPurple font-bold">{title}</h1>
                <p className="text-neutral-500">{paragraph}</p>
            </div>
        </div>
    )
}

export const Sidebar = () => {
    const { i18n } = useTranslation()
    const sidebarItems = [
        { title: ["نشانی", "Address"], icon: "", paragraph: ["آوامیلیگ درایو، کنزینگتون لندن، انگلستان", "Awamileaug Drive, Kensington London, UK"] },
        { title: ["تلفن", "Phone"], icon: "", paragraph: ["09335006455"] },
        { title: ["آدرس ایمیل", "E-mail Address"], icon: "", paragraph: ["info@gmail.com"] },
    ]

    return (
        <div className="w-full xl:w-2/6 h-full flex flex-wrap md:flex-nowrap xl:flex-wrap gap-4 xl:gap-y-6">
            {sidebarItems.map((item, index) => {
                if (i18n.language == "fa") {
                    return (<SidebarItem key={"fa" + index} icon={item.icon} title={item.title[0]} paragraph={item.paragraph[0]} />)
                } else {
                    return (<SidebarItem key={"en" + index} icon={item.icon} title={item.title[1]} paragraph={item.paragraph.length > 1 ? item.paragraph[1] : item.paragraph} />)
                }
            })}
        </div>
    )
}