import { SwiperSlide } from "swiper/react"

const RenderItemsSlider = ({ isLoading, skeletonData, originalData, RenderComponent, isSuccess, isError, notFoundText, refetchData, ...props }) => {
    if (isLoading) {
        return (
            skeletonData.map((item, index) => (
                <SwiperSlide key={index}>
                    <RenderComponent item={item} isLoading={isLoading} {...props} />
                </SwiperSlide>
            ))
        )
    } else if (isSuccess) {
        return (
            originalData?.map((item, index) => (
                <SwiperSlide key={index}>
                    <RenderComponent item={item} isLoading={isLoading} refetch={refetchData} {...props} />
                </SwiperSlide>
            ))
        )
    } else if (isError) {
        return <h1>موردی یافت نشد</h1>
    }
}

export default RenderItemsSlider