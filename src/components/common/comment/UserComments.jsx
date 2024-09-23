import { useTranslation } from 'react-i18next'
import userImg from '../../../assets/images/courses/course1.png'
import ToLike from '../ToLike'
import { DownSection, TopSection } from './comment-item'
import { useState } from 'react'
const UserComments = ({ uid, title, describe }) => {
  
  const [replayComment,setReplayComment] = useState([]);
  console.log(replayComment)
  return (
    <div className="border-t-2 border-gray-100 py-4 flex gap-4">
      <img src={userImg} alt={"user-img" + uid} className='w-24 h-24 rounded-full' />
      <div className='w-full'>
        <TopSection title={title} describe={describe} />
        <DownSection setReplayComment={setReplayComment}/>
      </div>

    </div>
  )
}

export default UserComments