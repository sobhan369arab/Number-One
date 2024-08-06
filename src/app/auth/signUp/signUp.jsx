import TitleSection from "../../partials/TitleSection/titleSection"
import Form_Wrapper from "../form/form_Wrapper"

const SignUp = () => {
    return (
        <div>
            <TitleSection title={'signUpTitle'} />
            <Form_Wrapper
                title={'SignUpCaption'}
                description={'SignUpDesc'}
            />
        </div>
    )
}

export default SignUp