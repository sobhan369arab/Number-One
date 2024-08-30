import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import TitleSection from '../../components/partials/title-section/TitleSection'
import { Button } from '../../components/common'
import { teachers } from '../../core/constants/instructors/teachers'

const InstructorDetail = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [teacher, setTeacher] = useState()
    useEffect(() => {
        let findTeacher = teachers.find(obj => obj.id == id)
        if (findTeacher != undefined) {
            setTeacher(findTeacher)
        } else {
            setTeacher(null)
        }
    }, [])
    return (
        teacher != undefined ? (
            <>
                <TitleSection title="همه مربیان" />
                <div className='lg:px-44 sm:px-16 px-8 w-full flex gap-x-10 my-20'>
                    <div className='w-1/4 h-fit flex flex-wrap gap-y-3 py-8 px-6 rounded-xl border border-neutral-300 shadow-lg'>
                        <h1 className='boldStyle_text text-xl w-full'>تماس سریع</h1>
                        <p className='mediumStyle_text text-sm w-full'>از طریق تماس با ما راحت باشید اگر ترجیح می دهید توییتر یا فیس بوک!</p>
                        <Button arrowColor="#fff" text="پیام فرستادن" variant="purple" style="w-full justify-center" />
                    </div>
                    <div className='w-3/4 h-fit flex flex-wrap gap-y-6'>
                        <div className='w-full rounded-xl flex px-10 py-12 bg-titleColor gap-x-8'>
                            <div className='min-w-56 h-56 rounded-full bg-white'></div>
                            <div className='w-full h-fit text-white flex flex-wrap gap-y-4'>
                                <h1 className='w-full text-2xl'>{teacher.name}</h1>
                                <span className='text-sm -mt-2'>{teacher.skill}</span>
                                <div className='w-full flex gap-x-4 h-6 bg-red-500'></div>
                                <p className='text-sm'>
                                    البته در اکثر سایت‌های حرفه‌ای، از چند زبان برنامه‌نویسی استفاده می‌شود که هر کدام وظیفه خاصی را انجام می‌دهند. زبان HTML از جمله پرکاربردترین زبان‌ها است، که در اکثر سایت‌ها به شکل مستقل یا ترکیبی با سایر زبان‌ها استفاده شده است.
                                </p>
                                <div className='w-full h-10 bg-red-400'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        ) : navigate("/*")
    )
}

export default InstructorDetail
