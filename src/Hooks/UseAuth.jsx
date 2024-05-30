import { useContext } from "react";
import { AutContext } from "../Provider/AuthProvider";


const UseAuth = () => {
    const Auth=useContext(AutContext);
    return Auth;
};

export default UseAuth;