import { createBrowserRouter } from "react-router-dom"
import Layouts from "../../components/Layouts/MainLayouts"
import Error404 from "../../screen/ErrorPage/Error404"
import EventList from "../../screen/Events/Events"
import EventDetails from "../../screen/EventsDetail/EventDetails"
import ContactUs from "../../screen/ContactUs/contactUs"

const routerPublic = createBrowserRouter([
    {
        path: '/',
        element: <Layouts />,
        children: [
            { path: '/ContactUs', element: <ContactUs /> },
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