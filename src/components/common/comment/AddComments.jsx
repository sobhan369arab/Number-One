import { useTranslation } from "react-i18next"
import FormHolder from "../Form/FormHolder";
import FormInput from "../Form/FormInput";
import Button from "../Button";
import { CommentValid } from "../../../core/validations/validations";
import { useSelector } from "react-redux";



const YourComments = ({ apiFunction, Id, refetch }) => {

  const { t, } = useTranslation();

  const userInfo = useSelector(state => state.UserInfo.info)

  // Providing field information
  const fields = [
    { id: 1, sectionName: 'titleComment', certificate: "title", type: "text", variant: "simple", errorStyle: "text-end !bg-transparent", fieldStyle: 'rounded-lg py-2 bg-whiteBlack h-auto mt-0.5' },
    { id: 2, sectionName: 'descComment', certificate: "description", type: "text", variant: "area", errorStyle: "text-end !bg-transparent", fieldStyle: 'rounded-lg pb-28 bg-whiteBlack h-auto line-clamp-4 mt-0.5' }
  ]
  const handleApi = (Id, values, refetch) => {
    if (!userInfo) alert('لطفا لاگین کنید')
    else apiFunction(Id, values, refetch)
  }

  return (
    <div className="px-7 py-4 bg-grayCustom rounded-lg bg-LightLavender border-LightGrayish">
      <h1 className="boldStyle_text text-2xl">{t('sendComment')}</h1>
      <FormHolder
        initialValues={{ title: '', description: '' }}
        onSubmit={(values) => { handleApi(Id, values, refetch) }}
        validations={CommentValid}
        style={'w-full mt-4'}
      >
        {fields.map(field => {
          return (
            <FormInput
              key={field.id}
              type={field.type}
              certificate={field.certificate}
              fieldStyle={field.fieldStyle}
              variants={field.variant}
              sectionName={field.sectionName}
              placeholder={'comment_text'}
              style={'mb-4'}
              errorStyleComment={field.errorStyle}
              
            />
          )
        })}
        {/* <p className="text-sm text-titleColor">{t('ConfirmComment')}</p> */}
        <Button vType="button" arrowColor={"#000"} vStyle="yellow" text="sendComment" style="border sm:mx-0 mx-auto w-fit !px-10  mt-6 mb-4 justify-center !py-1.5 h-auto" />
      </FormHolder>
    </div>
  )
}

export default YourComments