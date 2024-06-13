import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaCartArrowDown, FaList, FaUsers, FaUtensils } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { MdAddBox } from "react-icons/md";
import { MdAddCard } from "react-icons/md";
import UseAdmin from "../Hooks/UseAdmin";



const DashBoard = () => {
    const [isAdmin]=UseAdmin();
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
              <ul className="menu">
               {
                isAdmin ?
                <>
                 <li>
                    <NavLink to="/dashboard/adminHome">    <FaCartArrowDown /> Admin Home </NavLink>
                 
                </li>
                <li>
                    <NavLink to="/dashboard/aditem">  <FaUtensils></FaUtensils>   Add Item </NavLink>
                 
                </li>
                <li>
                    <NavLink to="/dashboard/manageitems">  <FaList></FaList> ManageItems </NavLink>
                 
                </li>
                <li>
                    <NavLink to="/dashboard/managebookings">  <FaBook></FaBook> ManageBookings </NavLink>
                 
                </li>
                <li>
                    <NavLink to="/dashboard/users"> <FaUsers></FaUsers>  AllUsers</NavLink>
                 
                </li>
                </>
                :
                <>
                 <li>
                    <NavLink to="/dashboard/cart">    <FaCartArrowDown /> My Cart </NavLink>
                 
                </li>
                <li>
                    <NavLink to="/dashboard/userHome">    <FaHome /> Home </NavLink>
                 
                </li>
                <li>
                    <NavLink to="/dashboard/paymentHistory">  <FaCalendarAlt /> Payment History </NavLink>
                 
                </li>
                <li>
                    <NavLink to="/dashboard/review">  <MdAddBox /> Review </NavLink>
                 
                </li>
                <li>
                    <NavLink to="/dashboard/mybookings">  <MdAddCard /> My bookings</NavLink>
                 
                </li></>
               }
                <div className="divider">OR</div>
                <li>
                    <NavLink to="/">  <MdAddCard /> Home</NavLink>
                 
                </li>
                <li>
                    <NavLink to="/order">  <MdAddCard /> Order</NavLink>
                 
                </li>
              </ul>
            </div>
            
            <div className="flex-1 p-8">
            <Outlet></Outlet>
          
            </div>
        </div>
    );
};

export default DashBoard;