import { useEffect, useState } from "react";
import Button from "../Button"
import FormHolder from "../Form/FormHolder"
import FormInput from "../Form/FormInput"
import { useTranslation } from "react-i18next";
import { CommentValid } from "../../../core/validations/validations";

const AddReplay_Comment = ({testArray ,setTestArray, setReplayComment }) => {
  const {t} = useTranslation();

  const addReplayComment = (values) => {
    alert()
    // Test
    const formData = { describe: values.description };
    console.log(formData)

    setTestArray([...testArray, formData]);

  }

  useEffect(() => {
    console.log(testArray)
    if (testArray.length !== 0) {
      setReplayComment(testArray)
    }
  }, [testArray])

  return (
    <div>
      <FormHolder
        initialValues={{ description: '' }}
        onSubmit={(values) => { addReplayComment(values) }}
        // validations={CommentValid}
      >
        <FormInput
          type={"text"}
          certificate={"description"}
          fieldStyle={'rounded-lg pb-28 h-auto line-clamp-4 mt-0.5'}
          variants={"area"}
          placeholder={'comment_text'}
          style={'mb-4 mt-2'}
          errorStyleComment={"text-end !bg-transparent"}
        />
        <p className="text-sm text-white">{t('ConfirmComment')}</p>
        <Button vType="button" arrowColor={"#000"} vStyle="yellow" text="sendComment" style="border w-fit !px-10  my-4 justify-center !py-1.5 h-auto" />
      </FormHolder>
    </div>
  )
}

export default AddReplay_Comment