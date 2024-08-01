import { createBrowserRouter } from "react-router-dom"
import Layouts from "./Layouts/Layouts"
import Login from "./auth/Login/Login"

const Routers = createBrowserRouter([
    {
        path:'/',
        element:<Layouts/>,
        children:[
            {index:true, path:'/Login', element:<Login/>}
        ]
    }
])
  


export default Routers