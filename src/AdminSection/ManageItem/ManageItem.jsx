import React from 'react';
import SectionTittle from '../../Component/SectionTittle/SectionTittle';
import Hooks from '../../Hooks/Hooks';
import { FaTrash } from 'react-icons/fa6';
import { FaEdit } from 'react-icons/fa';
import Swal from 'sweetalert2';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';

const ManageItem = () => {
    
    const [menu]=Hooks();
    const AxiosSecure=UseAxiosSecure();

    const handleDeleteItem= (item)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async(result) => {
            if (result.isConfirmed) {
                const res=await AxiosSecure.delete(`/menu/${item._id}`);
               // console.log(res.data);
                if(res.data.deletedCount>0){
                    // refetch();
                   Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} has been deleted sucessfully`,
                        showConfirmButton: false,
                        timer: 1500
                      });

                }
            
            }
          });
    }
    return (
        <div>
            <SectionTittle heading="Manage All Item" Subheading="Hurry Up" ></SectionTittle>
            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
          
          </label>
        </th>
        <th>Image</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Update </th>
        <th>Delete </th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        menu.map((item,index)=><tr key={item._id}>
            <td>
             {index+1}
            </td>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image}alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
               
              </div>
            </td>
            <td>
             {item.name}
            </td>
            <td> ${item.price} </td>
            <td>
            <button className="btn btn-ghost btn-sm bg-orange-500"><FaEdit className='text-white'></FaEdit> </button>
            </td>
            <td>
            <button  onClick={()=>handleDeleteItem(item)} className="btn btn-ghost btn-lg text-red-600"> <FaTrash></FaTrash></button>
            </td>
          </tr>)
      }
     
    </tbody>
    {/* foot */}
   
    
  </table>
</div>
            </div>
        </div>
    );
};

export default ManageItem;