import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { useState } from "react"
import { routerPublic } from "../router";

const App = () => {
  // const [isLogin, setLogin] = useState(false);
  // const router = createBrowserRouter(isLogin ? routerPublic : routerPublic);
  return (
    <RouterProvider
      router={routerPublic}
    />
  )
}

export default App