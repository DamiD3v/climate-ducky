import { createBrowserRouter } from "react-router-dom";
import Home from '../Home.jsx'
import About from '../pages/About.jsx'
import ErrorPage from '../pages/ErrorPage.jsx'


const router = createBrowserRouter([
    {
        path:"/",
        element: <Home/>,
        errorElement: <ErrorPage/>
    },
    {
        path:"/about",
        element: <About/>,
        errorElement: <ErrorPage/>
    }
])

export default router;