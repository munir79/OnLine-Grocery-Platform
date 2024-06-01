import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAxiosSecure from '../Hooks/UseAxiosSecure';
import { FaTrash, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const axiousSecure = UseAxiosSecure();
    const { data: users = [] ,refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiousSecure.get('/users');
            return res.data;
        }

    })

    const handleMakeAdmin=(user)=>{
      axiousSecure.patch(`/users/admin/${user._id}`)
      .then(res=>{
        console.log(res.data);
        if(res.data.modifiedCount>0){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.email} is an admin Now`,
            showConfirmButton: false,
            timer: 1500
          });

        }
      })
    }

  const handleDeleteUser=(user)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
    
        axiousSecure.delete(`/users/${user._id}`)
        .then(res=>{
            console.log(res);
            if(res.data.deletedCount>0){
                refetch();
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
            }
        })
        }
      });
  }
    return (
        <div>
            <div className='flex justify-evenly'>
                <h2> All Users</h2>
                <h2> Total Users:{users.length}</h2>
                <div>
                    <div className="overflow-x-auto">

                    </div>
                </div>
            </div>
        
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Role</th>
        <th>Action  </th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {
        users.map((user,index)=>  <tr key={user._id} className="bg-base-200">
        <th>{index+1}</th>
        <td>{user.email}</td>
        <td>
          {
            user.role==='admin'? 'Admin':
          
          
          <button onClick={()=>handleMakeAdmin(user)} className="btn btn-ghost btn-lg"> <FaUsers></FaUsers> </button>
}</td>

        <td>  <button onClick={()=>handleDeleteUser(user)} className="btn btn-ghost btn-lg"> <FaTrash></FaTrash> </button> </td>
      </tr>)
    }
    
    </tbody>
  </table>
</div>


        </div>
    );
};

export default AllUsers;