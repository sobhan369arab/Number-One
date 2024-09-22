import { useState } from "react"
import YourComments from "./YourComments"
import { useTranslation } from "react-i18next";

const CommentSection = ({Id,nameItem}) => {
  const { t } = useTranslation();
  const [comments, setComments] = useState([]);

  return (
    <div className="my-3">
      <h1 className="font-semibold mb-4">{t('user_comment')}</h1>
      <YourComments comment={comments} setComments={setComments} nameItem={nameItem} />
    </div>
  )
}

export default CommentSection