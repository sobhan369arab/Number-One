import { DownSection, TopSection } from './comment-item'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import ReplayComments from './ReplayComments';
import { useQuery } from '@tanstack/react-query';
import { GetReplayCourseComment } from '../../../core/services/api/GetData';
const UserComments = ({ commentData, variant, replayComment, refetch, courseId }) => {
  const { t } = useTranslation()
  // const [replayComment, setReplayComment] = useState([]);
  const [replayStatus, setReplayStatus] = useState(false);
  const [replayCourse, setReplayCourse] = useState([]);
  const [reload, setReload] = useState(false);

  const {
    pictureAddress,
    id,
    title,
    describe,
    likeCount,
    disslikeCount,
    currentUserEmotion,
    currentUserLikeId,
    insertDate,
    author,
  } = commentData

  // const { data: replay ,refetch : refetchCourse} = useQuery({
  //   queryKey: ["GET_REPLAY_COURSE_COMMENT"],
  //   queryFn: async () => { return await GetReplayCourseComment(courseId, id) }
  // })
  const refetchCallReplay = () => {
    alert()
    setReload(!reload)
  }

  const CallReplayApi = async () => {
    const res = await GetReplayCourseComment(courseId, id);
    setReplayCourse(res);
  };

  useEffect(() => {
    CallReplayApi()
  }, [])


  const dataVariant = {
    'course': replayCourse,
  }

  return (
    <>
      <div className="border-t-2 border-LightGrayish py-4 flex max-md:mx-1 gap-4">
        <img src={pictureAddress} alt="" className='sm:min-w-24 sm:w-24 w-16 sm:h-24 h-16 rounded-full bg-red-600' />
        <div className='w-full'>
          <TopSection
            title={title}
            describe={describe}
            date={insertDate}
            name={author}
          />
          <DownSection
            ArrayLength={replayCourse?.length}
            replayStatus={replayStatus}
            setReplayStatus={setReplayStatus}
            like={likeCount}
            disLike={disslikeCount}
            LikeStatus={currentUserEmotion}
            userLikeId={currentUserLikeId}
            replayComment={replayComment}
            courseId={courseId}
            commentId={id}
            refetch={refetch}
          />
        </div>
      </div>
      <div>
        {replayStatus ? (
          dataVariant?.[variant]?.map((item, index) => {
            return (
              <ReplayComments key={index} item={item} refetch={refetch} />
            )
          })
        ) : null}
      </div>
    </>
  )
}

export default UserComments