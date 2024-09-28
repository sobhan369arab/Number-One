import { useTranslation } from "react-i18next"
import { Button, FormHolder, FormInput } from "../../common"

const FastCall = () => {
    const { t } = useTranslation()
    const fields = [
        { id: 1, certificate: "name", variant: "simple", placeholder: ["نام"], fieldStyle: "!h-[45px]" },
        { id: 2, type: "email", certificate: "email", variant: "simple", placeholder: ["پست الکترونیک"], fieldStyle: "!h-[45px]" },
        { id: 3, certificate: "subject", variant: "simple", placeholder: ["موضوع"], fieldStyle: "!h-[45px]" },
        { id: 4, certificate: "phone", variant: "simple", placeholder: ["تلفن"], fieldStyle: "!h-[45px]" },
        { id: 5, certificate: "description", variant: "area", fieldStyle: "!min-h-[45px]" },
    ]
    const initialValues = { name: "", email: "", subject: "", phone: "", description: "", }

    return (
        <FormHolder
            initialValues={initialValues}
            onSubmit={(event) => { console.log(event) }}
            style='w-full xl:w-1/4 h-fit order-2 mt-32 md:mt-12 xl: xl:mt-0 xl:order-none flex flex-wrap gap-y-3 py-8 px-6 rounded-xl border border-LightGrayish shadow-lg'
        >
            <h1 className='boldStyle_text text-xl w-full'>{t("sideBarTitle")}</h1>
            <p className='mediumStyle_text text-sm w-full'>{t("sideBarDesc")}</p>
            {fields.map(item => (
                <FormInput
                    certificate={item.certificate}
                    fullSize
                    variants={item.variant}
                    placeholder={item.placeholder}
                    type={item.type}
                    key={item.id}
                    fieldStyle={item.fieldStyle}

                />
            ))}
            <Button arrowColor="#fff" text={t("sideBarBtn")} vType="button" vStyle="purple" style="xl:w-full justify-center" />
        </FormHolder>
    )
}

export default FastCall
