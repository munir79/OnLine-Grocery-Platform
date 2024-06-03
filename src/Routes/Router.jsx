import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import OurMenu from "../OurMenuPage/OurMenu/OurMenu";
import Order from "../Order/Order/Order";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";
import Secret from "../PrivateRoute/Secret";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashBoard from "../Layout/DashBoard";
import UserPurchaseHistroy from "../UserDashBoard/UserPurchaseHistroy";
import AllUsers from "../AdminSection/AllUsers";
import AddItem from "../AdminSection/AddItem/AddItem";
import AdminRoute from "./AdminRoute";




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
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },{
                path:'/secret',
                element:<PrivateRoute><Secret></Secret></PrivateRoute>
            }
        ]
    },
    {
        path:'dashboard',
        element:<DashBoard></DashBoard>,
        children:[
            {
                path:'cart',
                element:<UserPurchaseHistroy></UserPurchaseHistroy>
            },
    // Admin Route

             
    {
        path:'aditem',
        element: <AddItem></AddItem> 
    },
            {
                path:'users',
                element:<AllUsers></AllUsers>
            }

          
        ]

    }
])
export default router;