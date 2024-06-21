import { useContext } from "react";
import { Link } from "react-router-dom";
import { AutContext } from "../Provider/AuthProvider";
import { FaCartShopping } from "react-icons/fa6";
import UseCart from "../Hooks/UseCart";
import UseAdmin from "../Hooks/UseAdmin";

const Navbar = () => {
  const {user,Logout}=useContext(AutContext);
  const [isAdmin]=UseAdmin();
  const [cart]=UseCart();
  const handleLogout=()=>{
    Logout()
    .then(()=>{
      alert("Log out Sucessfully ");
    })
    .catch(error=>{
      console.log(error);
    })
  }
    const navOption=<>
           
            <li><Link to='/'>Home </Link> </li>
              
              <li><Link to='/ourmenu'>Our Menu</Link> </li>
              <li><Link to='/order'>Order Food </Link> </li>
              {/* {
                user && isAdmin &&   <li><Link to='/dashboard/adminHome'>Order Food </Link> </li>
              }
              {
                user && isAdmin &&   <li><Link to='/dashboard/userHome'>Order Food </Link> </li>
              } */}

              <li><Link to='/dashboard/cart'>
                
                <div className="indicator">
         <span className="indicator-item badge badge-secondary"></span> 
        <button className="btn"><FaCartShopping />{cart.length} </button>
</div>
                
                </Link> </li>
          {
              user?  <button onClick={handleLogout}><li><Link to=''>Log Out </Link> </li></button>
               : <li><Link to='/login'>Log in </Link> </li>
          }
              <li><Link to='/signup'>Sign Up </Link> </li>
              {/* <li><Link to='/secret'>Secret </Link> </li> */}
   

    
    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-30 max-w-7xl text-white bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navOption}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">NEXA
</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOption}
          </ul>
        </div>
        {/* <div className="navbar-end">
        {user?.email ?  <a className="btn"> {user.email} </a>: ""}
         
        </div> */}
      </div>
    );
};

export default Navbar;