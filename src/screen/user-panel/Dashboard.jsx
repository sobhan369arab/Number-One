import React from 'react'
import { BasketIcon, HatIcon, NotificationIcon } from '../../core/icon'
import { LatestBlogs, UserCourseStatus, UserCoursesSection, CreateCourse } from '../../components/pages/user-panel'
import { CircularProgress } from "@nextui-org/react";
import { useTranslation } from 'react-i18next';

const Dashboard = () => {
  const progressAmount = 60
  const { t, i18n } = useTranslation()
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
    <div className='w-full h-fit flex flex-wrap px-10'>
      <div className='w-full h-fit flex justify-between'>
        <div className='flex gap-x-8'>
          <UserCourseStatus Icon={HatIcon} amount={4} description={t("participateInCourse")} />
          <UserCourseStatus Icon={BasketIcon} amount={2} description={t("reservationInCourse")} />
        </div>
        <div className='w-[300px] h-20 flex gap-x-4 items-center justify-end'>
          {progressAmount < 80 ?
            <p className='w-full text-center text-neutral-400'>{t("progressTip")}</p> : null
          }
          <CircularProgress
            classNames={{
              svg: "w-28 h-28 drop-shadow-md",
              indicator: "text-yellowCustom",
              track: "stroke-black/5 border-2 border-red-500",
              value: "text-3xl text-black text-purpleCustom",
            }}
            value={progressAmount}
            strokeWidth={2}
            showValueLabel={true}
          />
        </div>
      </div>
      <div className='w-full bg-[#C8C1ED]/40 shadow-lg rounded-xl mt-16 relative py-8 px-10 flex flex-wrap gap-y-2'>
        <div className='userPanel_icons -top-6 left-12'>
          <NotificationIcon />
        </div>
        <h1 className='boldStyle_text w-full text-xl'>{t("latestNewsAndBlogs")}</h1>
        <div className='w-full h-fit flex flex-wrap text-neutral-500 gap-y-3'>
          {lastBlogs.map(obj => <LatestBlogs key={obj.id} name={obj.name} date={obj.date} />)}
        </div>
      </div>
      <div className='w-full border-t border-neutral-200 py-8 mt-8 flex gap-x-14'>
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
