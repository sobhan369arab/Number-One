import { useEffect, useState } from "react";
import Button from "../Button"
import FormHolder from "../Form/FormHolder"
import FormInput from "../Form/FormInput"
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";


const AddReplay_Comment = ({ courseId, commentId, replayComment, refetch, closeModal }) => {
  const { t } = useTranslation();
  const userInfo = useSelector(state => state.UserInfo.info)

  const addReplayComment = (values) => {
    if (!userInfo) {
      alert('لطفا لاگین کنید')
    }
    else {
      replayComment(values, commentId, courseId, refetch, closeModal)
    }
  }

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