import React from 'react'
import { BasketIcon, HatIcon, NotificationIcon } from '../../core/icon'
import { LatestBlogs, UserCourseStatus, UserCoursesSection, CreateCourse } from '../../components/pages/user-panel'
import { CircularProgress } from "@nextui-org/react";
import { useTranslation } from 'react-i18next';

const Dashboard = () => {
  const progressAmount = 60
  const { t } = useTranslation()
  const lastBlogs = [
    { id: 1, name: "دوره آموزش جامع از پایه تا پیشرفته  Next.js منتشر شد.", date: "۱۴۰۴ / ۱۱ / ۳۰" },
    { id: 2, name: "تخفیف ویژه دوره ری اکت را از دست ندهید .", date: "۱۴۰۴ / ۱۱ / ۲۵" },
    { id: 3, name: "دوره آموزش  tailwind  به روز شد.", date: "۱۴۰۴ / ۱۱ / ۲۳" },
  ]
  const currentCourse = [
    { name: "آموزش Tailwind css", teacher: "مهدی اصغری", date: "چهارشنبه ها . ۱۷:۳۰" },
    { name: "آموزش کار با API", teacher: "محسن اسفندیاری", date: "" },
  ]
  return (
    <div className='w-full h-fit flex flex-wrap lg:px-10'>
      <div className='w-full h-fit flex gap-y-20 flex-wrap lg:flex-nowrap justify-evenly lg:justify-between'>
        <div className='w-full md:w-1/2 order-2 md:order-none flex flex-wrap sm:flex-nowrap md:flex-wrap lg:flex-nowrap justify-center sm:justify-between lg:justify-start gap-8'>
          <UserCourseStatus Icon={HatIcon} amount={4} description={t("participateInCourse")} />
          <UserCourseStatus Icon={BasketIcon} amount={2} description={t("reservationInCourse")} />
        </div>
        <div className='w-[300px] h-20 lg:mb-0 mb-32 flex flex-wrap lg:flex-nowrap gap-4 items-center justify-center lg:justify-end'>
          {progressAmount < 80 ?
            <p className='w-full text-center order-2 lg:order-none mediumStyle_text'>{t("progressTip")}</p> : null
          }
          <CircularProgress
            classNames={{
              svg: "w-40 h-40 lg:w-28 lg-h-28 drop-shadow-md",
              indicator: "text-SunshineYellow",
              track: "stroke-black/5 border-2 border-red-500",
              value: "text-3xl text-black text-VioletBlue",
            }}
            value={progressAmount}
            strokeWidth={2}
            showValueLabel={true}
          />
        </div>
      </div>
      <div className='w-full bg-[#C8C1ED]/40 dark:bg-[#C8C1ED]/10 shadow-lg rounded-xl mt-16 relative py-8 px-10 flex flex-wrap gap-y-2'>
        <div className='userPanel_icons -top-6 left-[50%] translate-x-[-50%] sm:left-12'>
          <NotificationIcon />
        </div>
        <h1 className='boldStyle_text w-full text-xl text-center sm:text-start'>{t("latestNewsAndBlogs")}</h1>
        <div className='w-full h-fit flex flex-wrap mediumStyle_text gap-y-3'>
          {lastBlogs.map(obj => <LatestBlogs key={obj.id} name={obj.name} date={obj.date} />)}
        </div>
      </div>
      <div className='w-full border-t border-neutral-200 dark:border-gray-400/30 py-8 mt-8 flex flex-wrap lg:flex-nowrap gap-x-14 gap-y-10 lg:gap-y-0'>
        <UserCoursesSection sectionName={t("currentCourses")}>
          {currentCourse.map((item, index) => <CreateCourse key={index} date={item.date} nameCourse={item.name} teacher={item.teacher} />)}
        </UserCoursesSection>
        <UserCoursesSection sectionName={t("suggestedCourses")}>
          {currentCourse.map((item, index) => <CreateCourse key={index} date={item.date} nameCourse={item.name} teacher={item.teacher} />)}
        </UserCoursesSection>
      </div>
    </div>
  )
}

export default Dashboard
