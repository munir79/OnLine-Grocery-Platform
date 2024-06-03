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
import ManageItem from "../AdminSection/ManageItem/ManageItem";
import UpdateItem from "../AdminSection/UpdateItem/UpdateItem";




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
            },
            {
             path:'updateItem/:id',
             element:<UpdateItem></UpdateItem>,
             loader:({params})=>fetch(`http://localhost:5000/menu/${params.id}`)
            },
            {
                path:'manageitems',
                element:<ManageItem></ManageItem>
            }

          
        ]

    }
])
export default router;