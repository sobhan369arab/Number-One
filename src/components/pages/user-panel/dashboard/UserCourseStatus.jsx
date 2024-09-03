import { useTranslation } from "react-i18next"

const UserCourseStatus = ({ amount, Icon, description }) => {
    const { t, i18n } = useTranslation()
    return (
        <div className='w-44 h-20 bg-neutral-100 rounded-md heroSection_box_shadow py-2 px-4 relative'>
            <h1 className='w-full text-2xl text-purpleCustom'>{amount} {t("course")}</h1>
            <span className='w-full text-[#A7A7A7]'>{description}</span>
            <div className={`w-14 h-14 rounded-full bg-purpleCustom absolute -top-7 flex justify-center items-center ${i18n.language == "en" ? "right-0" : "left-4"}`}>
                <Icon />
            </div>
        </div>
    )
}

export default UserCourseStatus
