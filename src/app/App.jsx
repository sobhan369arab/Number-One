import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { useState } from "react"
import { routerPublic } from "../router";
import { NextUIProvider } from "@nextui-org/react";
const App = () => {
  // const [isLogin, setLogin] = useState(false);
  // const router = createBrowserRouter(isLogin ? routerPublic : routerPublic);
  return (
    <NextUIProvider>
      <RouterProvider
        router={routerPublic}
      />
    </NextUIProvider>
  )
}

export default App