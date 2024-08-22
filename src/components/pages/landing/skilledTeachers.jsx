import BlueButton from "../../common/BlueButton"
import TeacherCard from "../../common/teacherCard"

const SkilledTeachers = () => {
    return (
        <div className="w-full flex gap-x-40 py-28 lg:px-44 sm:px-16 px-8">
            <div className="min-w-[280px] w-[280px] h-fit flex flex-wrap gap-y-4">
                <span className="tag">معلم های ماهر</span>
                <h1 className="w-full title-text">کلاس برتر ما و مربیان خبره در یک مکان</h1>
                <p className="w-full text-neutral-400">
                    هنگامی که یک چاپگر ناشناس یک گالری از نوع و
                    کتاب نمونه درهم درست شده باقی نمانده است
                    فقط پنج قرن
                </p>
                <BlueButton text="همه مربیان را ببینید" Class="mt-5 text-white bg-purpleCustom h-fit" ArrowColor="#fff" />
            </div>
            <div className="w-3/4 h-fit flex flex-wrap justify-between gap-y-10">
                <TeacherCard />
                <TeacherCard />
                <TeacherCard />
                <TeacherCard />
            </div>
        </div>
    )
}

export default SkilledTeachers
