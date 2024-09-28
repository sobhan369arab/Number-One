import { useTranslation } from "react-i18next"
import comparisonPic from '../../../assets/images/comparison.png'
import { Label } from "../../common"

const HeadingSection = () => {
    const { t } = useTranslation()
    return (
        <div className="bg-DarkIndigo py-6 px-3  flex gap-3 justify-around items-center">
            <div className="w-[450px] mobile:text-center flex flex-wrap max-sm:justify-center gap-y-5">
                <Label text={t('titleComparison')} variant="bgGray" />
                <h2 className="boldStyle_text max-sm:text-center text-white">{t('descComparison')}</h2>
            </div>
            <img src={comparisonPic} className="lg:h-80 sm:h-60 hidden sm:block"/>
        </div>
    )
}

export default HeadingSection