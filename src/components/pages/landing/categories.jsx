import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const CategoryItem = ({ title, amount }) => {
    return (
        <div className="w-32 flex flex-wrap gap-y-3 justify-center">
            <div className="w-full h-32 rounded-full border border-neutral-300 bg-gradient-to-t from-neutral-300 to-neutral-50"></div>
            <div className="w-full flex flex-wrap justify-center gap-y-1">
                <h2 className="w-full text-center text-lg">{title}</h2>
                <span className="text-sm text-neutral-400">({amount})</span>
            </div>
        </div>
    )
}


const Categories = () => {
    return (
        <div className="w-full flex flex-wrap gap-y-4 justify-center py-28 lg:px-44 sm:px-16 px-8">
            <span className="tag">دسته بندی های پرطرفدار</span>
            <h1 className="title-text text-center">دسته بندی های برتر</h1>
            <p className="text-neutral-400">امروزه به دلیل آن که ارتباطات فضای مجازی رونق زیادی یافته است</p>
            <div className="w-full bg-neutral-200/50 mt-5 flex justify-around items-center px-28 py-8 rounded-full">
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={30}
                    slidesPerView={6}
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide><CategoryItem title="مدیریت" amount={18} /></SwiperSlide>
                    <SwiperSlide><CategoryItem title="مدیریت" amount={18} /></SwiperSlide>
                    <SwiperSlide><CategoryItem title="مدیریت" amount={18} /></SwiperSlide>
                    <SwiperSlide><CategoryItem title="مدیریت" amount={18} /></SwiperSlide>
                    <SwiperSlide><CategoryItem title="مدیریت" amount={18} /></SwiperSlide>
                    <SwiperSlide><CategoryItem title="مدیریت" amount={18} /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Categories
