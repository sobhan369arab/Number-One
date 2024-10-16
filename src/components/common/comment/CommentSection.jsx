import { useState } from "react"
import YourComments from "./AddComments"
import { useTranslation } from "react-i18next";
import UserComments from "./UserComments";

const CommentSection = ({ Id, replayComment, apiFunction, data, refetch, variant }) => {
  const { t } = useTranslation();
  const [viewMore, setViewMore] = useState(false);
  const dataRender = viewMore ? data : data?.slice(0, 3);
  console.log(dataRender)

  
  return (
    <div className="my-3">
      <h1 className="mb-6">{t('user_comment')}</h1>
      <YourComments apiFunction={apiFunction} Id={Id} refetch={refetch} />
      <p className="text-xl my-5">{data?.length} {t('comment')}</p>
      <div className={`my-5 pb-10`}>
        {data?.length !== 0 ? (
          dataRender?.map((item, index) => (
            <UserComments
              key={index}
              variant={variant}
              commentData={item}
              replayComment={replayComment}
              refetch={refetch}
              courseId={Id} />
          ))
        ) : (
          <h1 className="mx-auto w-fit font-semibold text-xl">* {t('notFoundComment')} *</h1>
        )}
      </div>
      <button onClick={() => setViewMore(!viewMore)} className={`bg-LavenderMist
        px-5 py-1.5 rounded-3xl mx-auto block text-VioletBlue ${data?.length > 3 ? "" : "hidden"}`}>
        {t(!viewMore ? 'viewMore' : 'viewLess')} </button>
    </div>
  )
}

export default CommentSection