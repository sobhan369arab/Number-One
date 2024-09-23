import { useTranslation } from "react-i18next"
import ToLike from "../../ToLike"

const DownSection = () => {
  const { t } = useTranslation()
  return (
    <div className='flex justify-between items-center mt-3'>
      <div className='flex gap-3'>
        <button className='bg-grayCustom py-1 px-3 text-purpleCustom rounded-lg text-sm'>{t('commentAnswer')}</button>
        <div className='bg-grayCustom py-1 px-3 text-gray-500 rounded-lg text-sm'>{t('viewAnswers')}</div>
      </div>
      <div className='h-fit'>
        <ToLike likeNumber={0} disLikeNumber={0} />
      </div>
    </div>
  )
}

export default DownSection