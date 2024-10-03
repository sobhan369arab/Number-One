import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import Vector from "../../assets/images/SignIn.svg"
import { Stepper, GetCode, AuthorizePanel, GetPhoneNumber, GetUserInfo } from '../../components/pages/authorize'

const Register = () => {
    const [phone, setPhone] = useState("")
    const { t, i18n } = useTranslation()
    const stepsFa = ["شماره تماس", "دریافت کد", "مشخصات کاربری"]
    const stepsEn = ["Phone", "Code", "Information"]
    const displayStep = (step) => {
        switch (step) {
            case 1:
                return (
                    <GetPhoneNumber
                        setPhone={setPhone}
                        phone={phone}
                        title={t("SignUpCaption")}
                        description={t("SignUpDesc")}
                    />
                )
            case 2:
                return <GetCode phone={phone} />
            case 3:
                return <GetUserInfo phone={phone} />
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

export default Register
