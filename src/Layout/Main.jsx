import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";


const Main = () => {
    const location=useLocation();
    console.log(location);
    const isLoging=location.pathname.includes('/login');
    return (
        <div>
           { isLoging || <Navbar></Navbar>}
            <Outlet></Outlet>
           { isLoging ||  <Footer></Footer>  }
        </div>
    );
};

export default Main;