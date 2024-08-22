import mannequin from "../../../assets/images/mannequin-faqPoster.png"
import { Accordion } from "react-accessible-accordion"
import { CreateAccordionItem } from "../../common"

const Faq = () => {
  const options = [
    { label: "نامبر وان می خواهد به شما چه چیزی دهد؟", content: "صندوق ورودی مشترک بصری Groove سازماندهی اعضای تیم را آسان می کند در این قسمت نه تنها پنج قرن زنده ماند چاپگر ناشناخته یک گالری از نوع و درهم گرفت." },
    { label: "چرا ما را برای تحصیل خود انتخاب کنید؟", content: "صندوق ورودی مشترک بصری Groove سازماندهی اعضای تیم را آسان می کند در این قسمت نه تنها پنج قرن زنده ماند چاپگر ناشناخته یک گالری از نوع و درهم گرفت." },
    { label: "چگونه خدماتی را برای شما ارائه می کنیم؟", content: "صندوق ورودی مشترک بصری Groove سازماندهی اعضای تیم را آسان می کند در این قسمت نه تنها پنج قرن زنده ماند چاپگر ناشناخته یک گالری از نوع و درهم گرفت." },
    { label: "آیا برای دوره خود مقرون به صرفه هستید؟", content: "صندوق ورودی مشترک بصری Groove سازماندهی اعضای تیم را آسان می کند در این قسمت نه تنها پنج قرن زنده ماند چاپگر ناشناخته یک گالری از نوع و درهم گرفت." },
  ]
  return (
    <div className="w-full flex justify-center gap-x-28 py-28 lg:px-44 sm:px-16 px-8 bg-gradientBackground bg-cover bg-center bg-no-repeat">
      <div className="w-[400px] h-[500px] overflow-hidden bg-white rounded-full goalsPoster_shadow flex justify-center items-end">
        <img className="h-[90%]" src={mannequin} alt="Mannequin" />
      </div>
      <div className="flex flex-wrap flex-col gap-y-4 w-[450px] h-fit">
        <span className="tag w-fit">سوالات متداول</span>
        <h1 className="title-text w-2/3">شروع به تمرین از مربیان حرفه ای جهان</h1>
        <p className="description-text w-full">صندوق ورودی مشترک بصری Groove این کار را برای اعضای تیم آسان می کند دهی، اولویت بندی و.در این قسمت.</p>
        <Accordion className="w-full">
          {options.map((item, index) => <CreateAccordionItem key={index} label={item.label} content={item.content} />)}
        </Accordion>
      </div>
    </div>
  )
}

export default Faq
