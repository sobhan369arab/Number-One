import { Field } from 'formik';
import { FormHolder } from "../../../common"
import { useTranslation } from 'react-i18next';

const TwoStep = () => {
    const { i18n } = useTranslation()
    return (
        <FormHolder
            initialValues={{ twoStep: false }}
            style="w-full flex justify-evenly my-6"
            onSubmit={(event) => { console.log(event) }}
        >
            <label htmlFor="twoStep" className='w-fit flex gap-x-2 items-center cursor-pointer'>
                {i18n.language != "en" ? "مایل به ورود دو مرحله ای هستم" : "I would like two-step login"}
                <Field type="checkbox" name="twoStep" id="twoStep" />
            </label>
        </FormHolder>
    )
}

export default TwoStep
