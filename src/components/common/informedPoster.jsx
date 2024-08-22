import mannequin from "../../assets/images/mannequin-informedPoster.png";
import BlueButton from "./BlueButton";

const InformedPoster = () => {
    return (
        <div className="w-full h-64 flex justify-center items-center bg-informedPoster bg-cover bg-center bg-no-repeat lg:px-44 sm:px-16 px-8">
            <div className="min-w-80 w-80 h-full flex items-end ">
                <img src={mannequin} alt="Image" />
            </div>
            <div className="w-[700px] h-fit flex flex-wrap gap-y-6 mt-8">
                <h1 className="w-2/3 text-white text-3xl">میخواهید در مورد <span className="font-bold">دوره های</span> جدید <span className="font-bold">مطلع</span> باشید</h1>
                <div className="w-full flex gap-x-2">
                    <input className="w-2/3 rounded-full px-4 py-3 bg-[#4A44D1]" placeholder="ایمیل خود را تایپ کنید" type="email" />
                    <BlueButton text="اکنون مشترک شوید" Class="bg-orange border-2 border-black pt-3" ArrowColor="#000" />
                </div>
            </div>
        </div>
    )
}

export default InformedPoster
