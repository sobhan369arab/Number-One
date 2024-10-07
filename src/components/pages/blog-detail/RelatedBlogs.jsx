import { useTranslation } from "react-i18next";
import { Blogs_data } from "../../../core/constants/blogs/blogs-data"
import { DateIcon } from "../../../core/icon";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import { ImportantWord, SwiperSlider } from "../../common";
import BlogCard from "../blog/BlogCard";
import { SwiperSlide } from "swiper/react";
import { useQuery } from "@tanstack/react-query";
import GetNewsFilterPage from "../../../core/services/api/GetData/GetNewsFilter";

const RelatedBlogs = ({ category }) => {
  const { t, i18n } = useTranslation();
  const apiParams = { PageNumber: 1, RowsOfPage: 4, NewsCategoryId: category }

  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ['GET_BLOGS_LIST', category],
    queryFn: async () => { return await GetNewsFilterPage(apiParams) },
  })

  const Breakpoints = {
    970: { spaceBetween: 20, slidesPerView: 3 },
    615: { spaceBetween: 30, slidesPerView: 2 },
    200: { spaceBetween: 0, slidesPerView: 1 },
  }

  return (
    <>
      {/* Side related blogs for laptop mode */}
      <MediaQuery minWidth={'1024px'}>
        <div className="bg-LightGray min-h-[300px] h-fit lg:min-w-[315px] p-5 rounded-lg">
          <h1 className="boldStyle_text text-xl">{t('Blogs')} {t('Related')}</h1>
          {isSuccess && data.news.length > 0 ? data.news.map((item) => (
            <Link key={item.id} to={`/BlogDetails/${item.id}`}>
              <div className="flex gap-x-4 items-center mt-3 py-1 cursor-pointer hover:Box-shadow1 dark:hover:Box-shadow2 duration-250 rounded-md">
                <img src={item.currentImageAddressTumb} alt="" className="h-16 w-16 rounded-md" />
                <div>
                  <div className="flex gap-2">
                    <DateIcon fill="#5751E1" height={14} width={14} />
                    <p className="mediumStyle_text text-xs">{item.updateDate.slice(0, 10)}</p>
                  </div>
                  <p className="mediumStyle_text max-w-32 text-sm line-clamp-2">{item.title}</p>
                </div>
              </div>
            </Link>
          )) : <h1 className="mediumStyle_text my-5">هیچ وبلاگ مرتبطی یافت نشد</h1>}
        </div>
      </MediaQuery>
      {/* Related news box for tablet and mobile mode */}
      <MediaQuery maxWidth={'1024px'}>
        <div className="relative">
          <div className="pt-2 pb-8 flex items-center gap-3">
            <ImportantWord>{t("Blogs")}</ImportantWord>
            <p className="text-2xl font-semibold">{t("Related")}</p>
          </div>
          <div>
            <SwiperSlider
              perView={1}
              Breakpoints={Breakpoints}
              arrowColor="#fff"
              buttonSideLeft={`top-3 h-10 w-10 ${isSuccess && data.news.length <= 3 ? "hidden" : ""} ${i18n.language === 'fa' ? "left-0" : "right-12"} `}
              buttonSideRight={`top-3 h-10 w-10 ${isSuccess && data.news.length <= 3 ? "hidden" : ""} ${i18n.language === 'fa' ? "left-12" : "right-0"} `}
              buttonColor="bg-VioletBlue"
            >
              {isSuccess && data.news.map((item, index) => (
                <SwiperSlide key={index}>
                  <BlogCard item={item} isLoading={isLoading} />
                </SwiperSlide>
              ))}
            </SwiperSlider>
          </div>
        </div>
      </MediaQuery>
    </>
  )
}

export default RelatedBlogs