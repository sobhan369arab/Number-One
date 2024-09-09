import { useTranslation } from "react-i18next"

const UserCourseStatus = ({ amount, Icon, description }) => {
    const { t, i18n } = useTranslation()
    return (
        <div className='w-3/5 lg:w-44 min-w-52 h-20 flex bg-neutral-100 rounded-md heroSection_box_shadow py-2 px-4 relative'>
            <div className="w-2/3 flex flex-wrap">
                <h1 className='w-full text-2xl text-purpleCustom'>{amount} {t("course")}</h1>
                <span className='w-full text-[#A7A7A7]'>{description}</span>
            </div>
            <div className={`min-w-14 h-14 rounded-full bg-purpleCustom lg:absolute -top-7 flex justify-center items-center ${i18n.language == "en" ? "right-0" : "left-4"}`}>
                <Icon />
            </div>
        </div>
    )
}

export default UserCourseStatus
