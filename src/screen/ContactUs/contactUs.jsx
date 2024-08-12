import TitleSection from "../../components/common/partials/TitleSection/titleSection"
import { Main, Map, Sidebar } from "../../components/pages/ContactUs"

const ContactUs = () => {
  return (
    <>
      <TitleSection title="تماس با ما" />
      <div className="sm:px-44 px-16 w-full flex flex-wrap gap-y-16 my-20">
        <div className="w-full flex justify-between gap-x-6">
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
