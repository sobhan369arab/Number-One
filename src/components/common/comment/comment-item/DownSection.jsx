import { useTranslation } from "react-i18next"
import ToLike from "../../ToLike"
import CreateModal from "../../CreateModal"
import { useDisclosure } from "@nextui-org/react"
import { CloseIcon } from "../../../../core/icon"
import AddReplay_Comment from "../AddReplay_Comment"
import { useState } from "react"
import { IoIosArrowDown } from "react-icons/io"

const DownSection = ({ ArrayLength, setReplayComment, replayStatus, setReplayStatus, Style }) => {
  const { t } = useTranslation();
  const [testArray, setTestArray] = useState([]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className='flex justify-between items-center mt-3'>
      <div className={`sm:flex gap-3 ${Style}`}>
        {/* Modal for Replay comment */}
        <button onClick={onOpen} className='bg-grayCustom py-1 px-3 text-purpleCustom rounded-lg text-sm'>{t('commentAnswer')}</button>
        <CreateModal
          isOpen={isOpen}
          onClose={onClose}
          header={t('sendComment')}
          size="xl"
          headerStyle="flex flex-col gap-1 text-white"
        >
          <div onClick={onClose} className="closeButton_modal bg-neutral-200/65 top-2 left-2">
            <CloseIcon />
          </div>
          <AddReplay_Comment testArray={testArray} setTestArray={setTestArray} setReplayComment={setReplayComment} />
        </CreateModal>
        {ArrayLength !== 0 &&
          <button onClick={() => setReplayStatus(!replayStatus)} className="bg-grayCustom py-1 px-3 mt-3 sm:mt-0 text-gray-500 flex gap-2 items-center rounded-lg text-sm">
            <p>{t('viewAnswers')} <span className="text-purpleCustom">({ArrayLength})</span></p>
            <IoIosArrowDown className={`${replayStatus ? "rotate-180" : ""} duration-300`} />
          </button>
        }
      </div>
      <div className='h-fit'>
        <ToLike likeNumber={0} disLikeNumber={0} />
      </div>
    </div>
  )
}

export default DownSection