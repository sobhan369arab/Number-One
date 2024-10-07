import { RouterProvider } from "react-router-dom"
import { routerPublic } from "../router";
import { useTranslation } from "react-i18next";
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import store from "../redux/store";
import { BottomNav, ToastAlert } from "../components/common";
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const App = () => {
  // const [isLogin, setLogin] = useState(false);
  // const router = createBrowserRouter(isLogin ? routerPublic : routerPublic);
  const { i18n } = useTranslation()
  const notify = () => toast.success("Wow so easy !");

  // Create a client
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  })

  return (
    <Provider store={store}>
      <NextUIProvider>
        <QueryClientProvider client={queryClient}>
          <main dir={i18n.language === 'fa' ? 'rtl' : 'ltr'} className={`bg-MainBg  ${i18n.language === 'fa' ? 'font-IranSans' : 'font-Pop_Med'}`}>
            <ToastAlert />
            <RouterProvider router={routerPublic} />
            <BottomNav />
          </main>
        </QueryClientProvider>
      </NextUIProvider>
    </Provider>
  )
}

export default App