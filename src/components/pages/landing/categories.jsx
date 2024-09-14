import { SwiperSlide } from "swiper/react"
import { Label, SwiperSlider } from "../../common/index"
import { useTranslation } from "react-i18next"
import { categoryItems } from "../../../core/constants/landing/category"
import CategoryItem from "./CreateCategoryItem"

const Categories = () => {
    const { t, i18n } = useTranslation()
    const Breakpoints = {
        1280: { spaceBetween: 20, slidesPerView: 6 },
        1180: { spaceBetween: 60, slidesPerView: 4 },
        870: { spaceBetween: 20, slidesPerView: 4 },
        600: { spaceBetween: 20, slidesPerView: 3 },
        500: { spaceBetween: 50, slidesPerView: 2 },
        445: { spaceBetween: 20, slidesPerView: 2 },
        400: { spaceBetween: 10, slidesPerView: 2 },
        300: { spaceBetween: 0, slidesPerView: 1 },
    }
    return (
        <div className="w-full flex flex-wrap gap-y-4 justify-center py-28 lg:px-44 sm:px-16 px-8">
            <Label text={t("categoryLabel")} variant="section" />
            <h1 className="boldStyle_text w-full text-center">{t("categoryTitle")}</h1>
            <p className="mediumStyle_text text-center">{t("categoryDescription")}</p>
            <div className="w-full relative bg-neutral-200/50 mt-5 flex justify-center items-center px-20 xl:px-28 py-8 rounded-full">
                <SwiperSlider
                    perView={6}
                    Breakpoints={Breakpoints}
                    arrowColor="#000"
                    buttonSideLeft="top-[100px] xl:left-[40px] left-[20px] h-12 w-12"
                    buttonSideRight="top-[100px] xl:right-[40px] right-[20px] h-12 w-12"
                    buttonColor="bg-yellowCustom"
                >
                    {categoryItems.map((item, index) => (<SwiperSlide key={index}><CategoryItem amount={item.count} title={i18n.language === "en" ? item.name[1] : item.name[0]} /></SwiperSlide>))}
                </SwiperSlider>
            </div>
        </div >
    )
}

export default Categories
