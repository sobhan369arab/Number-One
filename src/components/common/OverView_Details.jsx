import { useTranslation } from "react-i18next"
import OptionParts from "./optionParts"

const OverView_Details = ({
    overView,
    training,
    MajorElements }) => {
    const { t } = useTranslation()
    return (
        <div>
            <div className="Box-shadow1 p-5 bg-white rounded-lg border border-neutral-300">
                {/* OverView Text */}
                <h1 className="boldStyle_text mb-3">{t('CourseOverView')}</h1>
                <h2 className="mediumStyle_text">{t(overView)}</h2>
                {/* Learn Text */}
                <h1 className="boldStyle_text my-3">{t('LearnCourse')}</h1>
                <h2 className="mediumStyle_text">{t(training)}</h2>
                {MajorElements.map((item, index) => (
                    <OptionParts
                        key={index}
                        text={item}
                        holderStyle="justify-center lg:justify-start my-4"
                        disableIconIn="1024px"
                    />
                ))}
                <h3 className="mediumStyle_text">{t(training)}</h3>
            </div>
        </div>
    )
}

export default OverView_Details