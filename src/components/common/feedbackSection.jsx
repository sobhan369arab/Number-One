import { useTranslation } from "react-i18next"
import ToLike from "./ToLike"

const FeedbackSection = ({ params }) => {
    const { t } = useTranslation()
    console.log(params)
    return (
        <div className="border-y-2 my-7 py-5">
            <div className="flex gap-8 w-fit max-sm:m-auto">
                <p className="text-DarkBlue">{t('blogFavorite')} </p>
                <ToLike
                    userLikeId={params.userLikeId}
                    likeNumber={params.likeNumber}
                    disLikeNumber={params.disLikeNumber}
                    LikeStatus={params.LikeStatus}
                    DissLikeStatus={params.DissLikeStatus}
                    numberStatus={'hidden'}
                    Id={params.Id}
                    variant={params.variant}
                    refetch={params.refetch}
                />
            </div>
        </div>
    )
}

export default FeedbackSection