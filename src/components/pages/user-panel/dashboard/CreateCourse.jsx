import React from 'react'

const CreateCourse = ({nameCourse, date, teacher}) => {
    return (
        <div className='w-full h-20 rounded-xl p-2 flex gap-x-2'>
            <div className='w-full flex flex-wrap'>
                <span className='boldStyle_text font-IranSans text-base'>{nameCourse}</span>
                <div className='w-full flex justify-between text-sm text-purpleCustom'>
                    <span>{teacher}</span>
                    <span className='text-yellowCustom'>{date}</span>
                </div>
            </div>
            <div className='min-w-24 h-full rounded-xl bg-yellow-200'></div>
        </div>
    )
}

export default CreateCourse
