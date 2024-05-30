import { NavLink, Outlet } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { MdAddBox } from "react-icons/md";
import { MdAddCard } from "react-icons/md";



const DashBoard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
              <ul className="menu">
                <li>
                    <NavLink to="/dashboard/cart">    <FaCartArrowDown /> My Cart </NavLink>
                 
                </li>
                <li>
                    <NavLink to="/dashboard/userhome">    <FaHome /> Home </NavLink>
                 
                </li>
                <li>
                    <NavLink to="/dashboard/reservation">  <FaCalendarAlt /> Reservation </NavLink>
                 
                </li>
                <li>
                    <NavLink to="/dashboard/review">  <MdAddBox /> Review </NavLink>
                 
                </li>
                <li>
                    <NavLink to="/dashboard/mybookings">  <MdAddCard /> My bookings</NavLink>
                 
                </li>
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