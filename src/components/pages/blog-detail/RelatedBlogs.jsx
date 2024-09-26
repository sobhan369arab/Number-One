import { useTranslation } from "react-i18next";
import { Blogs_data } from "../../../core/constants/blogs/blogs-data"
import { DateIcon } from "../../../core/icon";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import { ImportantWord, SwiperSlider } from "../../common";
import BlogCard from "../blog/BlogCard";
import { SwiperSlide } from "swiper/react";

const RelatedBlogs = ({ category }) => {
  const { t, i18n } = useTranslation();

  const LatestBlogs = Blogs_data.filter(items => items.category === category);
  const Breakpoints = {
    970: { spaceBetween: 20, slidesPerView: 3 },
    615: { spaceBetween: 30, slidesPerView: 2 },
    200: { spaceBetween: 0, slidesPerView: 1 },
  }
  return (
    <>
      {/* Side related blogs for laptop mode */}
      <MediaQuery minWidth={'1024px'}>
        <div className="bg-LightGray h-fit lg:w-[315px] p-5 rounded-lg">
          <h1 className="text-xl font-semibold text-DarkBlue">{t('Blogs')} {t('Related')}</h1>
          {LatestBlogs.map((item) => (
            <Link key={item.id} to={`/BlogDetails/${item.id}`}>
              <div className="flex gap-x-4 items-center mt-3 py-1 cursor-pointer hover:Box-shadow2 duration-250">
                <img src={item.img} alt={'img' + item.id} className="h-16 w-16 rounded-md" />
                <div>
                  <div className="flex gap-2">
                    <DateIcon fill="#5751E1" height={14} width={14} />
                    <p className="mediumStyle_text text-xs">{item.date}</p>
                  </div>
                  <p className="mediumStyle_text text-sm w-20 line-clamp-2 ">{item.title}</p>
                </div>
              </div>
            </Link>
          ))}
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
              buttonSideLeft={`top-3 h-10 w-10 ${LatestBlogs.length <= 3 ? "hidden" : ""} ${i18n.language === 'fa' ? "left-0" : "right-12"} `}
              buttonSideRight={`top-3 h-10 w-10 ${LatestBlogs.length <= 3 ? "hidden" : ""} ${i18n.language === 'fa' ? "left-12" : "right-0"} `}
              buttonColor="bg-VioletBlue"
            >
              {LatestBlogs.map((item) => (
                <SwiperSlide key={item.id}>
                  <BlogCard
                    id={item.id}
                    title={item.title}
                    images={item.img}
                    category={item.category}
                    date={item.date}
                    like={item.like}
                    disLike={item.disLike}
                    view={item.view}
                    bio={item.bio}
                  />
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