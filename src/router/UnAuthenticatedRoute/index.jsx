import { createBrowserRouter, Navigate } from "react-router-dom"
import { MainLayouts, UserPanelLayout } from "../../components/layouts"
import { 
    ContactUs, 
    Error404, 
    EventDetails, 
    EventList, 
    Instructors, 
    InstructorDetail, 
    Courses, 
    Comparison, 
    CourseDetail,
    Dashboard,
    Favorites,
    Information,
    MyCourses,
    MyViews,
    Reserved,
    Security,
    EditInformation,
    Landing
} from "../../screen"

const routerPublic = createBrowserRouter([
    {
        element: <MainLayouts />,
        children: [
            { path: '/', element: <Landing /> },
            { path: '/home', element: <Navigate to={"/"} /> },
            { path: '/ContactUs', element: <ContactUs /> },
            { path: '/Courses', element: <Courses /> },
            {
                path: '/CourseDetails',
                element: <CourseDetail />,
                children: [{ path: '/CourseDetails/:id', element: <CourseDetail /> }]
            },
            {
                path: '/Comparison',
                element: <Comparison />,
                children: [{ path: '/Comparison/:id', element: <Comparison /> }]
            },
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
            // { path: '/Comparison', element: <Comparison/> },
            { path: '/*', element: <Error404 /> },
        ]
    },
    {
        element: <UserPanelLayout />,
        children: [
            { path: "/userPanel", element: <Dashboard /> },
            { path: "/userPanel/information", element: <Information /> },
            { path: "/userPanel/editInformation", element: <EditInformation /> },
            { path: "/userPanel/myCourses", element: <MyCourses /> },
            { path: "/userPanel/reserved", element: <Reserved /> },
            { path: "/userPanel/myViews", element: <MyViews /> },
            { path: "/userPanel/favorites", element: <Favorites /> },
            { path: "/userPanel/security", element: <Security /> },
        ]
    }
])
export default routerPublic