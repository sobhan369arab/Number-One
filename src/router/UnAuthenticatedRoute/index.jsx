import Layouts from "../../components/Layouts/MainLayouts"
import { createBrowserRouter, Navigate } from "react-router-dom"
import { ContactUs, Courses, Error404, EventDetails, EventList } from "../../screen"
import Landing from "../../screen/landing/landing"

const routerPublic = createBrowserRouter([
    {
        element: <Layouts />,
        children: [
            { path: '/', element: <Landing /> },
            { path: '/home', element: <Navigate to={"/"} /> },
            { path: '/ContactUs', element: <ContactUs /> },
            { path: '/Courses', element: <Courses/> },
            { path: '/Events', element: <EventList /> },
            {
                path: '/EventDetails',
                element: <EventDetails />,
                children: [{ path: '/EventDetails/:id', element: <EventDetails /> }]
            },
            { path: '/*', element: <Error404 /> },
        ]
    }
])
export default routerPublic