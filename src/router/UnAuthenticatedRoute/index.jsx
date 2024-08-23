<<<<<<< HEAD
import { createBrowserRouter, Navigate } from "react-router-dom"
import Layouts from "../../components/Layouts/MainLayouts"
=======
import { createBrowserRouter } from "react-router-dom"
import Layouts from "../../components/layouts/MainLayouts"
>>>>>>> 2c23e377654e3d1626e00dccf231f84aa45aa792
import { ContactUs, Error404, EventDetails, EventList } from "../../screen"
import Landing from "../../screen/landing/landing"
// import Error404 from "../../screen/ErrorPage/Error404"
// import EventList from "../../screen/Events/Events"
// import EventDetails from "../../screen/EventsDetail/EventDetails"
// import ContactUs from "../../screen/ContactUs/contactUs"

const routerPublic = createBrowserRouter([
    {
        element: <Layouts />,
        children: [
            { path: '/', element: <Landing /> },
            { path: '/home', element: <Navigate to={"/"} /> },
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