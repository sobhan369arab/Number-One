import { useTranslation } from "react-i18next"
import { FormHolder, FormInput } from "../../../common"
import { EmailValidation } from "../../../../core/validations/validations"

const EmailRecovery = () => {
    const { t } = useTranslation()
    return (
        <FormHolder
            initialValues={{ email: "" }}
            style="w-full flex justify-evenly my-6"
            onSubmit={(event) => { console.log(event) }}
            validations={EmailValidation}
        >
            <FormInput type="email" certificate="email" sectionName={t("newEmail")} dir="ltr" style="w-[300px]" variants="simple" />
        </FormHolder>
    )
}

export default EmailRecovery