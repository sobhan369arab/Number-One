import { Link } from 'react-router-dom'
import { ArrowIcon } from '../../../../core/icon'
import { useTranslation } from 'react-i18next'

const UserCoursesSection = ({ sectionName, children }) => {
    const { t, i18n } = useTranslation()
    return (
        <div className='w-1/2 flex flex-wrap justify-center'>
            <h1 className='w-full text-xl text-neutral-400'>{sectionName}</h1>
            <div className='w-full mt-6 flex flex-wrap gap-y-4'>
                {children}
            </div>
            <Link className='text-neutral-400 text-sm flex gap-x-4 mt-2'>
                <span>{t("viewAll")}</span>
                <div className={`rotate-90 w-fit ${i18n.language == "en" ? "scale-[-1]" : ""}`}>
                    <ArrowIcon />
                </div>
            </Link>
        </div>
    )
}

export default UserCoursesSection
