import { useTranslation } from "react-i18next"
import BlueButton from "../../common/BlueButton"

const Field = ({ placeholder }) => {
    return (
        <input className="w-full sm:w-1/3 h-12 border-2 border-neutral-200 outline-none rounded-md px-4" placeholder={placeholder} type="text" name="field" />
    )
}

export const Main = () => {
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
                            return (<Field key={obj.id} placeholder={obj.name[0]} />)
                        } else {
                            return (<Field key={obj.id} placeholder={obj.name[1]} />)
                        }
                    })}
                </div>
                <BlueButton ArrowColor={"black"} Class={"w-40 border-2 border-black bg-orange text-black font-bold"} text={t("submit")} />
            </div>
        </div>
    )
}