import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";


const Main = () => {
    const location=useLocation();
    console.log(location);
    // const isLoging=location.pathname.includes('/login');
    const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('/signup');
    return (
        <div>
           { noHeaderFooter|| <Navbar></Navbar>}
            <Outlet></Outlet>
           { noHeaderFooter ||  <Footer></Footer>  }
        </div>
    );
};

export default Main;