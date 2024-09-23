import { Field } from 'formik';
import { FormHolder, FormInput } from "../../../common"
import { useTranslation } from 'react-i18next';

const TwoStep = () => {
    const { i18n } = useTranslation()
    return (
        <FormHolder
            initialValues={{ twoStep: false }}
            style="w-full flex justify-evenly my-6"
            onSubmit={(event) => { console.log(event) }}
        >
            <FormInput variants="checkbox" certificate="twoStep" placeholder="مایل به ورود دو مرحله ای هستم" style="text-DarkBlue" />
        </FormHolder>
    )
}

export default TwoStep
