import { SaveIcon } from '../../../../core/icon'
import { FormInput, FormHolder } from '../../../common'

const ChangePassword = () => {
    const fields = [
        { id: 1, certificate: "currentPassword", sectionName: "رمز عبور فعلی", dir: "ltr", },
        { id: 2, certificate: "password", sectionName: "رمز عبور", dir: "ltr", },
        { id: 3, certificate: "repeatPassword", sectionName: "تکرار رمز عبور", dir: "ltr", },
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
                    sectionName={item.sectionName}
                    dir={item.dir}
                    style="w-[260px]"
                    variants="password"
                />
            )}
            <div className='w-full flex justify-center mt-16'>
                <button type='submit' className='px-4 py-2 flex items-center gap-x-2 rounded-full bg-yellowCustom duration-200 buttonYellow_shadow'>
                    ذخیره تغییرات
                    <SaveIcon />
                </button>
            </div>
        </FormHolder>
    )
}

export default ChangePassword
