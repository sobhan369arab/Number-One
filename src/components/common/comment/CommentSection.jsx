import { useState } from "react"
import YourComments from "./YourComments"
import { useTranslation } from "react-i18next";
import UserComments from "./UserComments";

const CommentSection = () => {
  const { t } = useTranslation();
  const [comments, setComments] = useState([]);
  const [viewMore, setViewMore] = useState(false);
  console.log(comments)

  return (
    <div className="my-3">
      <h1 className="mb-6">{t('user_comment')}</h1>
      <YourComments comment={comments} setComments={setComments} />
      <p className="text-xl my-5">{comments.length} {t('comment')}</p>
      <div className={`${viewMore? "h-auto":""} my-5 `}>
        {comments.length !== 0 && comments.map((item, index) => {
          return (
            <UserComments
              key={index}
              uid={index + 1}
              title={item.title}
              describe={item.describe}
            />
          )
        })}
        <button onClick={() => setViewMore(!viewMore)} className="bg-LavenderMist px-5 py-1.5 rounded-3xl mx-auto block text-purpleCustom">مشاهده بیشتر +</button>
      </div>
    </div>
  )
}

export default CommentSection