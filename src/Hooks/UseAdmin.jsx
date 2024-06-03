import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAuth from './UseAuth';
import UseAxiosSecure from './UseAxiosSecure';

const UseAdmin = () => {
    const {user}= UseAuth();
    const axiousSecure=UseAxiosSecure();
    const {data:isAdmin,isPending:isAdminLOading}=useQuery({
        queryKey:[user?.email,'isAdmin'],
        queryFn:async()=>{
         const res= await axiousSecure.get(`/users/admin/${user.email}`);
         console.log(res.data);
         return res.data?.admin;
        }
    })
    return [isAdmin,isAdminLOading];
};

export default UseAdmin;