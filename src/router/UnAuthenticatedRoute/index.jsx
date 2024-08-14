import { createBrowserRouter } from "react-router-dom"
import Layouts from "../../components/Layouts/MainLayouts"
import { ContactUs, Courses, Error404, EventDetails, EventList } from "../../screen"

const routerPublic = createBrowserRouter([
    {
        path: '/',
        element: <Layouts />,
        children: [
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