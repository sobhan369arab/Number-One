import { useTranslation } from "react-i18next"
import { Label } from "../../common"

const LastBlogs = () => {
  const { t } = useTranslation()
  return (
    <div className="w-full py-28 lg:px-44 sm:px-16 px-8 flex flex-wrap gap-y-4 justify-center bg-gradientBackground bg-cover bg-center bg-no-repeat">
      <Label text={t("lastBlogsLabel")} variant="section" />
      <h1 className="boldStyle_text w-full text-center">{t("lastBlogsTitle")}</h1>
      <p className="mediumStyle_text text-center">{t("lastBlogsDesc")}</p>
      <div className="w-full h-80 bg-yellow-500"></div>
    </div>
  )
}

export default LastBlogs
