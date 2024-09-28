import { Button, Label, TeacherCard, SwiperSlider } from "../../common"
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import MediaQuery from "react-responsive";
import { useTranslation } from "react-i18next";

const SkilledTeachers = () => {
    const { t } = useTranslation()
    return (
        <div className="w-full flex flex-wrap xl:flex-nowrap justify-center xl:justify-between gap-y-12 py-28 lg:px-44 sm:px-16 px-8">
            <div className="min-w-[280px] w-full xl:w-[280px] h-fit flex justify-center xl:justify-start flex-wrap gap-y-4">
                <Label text={t("skilledTeachersLabel")} variant="bgGray" />
                <h1 className="w-full text-center xl:text-start boldStyle_text">{t("skilledTeachersTitle")}</h1>
                <p className="w-full text-center xl:text-start text-neutral-400">{t("skilledTeachersDesc")}</p>
                <Button text={t("skilledTeachersBtn")} style="mt-5" variant={"purple"} arrowColor="#fff" />
            </div>
            <div className="w-full xl:w-[640px] h-fit flex flex-wrap justify-between gap-y-10 relative">
                <MediaQuery minWidth={"700px"}>
                    <TeacherCard />
                    <TeacherCard />
                    <TeacherCard />
                    <TeacherCard />
                </MediaQuery>
                <MediaQuery maxWidth={"700px"}>
                    <SwiperSlider
                        perView={1}
                        arrowColor="#000"
                        buttonSideLeft="top-[30px] xl:left-[40px] left-[5px] z-20 p-3"
                        buttonSideRight="top-[30px] xl:right-[40px] right-[5px] z-20 p-3"
                        buttonColor="bg-SunshineYellow"
                    >
                        <SwiperSlide className="justify-center flex"><TeacherCard /></SwiperSlide>
                        <SwiperSlide className="justify-center flex"><TeacherCard /></SwiperSlide>
                        <SwiperSlide className="justify-center flex"><TeacherCard /></SwiperSlide>
                        <SwiperSlide className="justify-center flex"><TeacherCard /></SwiperSlide>
                    </SwiperSlider>
                </MediaQuery>
            </div>
        </div>
    )
}

export default SkilledTeachers
