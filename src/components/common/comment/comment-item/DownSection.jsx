import { useTranslation } from "react-i18next"
import ToLike from "../../ToLike"
import CreateModal from "../../CreateModal"
import { useDisclosure } from "@nextui-org/react"
import { CloseIcon } from "../../../../core/icon"
import AddReplay_Comment from "../AddReplay_Comment"

const DownSection = ({setReplayComment}) => {
  const { t } = useTranslation()

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className='flex justify-between items-center mt-3'>
      <div className='flex gap-3'>
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
          <AddReplay_Comment setReplayComment={setReplayComment}/>
        </CreateModal>
        <div className='bg-grayCustom py-1 px-3 text-gray-500 rounded-lg text-sm'>{t('viewAnswers')}</div>
      </div>
      <div className='h-fit'>
        <ToLike likeNumber={0} disLikeNumber={0} />
      </div>
    </div>
  )
}

export default DownSection