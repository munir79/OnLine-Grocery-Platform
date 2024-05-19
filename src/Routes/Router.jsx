import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import OurMenu from "../OurMenuPage/OurMenu/OurMenu";
import Order from "../Order/Order/Order";
import Login from "../Auth/Login";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
            path:'/',
            element:<Home></Home>
            },
            {
                path:'/ourmenu',
                element:<OurMenu></OurMenu>
            },
            {
                path:'/order',
                element:<Order></Order>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    }
])
export default router;