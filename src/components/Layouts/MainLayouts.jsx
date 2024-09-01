import { Outlet } from "react-router-dom"
import Btn_Languages from "../../core/utility/Bilingual/changeLanguage_Btn"
import { useTranslation } from "react-i18next"
import Footer from "../partials/Footer/Footer";
import Header from "../partials/header/Header";

const MainLayouts = () => {
  const { i18n } = useTranslation();
  return (
    <div dir={i18n.language === 'fa' ? 'rtl' : 'ltr'} className={`${i18n.language==='fa'? 'font-Sahel':'font-Pop_Med'}`}>
      <div className="fixed left-4 bottom-20 z-50">
        <Btn_Languages />
      </div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>

  )
}

export default MainLayouts