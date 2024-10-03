import { FormInput, FormHolder, Button } from '../../components/common'
import { AuthorizePanel } from '../../components/pages/authorize'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Vector from '../../assets/images/SignIn.svg'
import { loginValidations } from "../../core/validations/validations"
import { UserLogin } from '../../core/services/api/PostData/Login'

const Login = () => {
    const { t, i18n } = useTranslation()
    const initialValues = { phoneOrGmail: "", password: "", rememberMe: false }
    const fields = [
        { id: 1, type: "email", certificate: "phoneOrGmail", variant: "simple", placeholder: t("emailPlaceholder") },
        { id: 2, certificate: "password", variant: "password", placeholder: t("passwordPlaceholder"), eyeStyle: `bottom-4 ${i18n.language == "en" ? "" : "left-4 right-auto"}` },
    ]

    const handleUserLogin = async (user) => UserLogin(user)

    return (
        <AuthorizePanel Vector={Vector}>
            <FormHolder
                initialValues={initialValues}
                onSubmit={(event) => { handleUserLogin(event) }}
                validations={loginValidations}
            >
                <div className='w-full h-fit flex flex-wrap gap-y-5'>
                    <h1 className='boldStyle_text w-full'>{t("LoginCaption")}</h1>
                    <p className='mediumStyle_text'>{t("LoginDesc")}</p>
                    {fields.map(item => (
                        <FormInput
                            key={item.id}
                            certificate={item.certificate}
                            placeholder={item.placeholder}
                            eyeStyle={item.eyeStyle}
                            fullSize
                            type={item.type}
                            fieldStyle="rounded-full py-2.5 h-auto"
                            variants={item.variant}
                            errorStyleComment="!bg-MainBg"
                        />)
                    )}
                    <div className='w-full flex justify-between gap-x-2 text-nowrap text-DarkBlue'>
                        <FormInput certificate="twoStep" variants="checkbox" placeholder={t("RememberMe")} />
                        <Link to="/authorize/forgetPassword">{t("ForgetPassword")}</Link>
                    </div>
                    <Button vType="button" vStyle="yellow" text={t("loginBtn")} style="w-full justify-center !py-2.5 h-auto" />
                    <div className='w-full flex gap-x-2 justify-center'>
                        <span className='text-DarkBlue'>{t("HaveAccount2")}</span>
                        <Link to="/authorize/register" className='text-[#5751E1] underline'>{t("signUp")}</Link>
                    </div>
                </div>
            </FormHolder>
        </AuthorizePanel>
    )
}

export default Login
