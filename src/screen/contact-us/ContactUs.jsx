import { useTranslation } from "react-i18next";
import { ContactMain, ContactSidebar } from "../../components/pages/contact-us"
import TitleSection from "../../components/partials/title-section/TitleSection";
import { CustomMap } from "../../components/common";

const ContactUs = () => {
  const {t} = useTranslation();
  return (
    <>
      <TitleSection title={t("contactUsTitle")} />
      <div className="lg:px-44 sm:px-16 px-8 w-full flex flex-wrap gap-y-16 my-20">
        <div className="w-full h-fit xl:h-auto flex flex-wrap xl:flex-nowrap justify-between gap-y-4 xl:gap-x-6">
          <ContactSidebar />
          <ContactMain />
        </div>
        {/* Map */}
        <div className="w-full h-[400px] overflow-hidden flex justify-center rounded-xl">
          <CustomMap width="100%" height="100%" />
        </div>
      </div>
    </>
  )
}

export default ContactUs
