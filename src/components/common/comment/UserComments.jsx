import userImg from '../../../assets/images/courses/course1.png'
import { DownSection, TopSection } from './comment-item'
import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import ReplayComments from './ReplayComments';
const UserComments = ({ uid, title, describe }) => {
  const { t } = useTranslation()
  const [replayComment, setReplayComment] = useState([]);
  const [replayStatus, setReplayStatus] = useState(false);
  console.log(replayComment)
  return (
    <>
      <div className="border-t-2 border-gray-100 py-4 flex gap-4">
        <img src={userImg} alt={"user-img" + uid} className='sm:w-24 w-16 sm:h-24 h-16 rounded-full' />
        <div className='w-full'>
          <TopSection title={title} describe={describe} />
          <DownSection ArrayLength={replayComment.length} setReplayComment={setReplayComment} replayStatus={replayStatus} setReplayStatus={setReplayStatus} />
        </div>
      </div>
      <div className={`${replayStatus ? "h-auto" : "h-0 overflow-hidden"} duration-250`}>
        {replayComment.length !== 0 && replayComment.map((item, index) => {
          return (
            <ReplayComments key={index} describe={item.describe} />
          )
        })}
      </div>
    </>
  )
}

export default UserComments