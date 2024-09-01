import { useTranslation } from "react-i18next"
import { Button } from "../../common"

const CreateRequestCard = ({ title, picture, paragraph, buttonValue }) => {
    const { i18n } = useTranslation()
    return (
        <div className={`mobile:w-full mobile:justify-start w-1/2 min-h-52 flex flex-wrap justify-center md:justify-start bg-white rounded-2xl relative overflow-hidden px-10 ${i18n.language === "en" ? "xl:pl-52" : "xl:pr-52"} py-8 gap-y-2`}>
            <div className={`hidden xl:block w-[224px] h-[200px] absolute -bottom-20 ${i18n.language === "en" ? "-left-8 rotate-[100deg]" : "-right-8 rotate-[25deg]"} specialRadius bg-yellowCustom`}>
                <img className={`h-44 absolute bottom-10 right-20 ${i18n.language === "en" ? "rotate-[-100deg] scale-x-[-1] bottom-6 right-24" : "rotate-[-25deg]"}`} src={picture} alt="mannequin" />
            </div>
            <h1 className="boldStyle_text w-full mobile:text-start text-center md:text-start">{title}</h1>
            <p className="mediumStyle_text w-full mobile:text-start text-center md:text-start">
                {paragraph}
            </p>
            <Button text={buttonValue} arrowColor="#fff" variant={"purple"} />
        </div>
    )
}

export default CreateRequestCard
