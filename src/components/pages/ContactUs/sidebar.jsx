const SidebarItem = ({ icon, title, paragraph }) => {
    return (
        <div className="w-full min-h-40 flex gap-x-4 items-center bg-BlueGray p-8 rounded-lg border-2 border-GrayBorder">
            <div className="min-w-16 h-16 rounded-full flex justify-center items-center bg-Purple">{icon}</div>
            <div>
                <h1 className="text-2xl text-DarkPurple font-bold">{title}</h1>
                <p className="text-neutral-500">{paragraph}</p>
            </div>
        </div>
    )
}

export const Sidebar = () => {
    const sidebarItems = [
        {title: "نشانی", icon: "", paragraph: "آوامیلیگ درایو، کنزینگتون لندن، انگلستان"},
        {title: "تلفن", icon: "", paragraph: "+1 (800) 123 456 789"},
        {title: "آدرس ایمیل", icon: "", paragraph: "info@gmail.com"},
    ]

    return (
        <div className="w-2/6 h-full flex flex-wrap gap-y-6">
            {sidebarItems.map((item, index) => (<SidebarItem key={index} icon={item.icon} title={item.title} paragraph={item.paragraph} />))}
        </div>
    )
}