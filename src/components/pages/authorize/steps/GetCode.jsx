import { useTranslation } from "react-i18next";
import { FormInput, FormHolder, Button } from "../../../common"
import { getCodeValidation } from "../../../../core/validations/validations"
import { useDispatch } from "react-redux";
import { increaseAction } from "../../../../redux/slices/StepStatus";

const GetCode = ({ phone }) => {
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const handleClick = (event) => {
        dispatch(increaseAction())
        console.log(event)
    }
    return (
        <FormHolder
            initialValues={{ verificationCode: "" }}
            onSubmit={(event) => { handleClick(event) }}
            validations={getCodeValidation}
            style="w-full"
        >
            <h1 className='boldStyle_text w-full mb-5'>{t("GetCodeCaption")}</h1>
            <p className='mediumStyle_text mb-5'>{t("GetCodeDesc1")} {phone ? phone : null} {t("GetCodeDesc2")}</p>
            <FormInput
                certificate="verificationCode"
                fieldStyle="rounded-full mb-5  py-2.5 h-auto"
                placeholder={t("GetCodePlaceholder")}
                fullSize
                variants="simple"
                errorStyleComment="!bg-MainBg"
            />
            <Button vType="button" vStyle="yellow" text="GetCodeBtn" style="w-full mb-5 justify-center !py-2.5 h-auto" />
        </FormHolder>
    )
}

export default GetCode
