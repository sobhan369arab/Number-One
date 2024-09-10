import { useTranslation } from "react-i18next"
import { FormInput, FormHolder, Button } from "../../../common"
import { getPhoneNumber } from "../../../../core/validations/validations"
import { useDispatch } from "react-redux"
import { increaseAction } from "../../../../redux/slices/StepStatus"

const GetPhoneNumber = ({ setPhone, title, description }) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        dispatch(increaseAction())
        setPhone(event.phoneNumber)
    }
    return (
        <FormHolder
            initialValues={{ phoneNumber: "" }}
            onSubmit={(event) => { handleSubmit(event) }}
            validations={getPhoneNumber}
            style="w-full"
        >
            <h1 className='boldStyle_text w-full mb-5'>{title}</h1>
            <p className='mediumStyle_text mb-5'>{description}</p>
            <FormInput
                certificate="phoneNumber"
                fieldStyle="rounded-full mb-5  py-2.5 h-auto"
                placeholder={t("phonePlaceholder")}
                fullSize
                variants="simple"
            />
            <Button vType="button" vStyle="yellow" text="GetCodeBtn" style="w-full mb-5 justify-center !py-2.5 h-auto" />
        </FormHolder>
    )
}

export default GetPhoneNumber
