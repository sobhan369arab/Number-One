import { useTranslation } from "react-i18next"
import { Label, SwiperSlider } from "../../common"
import { useSelector } from "react-redux"
import { GetNewsFilterPage } from "../../../core/services/api/News"
import { useEffect, useState } from "react"
import { BlogCard } from "../blog"
import { SwiperSlide } from "swiper/react"

const LastBlogs = () => {
  const { t } = useTranslation()
  const theme = useSelector(state => state.DarkMode)
  const [blogList, setBlogList] = useState([])

  const getNews = async () => {
    const apiParams = { PageNumber: 1, RowsOfPage: 10 }
    let blogs = await GetNewsFilterPage(apiParams)
    setBlogList(blogs.news)
  }

  useEffect(() => {
    getNews()
  }, [])

  return (
    <div className={`w-full py-28 lg:px-44 sm:px-16 px-8 flex flex-wrap gap-y-4 justify-center ${theme ? "bg-gradientBackgroundDark" : "bg-gradientBackground"} bg-cover bg-center bg-no-repeat`}>
      <Label text={t("lastBlogsLabel")} variant="bgGray" />
      <h1 className="boldStyle_text w-full text-center">{t("lastBlogsTitle")}</h1>
      <p className="mediumStyle_text text-center">{t("lastBlogsDesc")}</p>
      <div className="max-[680px]:w-[300px] w-[110%] mt-5 relative">
        <SwiperSlider
          perView={4}
          arrowColor="#fff"
          buttonSideLeft="hidden"
          buttonSideRight="hidden"
          buttonColor="bg-VioletBlue"
        >
          {blogList.map(item => (
            <SwiperSlide key={item.id}>
              <BlogCard
                id={item.id}
                title={item.title}
                images={item.addUserProfileImage}
                category={item.newsCatregoryName}
                date={item.updateDate}
                like={item.currentLikeCount}
                disLike={item.currentDissLikeCount}
                view={item.currentView}
                bio={item.miniDescribe}
              />
            </SwiperSlide>
          ))}
        </SwiperSlider>
      </div>
    </div>
  )
}

export default LastBlogs
