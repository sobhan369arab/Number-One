import { FormHolder, FormInput } from "../../../common"

const EmailRecovery = () => {
    return (
        <FormHolder
            initialValues={{ email: "" }}
            style="w-full flex justify-evenly my-6"
            onSubmit={(event) => {console.log(event)}}
        >
            <FormInput type="email" certificate="email" sectionName="ایمیل جدید" dir="ltr" style="w-[300px]" variants="simple" />
        </FormHolder>
    )
}

export default EmailRecovery