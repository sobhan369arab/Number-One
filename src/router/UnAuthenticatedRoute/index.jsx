import { createBrowserRouter, Navigate } from "react-router-dom"
import { ContactUs, Error404, EventDetails, EventList, Instructors, InstructorDetail, Courses } from "../../screen"
import Landing from "../../screen/landing/landing"
import MainLayouts from "../../components/Layouts/MainLayouts"

const routerPublic = createBrowserRouter([
    {
        element: <MainLayouts/>,
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
            { path: "/instructors", element: <Instructors /> },
            {
                path: "/instructorsDetails",
                element: <InstructorDetail />,
                children: [{ path: '/instructorsDetails/:id', element: <InstructorDetail /> }]
            },
            { path: '/*', element: <Error404 /> },
        ]
    }
])
export default routerPublic