import React from 'react'
import { DateIcon } from '../../../core/icon'
import { useTranslation } from 'react-i18next'

const CourseDownBody = ({
  price,
  date
}) => {
  const {t} = useTranslation()
  return (
    <div className='border-t-2 border-gray-400/30 pt-5 mt-5 flex justify-between'>
      <div className='flex gap-1'>
        <DateIcon height={20} width={17}/>
        <h1 className="line-clamp-1 text-gray-500">{date}</h1>
      </div>
      <div className='text-blue-600 font-semibold'>{price}<span className='text-gray-500 mx-1'>{t('priceCount')}</span></div>
    </div>
  )
}

export default CourseDownBody