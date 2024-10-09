import React, { useEffect, useState } from 'react'
import { BasketIcon, HatIcon, NotificationIcon } from '../../core/icon'
import { LatestBlogs, UserCourseStatus, UserCoursesSection, CreateCourse } from '../../components/pages/user-panel'
import { CircularProgress } from "@nextui-org/react";
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import GetNewsFilterPage from '../../core/services/api/GetData/GetNewsFilter';
import GetMyCoursesReserve from '../../core/services/api/GetData/GetMyCoursesReserve';
import GetMyCourses from '../../core/services/api/GetData/GetMyCourses';
import GetCoursesTop from '../../core/services/api/GetData/GetCoursesTop.js';

const Dashboard = () => {
  const [progressAmount, setProgressAmount] = useState(0)
  const userInfo = useSelector(state => state.UserInfo.info)
  const { t } = useTranslation()

  useEffect(() => {
    if (!userInfo) return
    setProgressAmount(userInfo.profileCompletionPercentage)
  }, [progressAmount])

  const { data: lastBlogs, isSuccess } = useQuery({
    queryKey: ['GET_LAST_BLOGS'],
    queryFn: () => { return GetNewsFilterPage({ PageNumber: 1, RowsOfPage: 10, SortingCol: "updateDate" }) }
  })

  const myReserveCourse = useQuery({
    queryKey: ['MY_RESERVE_COURSE_LIST'],
    queryFn: GetMyCoursesReserve
  })

  const myCourseList = useQuery({
    queryKey: ['MY_COURSE_LIST'],
    queryFn: () => { return GetMyCourses({ PageNumber: 1, RowsOfPage: 1 }) }
  })

  const suggestionCourseList = useQuery({
    queryKey: ['SUGGESTION_COURSE_LIST'],
    queryFn: () => { return GetCoursesTop(2) }
  })

  return (
    <div className='w-full h-fit flex flex-wrap lg:px-10'>
      <div className='w-full h-fit flex gap-y-20 flex-wrap lg:flex-nowrap justify-evenly lg:justify-between'>
        <div className='w-full md:w-1/2 order-2 md:order-none flex flex-wrap sm:flex-nowrap md:flex-wrap lg:flex-nowrap justify-center sm:justify-between lg:justify-start gap-8'>
          <UserCourseStatus Icon={HatIcon} amount={myCourseList.isSuccess && myCourseList.data.totalCount} description={t("participateInCourse")} />
          <UserCourseStatus Icon={BasketIcon} amount={myReserveCourse.isSuccess && myReserveCourse.data.length} description={t("reservationInCourse")} />
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
          {isSuccess && lastBlogs.news.slice(0, 3).map(obj => <LatestBlogs key={obj.id} name={obj.title} date={obj.updateDate.slice(0, 10)} id={obj.id} />)}
        </div>
      </div>
      <div className='w-full border-t border-neutral-200 dark:border-gray-400/30 py-8 mt-8 flex flex-wrap lg:flex-nowrap gap-x-14 gap-y-10 lg:gap-y-0'>
        <UserCoursesSection sectionName={t("currentCourses")}>
          {myCourseList.isSuccess && myCourseList.data.listOfMyCourses.map((item, index) => (
            <CreateCourse
              key={index}
              picture={item.tumbImageAddress}
              price={item.cost}
              teacher={item.fullName}
              title={item.courseTitle}
            />
          ))}
        </UserCoursesSection>
        <UserCoursesSection href={"/course?V=1"} sectionName={t("suggestedCourses")}>
          {suggestionCourseList.isSuccess && suggestionCourseList.data.map((item, index) => (
            <CreateCourse
              key={index}
              picture={item.tumbImageAddress}
              price={item.cost}
              teacher={item.teacherName}
              title={item.title}
            />
          ))}
        </UserCoursesSection>
      </div>
    </div>
  )
}

export default Dashboard
