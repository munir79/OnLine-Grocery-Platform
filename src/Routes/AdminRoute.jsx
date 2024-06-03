import React from 'react';
import UseAdmin from '../Hooks/UseAdmin';

import { Navigate, useLocation } from 'react-router-dom';
import UseAuth from '../Hooks/UseAuth';

const AdminRoute = ({chidren}) => {
    const [user,loading]=UseAuth();
    const [isAdmin,isAdminLOading]=UseAdmin();
    const location = useLocation();

    if(loading || isAdminLOading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isAdmin) {
        return chidren;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default AdminRoute;