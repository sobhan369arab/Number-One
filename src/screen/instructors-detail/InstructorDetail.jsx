import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import TitleSection from '../../components/partials/title-section/TitleSection'
import { Button, CreateSocialMediaItems, SwiperSlider } from '../../components/common'
import { teachers } from '../../core/constants/instructors/teachers'
import { EmailIcon, PhoneIcon, InstagramIcon, WhatsAppIcon, TwitterIcon, FacebookIcon, YouTubeIcon } from '../../core/icon'
import { PercentageSkills, WaysToReach } from '../../components/pages/instructor-detail'

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
    const socialMedia = [
        { icon: <InstagramIcon fill="#5751E1" /> },
        { icon: <WhatsAppIcon fill="#5751E1" /> },
        { icon: <TwitterIcon fill="#5751E1" /> },
        { icon: <FacebookIcon fill="#5751E1"/> },
        { icon: <YouTubeIcon fill="#5751E1"/> },
    ]
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
                            <div className='w-full h-fit text-neutral-200 flex flex-wrap gap-y-4'>
                                <h1 className='w-full text-2xl'>{teacher.name}</h1>
                                <span className='text-sm -mt-2'>{teacher.skill}</span>
                                {/* Change */}
                                <ul className='w-full flex gap-x-4 h-6'>
                                    <WaysToReach Icon={EmailIcon} detail={"info@gmail.com"} />
                                    <WaysToReach Icon={PhoneIcon} detail={"+98 933 999 9999"} />
                                </ul>
                                <p className='text-sm'>البته در اکثر سایت‌های حرفه‌ای، از چند زبان برنامه‌نویسی استفاده می‌شود که هر کدام وظیفه خاصی را انجام می‌دهند. زبان HTML از جمله پرکاربردترین زبان‌ها است، که در اکثر سایت‌ها به شکل مستقل یا ترکیبی با سایر زبان‌ها استفاده شده است.</p>
                                <div className='w-full flex gap-x-2'>
                                    {socialMedia.map((item, index) => <CreateSocialMediaItems key={index} Icon={item.icon} style="bg-white" />)}
                                </div>
                            </div>
                        </div>
                        <div className='holder_instructor_style'>
                            <h1 className='boldStyle_text text-2xl'>زندگینامه</h1>
                            <p className='mediumStyle_text'>امروزه به دلیل آن که ارتباطات فضای مجازی رونق زیادی یافته است، طراحی یک سایت به شکل مناسب و مورد پسند کاربران متفاوت، اهمیت بالایی یافته است. به همین جهت صاحبان سرمایه و کار، برای رونق کار خود به دنبال طراحان حرفه‌ای برای طراحی سایتی مناسب و کارآمد هستند؛ لذا یادگیری روش‌های مناسب و به‌روز طراحی سایت، مورد توجه بسیاری از علاقه‌مندان و کارجویان قرار گرفته است.</p>
                        </div>
                        <div className='holder_instructor_style'>
                            <h1 className='boldStyle_text text-2xl'>مهارت ها</h1>
                            <p className='mediumStyle_text'>البته در اکثر سایت‌های حرفه‌ای، از چند زبان برنامه‌نویسی استفاده می‌شود که هر کدام وظیفه خاصی را انجام می‌دهند. زبان HTML از جمله پرکاربردترین زبان‌ها است، که در اکثر سایت‌ها به شکل مستقل یا ترکیبی با سایر زبان‌ها استفاده شده است.</p>
                            <div className='w-full flex flex-wrap gap-y-4'>
                                <PercentageSkills skillName="ریکت" percentage="65%" />
                                <PercentageSkills skillName="پی اچ پی" percentage="88%" />
                                <PercentageSkills skillName="جاوا" percentage="55%" />
                                <PercentageSkills skillName="انگولار" percentage="40%" />
                            </div>
                        </div>
                        <div className='w-full flex flex-wrap gap-y-3'>
                            <h1 className='boldStyle_text w-full'>دوره های من</h1>
                            <p className='mediumStyle_text'>هنگامی که چاپگر شناخته شده یک گالری از نوع scrambl edmake گرفت</p>
                            <div className='w-full h-[400px] bg-yellowCustom relative'>
                                <SwiperSlider
                                    perView={3}
                                    arrowColor="#fff"
                                    buttonSideLeft="-top-[70px] left-0"
                                    buttonSideRight="-top-[70px] left-14"
                                    buttonColor="bg-purpleCustom"
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
