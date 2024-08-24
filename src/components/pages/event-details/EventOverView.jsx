import { useTranslation } from "react-i18next"

const EventOverView = ({
  overView,
  training,
  majorElement
}) => {
  const { t } = useTranslation();
  return (
    <div className="py-0.5">
      {/* OverView Text */}
      <h1 className="boldStyle_text my-3">{t('EventOverview')}</h1>
      <h2 className="mediumStyle_text">{t(overView)}</h2>
      {/* Learn Text */}
      <h1 className="boldStyle_text my-3">{t('LearnEvent')}</h1>
      <h2 className="mediumStyle_text">{t(training)}</h2>
    </div>
  )
}

export default EventOverView