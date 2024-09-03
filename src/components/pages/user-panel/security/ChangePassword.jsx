import { useTranslation } from 'react-i18next'
import { SaveIcon } from '../../../../core/icon'
import { FormInput, FormHolder } from '../../../common'

const ChangePassword = () => {
    const { t, i18n } = useTranslation()
    const fields = [
        { id: 1, certificate: "currentPassword", sectionName: ["رمز عبور فعلی", "Current password"], dir: "ltr", },
        { id: 2, certificate: "password", sectionName: ["رمز عبور", "Password"], dir: "ltr", },
        { id: 3, certificate: "repeatPassword", sectionName: ["تکرار رمز عبور", "Repeat password"], dir: "ltr", },
    ]
    const initialValues = { currentPassword: "", password: "", repeatPassword: "" }
    return (
        <FormHolder
            style="w-full flex flex-wrap justify-evenly my-6"
            initialValues={initialValues}
            onSubmit={(event) => { console.log(event) }}
        >
            {fields.map(item =>
                <FormInput
                    key={item.id}
                    certificate={item.certificate}
                    sectionName={i18n.language != "en" ? item.sectionName[0] : item.sectionName[1]}
                    dir={item.dir}
                    style="w-[260px]"
                    variants="password"
                />
            )}
            <div className='w-full flex justify-center mt-16'>
                <button type='submit' className='px-4 py-2 flex items-center gap-x-2 rounded-full bg-yellowCustom duration-200 buttonYellow_shadow'>
                    {t("saveChanges")}
                    <SaveIcon />
                </button>
            </div>
        </FormHolder>
    )
}

export default ChangePassword
