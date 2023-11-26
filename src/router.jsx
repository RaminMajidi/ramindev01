import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/mainLayout/MainLayout";
import Home, { homeLoader } from "./pages/Home";




const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                element:<Home/>,
                index:true,
                loader:homeLoader

            }
        ]
    }
])

export default router;