import { useTranslation } from 'react-i18next'
import Vector from '../../assets/images/ForgotPassword.svg'
import { useState } from 'react'
import { Stepper, GetPhoneNumber, GetCode, SetNewPassword, AuthorizePanel } from '../../components/pages/authorize'

const ForgetPasswordLogin = () => {
    const [phone, setPhone] = useState()
    const { t, i18n } = useTranslation()
    const stepsFa = ["شماره تماس", "دریافت کد", "تغییر رمزعبور"]
    const stepsEn = ["Phone", "Code", "Change"]
    const displayStep = (step) => {
        switch (step) {
            case 1:
                return (
                    <GetPhoneNumber
                        setPhone={setPhone}
                        title={t("ChangePasswordCaption")}
                        description={t("ChangePasswordDesc")}
                    />
                )
            case 2:
                return <GetCode phone={phone} />
            case 3:
                return <SetNewPassword />
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
