import { useTranslation } from "react-i18next"
import { FormInput, FormHolder, Button } from "../../../common"
import { getPhoneNumber } from "../../../../core/validations/validations"
import { VerifyMessage } from "../../../../core/services/api/PostData/VerifyMessage"
import { useDispatch } from "react-redux"

const GetPhoneNumber = ({ setPhone, phone, title, description }) => {
    const { t } = useTranslation()
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        const body = { phoneNumber: event.phoneNumber };
        const api = "/Sign/SendVerifyMessage";
        VerifyMessage(api, body, dispatch)
        setPhone(event.phoneNumber)
    }

    return (
        <FormHolder
            initialValues={{ phoneNumber: phone }}
            onSubmit={(event) => { handleSubmit(event) }}
            validations={getPhoneNumber}
            style="w-full"
            additionParams={{ enableReinitialize: true }}
        >
            <h1 className='boldStyle_text w-full mb-5'>{title}</h1>
            <p className='mediumStyle_text mb-5'>{description}</p>
            <FormInput
                certificate="phoneNumber"
                fieldStyle="rounded-full mb-5  py-2.5 h-auto"
                placeholder={t("phonePlaceholder")}
                fullSize
                variants="simple"
                errorStyleComment="!bg-MainBg"
            />
            <Button vType="button" vStyle="yellow" text="GetCodeBtn" style="w-full mb-5 justify-center !py-2.5 h-auto" />
        </FormHolder>
    )
}

export default GetPhoneNumber
