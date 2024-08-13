import { useTranslation } from "react-i18next";
import TitleSection from "../../components/common/partials/TitleSection/titleSection"
import { Main, Map, Sidebar } from "../../components/pages/ContactUs"

const ContactUs = () => {
  const {t} = useTranslation();
  return (
    <>
      <TitleSection title={t("contactUsTitle")} />
      <div className="lg:px-44 sm:px-16 px-8 w-full flex flex-wrap gap-y-16 my-20">
        <div className="w-full h-fit xl:h-auto flex flex-wrap xl:flex-nowrap justify-between gap-y-4 xl:gap-x-6">
          <Sidebar />
          <Main />
        </div>
        {/* Map */}
        <div className="w-full h-[400px] overflow-hidden flex justify-center rounded-xl">
          <Map />
        </div>
      </div>
    </>
  )
}

export default ContactUs
