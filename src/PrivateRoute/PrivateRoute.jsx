import { useContext } from "react";
import { AutContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({chidren}) => {
    const location=useLocation();
   const {user,loading}=useContext(AutContext);
   if(loading){
    return (<div>
        <span className="loading loading-spinner text-primary"></span>
<span className="loading loading-spinner text-secondary"></span>
<span className="loading loading-spinner text-accent"></span>
<span className="loading loading-spinner text-neutral"></span>
<span className="loading loading-spinner text-info"></span>
<span className="loading loading-spinner text-success"></span>
<span className="loading loading-spinner text-warning"></span>
<span className="loading loading-spinner text-error"></span>
    </div>)
   }
   if(user){
    return chidren;
   }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;