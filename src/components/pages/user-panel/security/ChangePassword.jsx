import { useTranslation } from 'react-i18next'
import { SaveIcon } from '../../../../core/icon'
import { FormInput, FormHolder, Button } from '../../../common'

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
            <div className='w-full flex gap-x-20 gap-y-8 lg:gap-x-10 justify-center flex-wrap lg:flex-nowrap'>
                {fields.map(item =>
                    <FormInput
                        key={item.id}
                        certificate={item.certificate}
                        sectionName={i18n.language != "en" ? item.sectionName[0] : item.sectionName[1]}
                        dir={item.dir}
                        style="w-[340px] lg:w-[28%]"
                        variants="password"
                    />
                )}
            </div>
            <div className='w-full flex justify-center mt-16'>
                <Button Icon={SaveIcon} vStyle="yellow" vType="button" text="saveChanges" />
            </div>
        </FormHolder>
    )
}

export default ChangePassword
