import { useTranslation } from 'react-i18next'
import userImg from '../../../assets/images/courses/course1.png'
import ToLike from '../ToLike'
const UserComments = ({ uid, title, describe }) => {
  const { t } = useTranslation()
  return (
    <div className="border-t-2 border-gray-100 py-4 flex gap-4">
      <img src={userImg} alt={"user-img" + uid} className='w-24 h-24 rounded-full' />
      <div className='w-full'>
        <div className='flex justify-between'>
          <h1 className='text-xl font-semibold'>مریم</h1>
          <p className='text-gray-500 text-sm'>21 تیر 1403</p>
        </div>
        <h1 className='text-lg font-semibold mt-3 '>{title}</h1>
        <p className='text-gray-500'>{describe}</p>
        <div className='flex justify-between items-center mt-3'>
          <div className='flex gap-3'>
            <button className='bg-grayCustom py-1 px-3 text-purpleCustom rounded-lg text-sm'>{t('commentAnswer')}</button>
            <div className='bg-grayCustom py-1 px-3 text-gray-500 rounded-lg text-sm'>{t('viewAnswers')}</div>
          </div>
          <div className='h-fit'>
            <ToLike likeNumber={0} disLikeNumber={0} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default UserComments