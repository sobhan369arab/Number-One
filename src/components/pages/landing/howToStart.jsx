import mannequin_coach from "../../../assets/images/mannequin-coach.png"
import mannequin_student from "../../../assets/images/mannequin-student.png"
import CreateRequestCard from "./createRequestCard"
import Encouragement from "./encouragementList"

const HowToStart = () => {
    const requestCards = [
        { title: "مربی شوید", paragraph: "برای مثال بی اهمیت، کدام یک از ما متعهد می شویم ورزش بدنی بله این اتفاق در اینجا می افتد.", buttonValue: "درخواست", picture: mannequin_coach },
        { title: "دانشجو شوید", paragraph: "به میلیون ها نفر از سراسر جهان بپیوندید با هم یاد می گیرند یادگیری آنلاین.", buttonValue: "درخواست", picture: mannequin_student },
    ]
    const encouragementItems = [
        { title: "با کارشناسان بیاموزید", description: "Pluralsight را انتخاب کنید محتوا برای رسیدن به شما", icon: "" },
        { title: "هر چیزی یاد بگیر", description: "Pluralsight را انتخاب کنید محتوا برای رسیدن به شما", icon: "" },
        { title: "دریافت گواهی آنلاین", description: "Pluralsight را انتخاب کنید محتوا برای رسیدن به شما", icon: "" },
        { title: "بازاریابی ایمیلی", description: "Pluralsight را انتخاب کنید محتوا برای رسیدن به شما", icon: "" },
    ]
    return (
        <div className="w-full flex flex-wrap gap-y-4 justify-center py-28 bg-[#282568] lg:px-44 sm:px-16 px-8">
            <span className="tag bg-purpleCustom text-white">چگونه سفر را شروع می کنیم</span>
            <h1 className="title-text text-center text-white">سفر یادگیری خود را از همین امروز شروع کنید!</h1>
            <p className="description-text w-1/3 text-center">اعضای شهودی Groove make team ورودی را با هم به تقسیم سازماندهی، اولویت بندی و.در این قسمت.</p>
            <ul className="w-full flex mt-10">
                {encouragementItems.map((obj, index) => <Encouragement key={index} icon={obj.icon} title={obj.title} description={obj.description} />)}
            </ul>
            <div className="w-full flex gap-x-5 mt-20">
                {requestCards.map((item, index) => <CreateRequestCard key={index} buttonValue={item.buttonValue} paragraph={item.paragraph} picture={item.picture} title={item.title} />)}
            </div>
        </div>
    )
}

export default HowToStart
