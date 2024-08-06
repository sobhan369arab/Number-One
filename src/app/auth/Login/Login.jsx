import TitleSection from "../../partials/TitleSection/titleSection"
import Form_Wrapper from "../form/form_Wrapper"

const Login = () => {
  return (
    <div className="">
      <TitleSection title={'loginTitle'} />
      <Form_Wrapper
        title={'LoginCaption'}
        description={'LoginDesc'}
      />
    </div>
  )
}

export default Login