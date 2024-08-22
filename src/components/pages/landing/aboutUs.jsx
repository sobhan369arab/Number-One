import aboutUs_poster from "../../../assets/images/aboutus_landing.png"
import liveClass_icon from "../../../assets/images/liveClass.png"
import { BlueButton, ImportantWord, OptionParts } from "../../common"
import { PlayIcon } from "../../../core/icon"

const AboutUs = () => {
  const options = ["بهترین مربیان", "از هر کجا به کلاس خود دسترسی داشته باشید", "برنامه دوره ای انعطاف پذیر"]
  return (
    <div className="w-full flex justify-center gap-x-12 pb-28 lg:px-44 sm:px-16 px-8">
      <div className="w-[400px] mt-20 relative group">
        <img className="w-20 absolute left-28 -top-10 transition-all duration-200 group-hover:-top-14" src={liveClass_icon} alt="Live Class" />
        <button className="w-14 h-14 hover:scale-105 transition-all duration-300 rounded-full absolute top-[40%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
          <PlayIcon width="55px" />
        </button>
        <img src={aboutUs_poster} alt="Poster" />
        <div className="w-44 p-2 h-24 rounded-lg bg-white absolute -bottom-14 -right-20 border-2 border-neutral-300 drop-shadow-xl">
          <h1 className="text-center text-[#161439] text-sm">بیش از 36 هزار دانشجوی ثبت نام شده</h1>
          <ul className="w-full h-1/2 flex justify-center items-end">
            <li className={`bg-yellow-100 min-w-9 h-9 rounded-full -mr-4`}></li>
          </ul>
        </div>
      </div>
      <div className="w-2/5 h-fit flex flex-wrap gap-y-3">
        <span className="tag">درباره ما بیشتر بدانید</span>
        <div className="w-full flex h-fit gap-x-3 items-end">
          <h1 className="title-text w-auto">هزاران</h1>
          <ImportantWord>دوره های</ImportantWord>
        </div>
        <h1 className="title-text">برتر اکنون در یک مکان</h1>
        <p className="w-full description-text">
          صندوق ورودی مشترک بصری Groove این کار را برای اعضای تیم آسان می کند
          سازماندهی، اولویت بندی و. در این قسمت از Smashing Pod ما هستیم
          صحبت در مورد پایه پلتفرم وب.
        </p>
        <ul className="w-full flex flex-wrap gap-y-3">
          {options.map((item, index) => (<OptionParts key={index} text={item} />))}
        </ul>
        <BlueButton text="رایگان آزمایش کنید" Class="mt-5 text-white bg-purpleCustom h-fit" ArrowColor="#fff" />
      </div>
    </div>
  )
}

export default AboutUs
