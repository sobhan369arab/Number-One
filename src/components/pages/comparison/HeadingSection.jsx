import { useTranslation } from "react-i18next"
import comparisonPic from '../../../assets/images/comparison.png'

const HeadingSection = () => {
    const { t } = useTranslation()
    return (
        <div className="bg-purpleCustom py-6 px-3  flex gap-3 justify-around items-center">
            <div className="w-[450px] mobile:text-center">
                <h1 className="text-[#C8C1ED] text-lg mb-2 ">{t('titleComparison')}</h1>
                <h2 className="text-white lg:text-3xl text-2xl mobile:text-xl">{t('descComparison')}</h2>
            </div>
            <img src={comparisonPic} className="lg:h-80 sm:h-60 mobile:hidden "/>
        </div>
    )
}

export default HeadingSection