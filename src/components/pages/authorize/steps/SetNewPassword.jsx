import { useTranslation } from "react-i18next"
import { FormInput, FormHolder, Button } from "../../../common"
import * as yup from "yup"

const SetNewPassword = () => {
    const { t,i18n } = useTranslation()
    const setNewPasswordValidation = yup.object().shape({
        password: yup.string().required("این فیلد الزامیست!")
    });
    return (
        <FormHolder
            initialValues={{ password: "" }}
            onSubmit={(event) => { console.log(event) }}
            validations={setNewPasswordValidation}
            style="w-full"
        >
            <h1 className='boldStyle_text w-full mb-5'>{t("SetNewPasswordCaption")}</h1>
            <p className='mediumStyle_text mb-5'>{t("SetNewPasswordDesc")}</p>
            <FormInput
                certificate="password"
                fieldStyle="rounded-full mb-5  py-2.5 h-auto"
                placeholder={t("SetNewPasswordPlaceholder")}
                fullSize
                variants="password"
                eyeStyle={`bottom-9 ${i18n.language == "en" ? "" : "left-4 right-auto"}`}
            />
            <Button vType="button" vStyle="yellow" text="SetNewPasswordBtn" style="w-full mb-5 justify-center !py-2.5 h-auto" />
        </FormHolder>
    )
}

export default SetNewPassword
