import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/mainLayout/MainLayout";
import Home, { homeLoader } from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";




const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                element:<Home/>,
                index:true,
                loader:homeLoader
            },
            {
                path:"about",
                element:<About/>,
            },
            {
                path:"portfolio",
                element:<Portfolio/>,
            },
            {
                path:"contact",
                element:<Contact/>,
            }
        ]
    }
])

export default router;