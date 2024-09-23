import { useTranslation } from "react-i18next"
import comparisonPic from '../../../assets/images/comparison.png'
import { Label } from "../../common"

const HeadingSection = () => {
    const { t } = useTranslation()
    return (
        <div className="bg-DarkIndigo py-6 px-3  flex gap-3 justify-around items-center">
            <div className="w-[450px] mobile:text-center flex flex-wrap gap-y-5">
                <Label text={t('titleComparison')} variant="section" />
                <h2 className="boldStyle_text text-white">{t('descComparison')}</h2>
            </div>
            <img src={comparisonPic} className="lg:h-80 sm:h-60 mobile:hidden "/>
        </div>
    )
}

export default HeadingSection