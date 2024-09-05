import { useTranslation } from "react-i18next"
import { Button } from "../../common"
import ContactField from "./ContactField"

const ContactMain = () => {
    const { t, i18n } = useTranslation()
    const fields = [
        { id: 1, name: ["نام *", "Name *"] },
        { id: 2, name: ["پست الکترونیک *", "E-mail *"] },
        { id: 3, name: ["سایت اینترنتی *", "Website *"] },
    ]

    return (
        <div className="w-full xl:w-4/6 xl:h-full flex items-center bg-blueGray border-2 border-grayBorder rounded-lg p-4 xl:p-8">
            <div className="w-full h-fit flex flex-wrap gap-y-4">
                <h1 className="w-full text-3xl font-bold">{t("contactUsCaption")}</h1>
                <p className="w-full text-sm text-neutral-500">{t("contactUsDescription")}</p>
                <textarea className="w-full max-h-60 min-h-60 p-4 outline-none border-2 border-neutral-200 rounded-md" name="contactUs"></textarea>
                <div className="w-full flex flex-wrap sm:flex-nowrap gap-4">
                    {fields.map(obj => {
                        if (i18n.language === "fa") {
                            return (<ContactField key={obj.id} placeholder={obj.name[0]} />)
                        } else {
                            return (<ContactField key={obj.id} placeholder={obj.name[1]} />)
                        }
                    })}
                </div>
                <Button arrowColor="#000" vStyle="yellow" vType="button" text="submit" />
            </div>
        </div>
    )
}

export default ContactMain