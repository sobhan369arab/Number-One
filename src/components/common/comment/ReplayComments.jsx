import { DownSection, TopSection } from "./comment-item"
import userImg from '../../../assets/images/courses/course1.png'
import { useTranslation } from "react-i18next"

const ReplayComments = ({ describe }) => {
    const {i18n} = useTranslation()
    return (
        <div dir={i18n.language === 'fa'? "ltr":'rtl'} className="border-t-2 border-gray-100 py-4">
            <div dir={i18n.language === 'fa'? "rtl":'ltr'} className="flex gap-4 w-11/12">
                <img src={userImg} className='sm:w-24 w-16 sm:h-24 h-16  rounded-full' />
                <div className='w-full'>
                    <TopSection Style={'hidden'} describe={describe} />
                    <DownSection Style={'!hidden'} />
                </div>
            </div>
        </div>
    )
}

export default ReplayComments