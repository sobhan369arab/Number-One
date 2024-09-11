import { BsEye, BsEyeFill } from "react-icons/bs"
import { ToLike } from "../../common"

const DownBox = ({
  like,
  disLike,
  view,
}) => {
  return (
    <div className=" pt-5 border-t-2  border-grayBorder flex justify-between">
      <div className="flex items-center gap-1.5">
        <BsEyeFill color="gray"/>
        <span className="text-gray-500">{view}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <ToLike
          likeNumber={like}
          disLikeNumber={disLike}
        />
      </div>
    </div>
  )
}

export default DownBox