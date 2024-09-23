import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { useState } from "react"
import { routerPublic } from "../router";
import { useTranslation } from "react-i18next";
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import store from "../redux/store";
import { BottomNav } from "../components/common";

const App = () => {
  // const [isLogin, setLogin] = useState(false);
  // const router = createBrowserRouter(isLogin ? routerPublic : routerPublic);
  const { i18n } = useTranslation()
  return (
    <Provider store={store}>
      <NextUIProvider>
        <main dir={i18n.language === 'fa' ? 'rtl' : 'ltr'} className={`bg-MainBg  ${i18n.language === 'fa' ? 'font-IranSans' : 'font-Pop_Med'}`}>
          <RouterProvider router={routerPublic} />
          <BottomNav />
        </main>
      </NextUIProvider>
    </Provider>
  )
}

export default App