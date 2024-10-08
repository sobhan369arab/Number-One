import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import TitleSection from '../../components/partials/title-section/TitleSection'
import { Button, CreateSocialMediaItems, SwiperSlider } from '../../components/common'
import { teachers } from '../../core/constants/instructors/teachers'
import { EmailIcon, PhoneIcon, InstagramIcon, WhatsAppIcon, TwitterIcon, FacebookIcon, YouTubeIcon } from '../../core/icon'
import { FastCall, PercentageSkills, WaysToReach } from '../../components/pages/instructor-detail'
import { useTranslation } from 'react-i18next'
import BreadCrumb from '../../components/partials/title-section/BreadCrumb'

const InstructorDetail = () => {
    const { t, i18n } = useTranslation()
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
    const socialMedia = [
        { icon: <InstagramIcon fill="#5751E1" /> },
        { icon: <WhatsAppIcon fill="#5751E1" /> },
        { icon: <TwitterIcon fill="#5751E1" /> },
        { icon: <FacebookIcon fill="#5751E1" /> },
        { icon: <YouTubeIcon fill="#5751E1" /> },
    ]
    return (
        teacher != undefined ? (
            <>
                <TitleSection title={t("instructorsTitle")} >
                    <BreadCrumb href={'/instructors'} text="instructorsTitle" />
                    <BreadCrumb type='Div' text={teacher.name} />
                </TitleSection>
                <div className='lg:px-44 sm:px-16 px-8 w-full flex flex-wrap xl:flex-nowrap gap-x-10 my-20'>
                    <FastCall />
                    <div className='xl:w-3/4 h-fit flex flex-wrap gap-y-6'>
                        <div className='w-full rounded-xl flex flex-wrap md:flex-nowrap justify-center md:justify-start px-10 py-12 bg-DarkIndigo gap-x-8'>
                            <div className='w-40 h-40 sm:min-w-56 sm:h-56 rounded-full bg-white'></div>
                            <div className='w-full h-fit text-neutral-200 flex mt-8 md:mt-0 flex-wrap gap-y-4'>
                                <h1 className='w-full text-2xl text-center md:text-start'>{teacher.name}</h1>
                                <span className='w-full text-sm -mt-2 text-center md:text-start'>{teacher.skill}</span>
                                <ul className='w-full flex flex-wrap justify-center md:justify-start gap-x-4'>
                                    <WaysToReach Icon={EmailIcon} detail={"info@gmail.com"} />
                                    <WaysToReach Icon={PhoneIcon} detail={"+98 933 999 9999"} />
                                </ul>
                                <p className='text-sm text-center md:text-start'>البته در اکثر سایت‌های حرفه‌ای، از چند زبان برنامه‌نویسی استفاده می‌شود که هر کدام وظیفه خاصی را انجام می‌دهند. زبان HTML از جمله پرکاربردترین زبان‌ها است، که در اکثر سایت‌ها به شکل مستقل یا ترکیبی با سایر زبان‌ها استفاده شده است.</p>
                                <div className='w-full flex gap-x-2 justify-center md:justify-start'>
                                    {socialMedia.map((item, index) => <CreateSocialMediaItems key={index} Icon={item.icon} style="bg-white" />)}
                                </div>
                            </div>
                        </div>
                        <div className='w-full flex flex-wrap gap-y-3'>
                            <h1 className='boldStyle_text w-full md:text-start text-center'>{t("instructorCourses")}</h1>
                            <p className='w-full mediumStyle_text md:text-start text-center'>هنگامی که چاپگر شناخته شده یک گالری از نوع scrambl edmake گرفت</p>
                            <div className='w-full h-[400px] bg-SunshineYellow relative'>
                                <SwiperSlider
                                    perView={3}
                                    arrowColor="#fff"
                                    buttonSideLeft={`md:-top-[70px] -bottom-20 ${i18n.language != "en" ? "left-0" : "right-14"} h-fit p-3`}
                                    buttonSideRight={`md:-top-[70px] -bottom-20 ${i18n.language != "en" ? "left-14" : "right-0"} h-fit p-3`}
                                    buttonColor="bg-VioletBlue"
                                ></SwiperSlider>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        ) : navigate("/*")
    )
}

export default InstructorDetail