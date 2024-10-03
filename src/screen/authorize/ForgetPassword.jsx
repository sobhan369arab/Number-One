import { useTranslation } from 'react-i18next'
import Vector from '../../assets/images/ForgotPassword.svg'
import { useEffect, useState } from 'react'
import { Stepper, SetNewPassword, AuthorizePanel, FirstSetpPassword, GoToGmail } from '../../components/pages/authorize'
import { useLocation, useParams } from 'react-router-dom'
import ResetConfirmValue from '../../core/services/api/GetData/ResetConfirmValue'
import { useDispatch } from 'react-redux'
import { increaseAction } from '../../redux/slices/StepStatus'

const ForgetPasswordLogin = () => {
    const { t, i18n } = useTranslation()
    const stepsFa = ["ایمیل", "چک کردن ایمیل", "تغییر رمزعبور"]
    const stepsEn = ["Email", "Check Email", "Change"]
    const params = useParams()
    const location = useLocation()
    const dispatch = useDispatch()
    const [config, setConfig] = useState("")
    const [userId, setUserId] = useState()
    const [userEmail, setUserEmail] = useState("")

    useEffect(() => {
        setConfig(params.config)
    }, [location])

    useEffect(() => {
        if (!config) return
        dispatch(increaseAction())
        ResetConfirmValue(config, dispatch, setUserId)
    }, [config])

    const displayStep = (step) => {
        switch (step) {
            case 1:
                return (
                    <FirstSetpPassword
                        title={t("ChangePasswordCaption")}
                        description={t("ChangePasswordDesc")}
                        setUserEmail={setUserEmail}
                        userEmail={userEmail}
                    />
                )
            case 2:
                return <GoToGmail userEmail={userEmail} />
            case 3:
                return <SetNewPassword userId={userId} />
        }
    }

    return (
        <AuthorizePanel Vector={Vector}>
            <Stepper
                steps={i18n.language == "en" ? stepsEn : stepsFa}
                contents={displayStep}
            />
        </AuthorizePanel>
    )
}

export default ForgetPasswordLogin
