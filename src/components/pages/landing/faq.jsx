import mannequin from "../../../assets/images/mannequin-faqPoster.png"
import { Accordion } from "react-accessible-accordion"
import { CreateAccordionItem, Label } from "../../common"
import MediaQuery from "react-responsive"
import { useTranslation } from "react-i18next"
import { faqOptions } from "../../../core/constants/landing/faq"

const Faq = () => {
  const { t, i18n } = useTranslation()
  return (
    <div className="w-full flex-wrap lg:flex-nowrap flex justify-center gap-y-10 gap-x-10 xl:gap-x-28 py-28 lg:px-44 sm:px-16 px-8 bg-gradientBackground bg-cover bg-center bg-no-repeat">
      <MediaQuery minWidth={"550px"}>
        <div className={`${i18n.language === "en" ? "reverse-img" : ""} min-w-[320px] w-[400px] h-[500px] overflow-hidden bg-white rounded-full faqMannequin_shadow flex justify-center items-end`}>
          <img className="h-[90%]" src={mannequin} alt="Mannequin" />
        </div>
      </MediaQuery>
      <div className="flex flex-wrap justify-center lg:flex-col gap-y-4 w-full lg:w-[450px] h-fit">
        <Label text={t("faqLabel")} variant="section" style="w-fit" />
        <h1 className="boldStyle_text w-full xl:w-2/3 lg:text-start text-center">{t("faqTitle")}</h1>
        <p className="mediumStyle_text text-center lg:text-start w-full">{t("faqDescription")}</p>
        <Accordion className="w-full">
          {faqOptions.map((item, index) => <CreateAccordionItem key={index} label={i18n.language === "en" ? item.label[1] : item.label[0]} content={i18n.language === "en" ? item.content[1] : item.content[0]} />)}
        </Accordion>
      </div>
    </div>
  )
}

export default Faq
