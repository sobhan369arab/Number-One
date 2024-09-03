import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { useState } from "react"
import { routerPublic } from "../router";
import { useTranslation } from "react-i18next";
import Btn_Languages from "../core/utility/Bilingual/changeLanguage_Btn"

const App = () => {
  // const [isLogin, setLogin] = useState(false);
  // const router = createBrowserRouter(isLogin ? routerPublic : routerPublic);
  const { i18n } = useTranslation()
  return (
    <div dir={i18n.language === 'fa' ? 'rtl' : 'ltr'} className={`${i18n.language === 'fa' ? 'font-IranSans' : 'font-Pop_Med'}`}>
      <RouterProvider
        router={routerPublic}
      />
      <div className="fixed left-4 bottom-20 z-50">
        <Btn_Languages />
      </div>
    </div>
  )
}

export default App