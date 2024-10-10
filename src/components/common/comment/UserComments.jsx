import { DownSection, TopSection } from './comment-item'
import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import ReplayComments from './ReplayComments';
const UserComments = ({ userInfo,replayComment,refetch ,courseId}) => {
  const { t } = useTranslation()
  // const [replayComment, setReplayComment] = useState([]);
  const [replayStatus, setReplayStatus] = useState(false);

  const {
    pictureAddress,
    id,
    title,
    describe,
    likeCount,
    disslikeCount,
    replyCount,
    inserDate,
    accept,
    currentUserLikeId,
  } = userInfo

  {console.log(userInfo)}
  return (
    <>
      <div className="border-t-2 border-LightGrayish py-4 flex max-md:mx-1 gap-4">
        <img src={pictureAddress} alt="" className='sm:min-w-24 sm:w-24 w-16 sm:h-24 h-16 rounded-full bg-red-600' />
        <div className='w-full'>
          <TopSection
            title={title}
            describe={describe}
            date={inserDate}
          />
          <DownSection
            ArrayLength={replyCount}
            replayStatus={replayStatus}
            like={likeCount}
            disLike={disslikeCount}
            LikeStatus={accept}
            userLikeId={currentUserLikeId}
            replayComment={replayComment}
            courseId={courseId}
            commentId={id}
            refetch={refetch}
          />
        </div>
      </div>
      <div className={`${replayStatus ? "h-auto" : "h-0 overflow-hidden"} duration-250`}>
        {/* {replayComment.length !== 0 && replayComment.map((item, index) => { */}
          {/* return ( */}
            <ReplayComments />
          {/* ) */}
        {/* })} */}
      </div>
    </>
  )
}

export default UserComments