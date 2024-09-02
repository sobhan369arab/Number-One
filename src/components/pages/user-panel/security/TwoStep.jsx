import { Field } from 'formik';
import { FormHolder } from "../../../common"

const TwoStep = () => {
    return (
        <FormHolder
            initialValues={{ twoStep: false }}
            style="w-full flex justify-evenly my-6"
            onSubmit={(event) => { console.log(event) }}
        >
            <label htmlFor="twoStep" className='w-fit flex gap-x-2 items-center cursor-pointer'>
                مایل به ورود دو مرحله ای هستم
                <Field type="checkbox" name="twoStep" id="twoStep" />
            </label>
        </FormHolder>
    )
}

export default TwoStep
