import { createBrowserRouter } from "react-router-dom"
import Layouts from "./Layouts/Layouts"
import Login from "./auth/Login/Login"
import SignUp from "./auth/signUp/signUp"
import Error404 from "./screens/ErrorPage/Error404"

const Routers = createBrowserRouter([
    {
        path: '/',
        element: <Layouts />,
        children: [
            { path: '/Login', element: <Login /> },
            { path: '/SignUp', element: <SignUp /> },
            { path: '*', element: <Error404 /> },

        ]
    }
])



export default Routers