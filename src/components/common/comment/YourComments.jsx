import { useTranslation } from "react-i18next"
import FormHolder from "../Form/FormHolder";
import FormInput from "../Form/FormInput";
import Button from "../Button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CommentValid } from "../../../core/validations/validations";

const YourComments = ({ comments, setComments, nameItem }) => {
  const { t, } = useTranslation();
  const [Param, setParam] = useState(useParams());
  const [testArray, setTestArray] = useState([]);

  // Providing field information
  const fields = [
    { id: 1, sectionName: 'titleComment', certificate: "title", type: "text", variant: "simple", errorStyle: "text-end !bg-transparent", fieldStyle: 'rounded-lg py-2 h-auto mt-0.5' },
    { id: 2, sectionName: 'descComment', certificate: "description", type: "text", variant: "area", errorStyle: "text-end !bg-transparent", fieldStyle: 'rounded-lg pb-28 h-auto line-clamp-4 mt-0.5' }
  ]


  const addComment = (values) => {
    alert()

    // Test
    const formData = { title: values.title, describe: values.description };
    console.log(formData)

    setTestArray([...testArray, formData]);

  }

  useEffect(() => {
    if (testArray.length !== 0) {
      setComments(testArray)
    }
  }, [testArray])



  return (
    <div className="px-7 py-4 bg-grayCustom rounded-lg ">

      <h1 className="text-titleColor text-2xl font-semibold">{t('sendComment')}</h1>
      <FormHolder
        initialValues={{ title: '', description: '' }}
        onSubmit={(values) => { addComment(values) }}
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
        <p className="text-sm text-titleColor">{t('ConfirmComment')}</p>
        <Button vType="button" arrowColor={"#000"} vStyle="yellow" text="sendComment" style="border w-fit !px-10  my-4 justify-center !py-1.5 h-auto" />
      </FormHolder>
    </div>
  )
}

export default YourComments