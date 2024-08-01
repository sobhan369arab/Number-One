import { RouterProvider } from "react-router-dom"
import Routers from "./app/Routers"

const App = () => {
  return (
    <RouterProvider
      router={Routers}
    />
  )
}

export default App