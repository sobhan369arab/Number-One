import { useState } from "react"
import YourComments from "./YourComments"
import { useTranslation } from "react-i18next";
import UserComments from "./UserComments";
import { useQuery } from "@tanstack/react-query";
import GetNewsComments from "../../../core/services/api/GetData/GetNewsComments";

const CommentSection = ({ blogId }) => {
  const { t } = useTranslation();
  const [comments, setComments] = useState([]);
  const [viewMore, setViewMore] = useState(false);

  const { data, isSuccess } = useQuery({
    queryKey: ['GET_COMMENTS_LIST'],
    queryFn: () => { return GetNewsComments(blogId) }
  })

  return (
    <div className="my-3">
      <h1 className="mb-6">{t('user_comment')}</h1>
      <YourComments comment={comments} setComments={setComments} />
      <p className="text-xl my-5">{isSuccess && data.length} {t('comment')}</p>
      <div className={`${viewMore ? "h-auto" : ""} my-5 `}>
        {isSuccess && data.map((item, index) => <UserComments key={index} userInfo={item} />)}
        <button onClick={() => setViewMore(!viewMore)} className="bg-LavenderMist px-5 py-1.5 rounded-3xl mx-auto block text-purpleCustom">مشاهده بیشتر +</button>
      </div>
    </div>
  )
}

export default CommentSection