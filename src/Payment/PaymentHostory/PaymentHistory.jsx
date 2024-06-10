import React from 'react';
import UseAuth from '../../Hooks/UseAuth';
import { useQuery } from '@tanstack/react-query';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';

const PaymentHistory = () => {
    const {user}=UseAuth();
    const axiousSecure=UseAxiosSecure();
    const {data:payments=[]}=useQuery({
        queryKey:['payments',user.email],
        queryFn:async()=>{
            const res= await axiousSecure.get(`/payments/${user.email}`)
              return res.data;
        }
    })
    return (
        <div>
            <h2 className='text-3xl' >Total Payments History:{payments.length} </h2>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Price </th>
        <th>Transaction id </th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {
        payments.map((payment,index)=> <tr key={payment._id}>
            <th>{index+1} </th>
            <td>{payment.price} </td>
            <td>{payment.transactionId} </td>
            <td>{payment.status} </td>
          </tr>)
      }
     
   
   
    </tbody>
  </table>
</div>
        </div>
    );
};

export default PaymentHistory;