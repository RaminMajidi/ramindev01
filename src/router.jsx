import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/mainLayout/MainLayout";
import Home, { homeLoader } from "./pages/Home";
import About, { aboutLoader } from "./pages/About";
import Portfolio, { portfolioLoader } from "./pages/Portfolio";
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
                loader:aboutLoader
            },
            {
                path:"portfolio",
                element:<Portfolio/>,
                loader:portfolioLoader
            },
            {
                path:"contact",
                element:<Contact/>,
            }
        ]
    }
])

export default router;