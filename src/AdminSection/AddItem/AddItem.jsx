import { useForm } from "react-hook-form";
import SectionTittle from "../../Component/SectionTittle/SectionTittle";
import { FaUtensils } from "react-icons/fa";
import UseAxiousPublic from "../../Hooks/UseAxiousPublic";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";


const image_hosting_key=import.meta.env.VITE_IMAGE_IMAGE_HOSTING_KEY;
const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItem = () => {
    const { register, handleSubmit,reset } = useForm();
    const axiousPublic=UseAxiousPublic();
    const axiousSecure=UseAxiosSecure();
  const onSubmit = async (data) =>{
    console.log(data);
    const imageFile={ image:data.image[0]}
    const res=await axiousPublic.post(image_hosting_api,imageFile ,{
        headers:{
            'content-type': 'multipart/form-data'
        }
    });

    // now send the data to the server with image uri
    if(res.data.success){
      
        const menuiItem={
            name:data.name,
            category:data.category,
            price:parseFloat(data.price),
            recipe:data.recipe,
            image:res.data.data.display_url
            


        }
        const menuRes=await axiousSecure.post('/menu',menuiItem);
        console.log(menuRes.data);
        if(menuRes.data.insertedId){
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} is added sucessfully`,
                showConfirmButton: false,
                timer: 1500
              });
        }
    }
    console.log(res.data);
  }
    return (
        <div>
           <SectionTittle heading={"Add Item"} Subheading={"whats New ?"}></SectionTittle>
           {/* heading,Subheading */}

           <div>
           <form onSubmit={handleSubmit(onSubmit)}>
    
      <label className="form-control w-full my-6 ">
  <div className="label">
    <span className="label-text">Reciepe Name*</span>
   
  </div>
  <input 
   type="text" placeholder="Reciepe Name"
   {...register("name",{required:true})}
   required
    className="input input-bordered w-full " />
  
</label>


<div className="flex gap-6">
    {/* catagorey */}
    <label className="form-control w-full my-6 ">
  <div className="label">
    <span className="label-text">Categorey*</span>
   
  </div>
  <select defaultValue="default"  {...register("category",{required:true})}
  required
       className="select select-bordered w-full ">
  <option disabled value="default">Select a Categorey</option>
  <option value="salad">salad</option>
  <option value="Pizza">Pizza</option>
  <option value="Desert1">Desert</option>
  <option value="soup">soup</option>
  <option value="offered">Drinks</option>

</select>
  
</label>
    {/* price */}
    <label className="form-control w-full my-6 ">
  <div className="label">
    <span className="label-text">Price</span>
   
  </div>
  <input 
   type="number" placeholder="price"
   {...register("price" ,{required:true})}
   required
    className="input input-bordered w-full " />
  
</label>

</div>

<label className="form-control">
  <div className="label">
    <span className="label-text">Reciepe Details</span>
    
  </div>
  <textarea {...register("recipe",{required:true})}
  required

   className="textarea textarea-bordered h-24" placeholder="enter details"></textarea>
</label>

<div className="form-control w-full my-6 ">
<input  {...register("image",{required:true})}
required
 type="file" className="file-input w-full max-w-xs" />
</div>
     
      <button className="btn "> <FaUtensils className="ml-4"></FaUtensils> Add Item  </button>
    </form>
           </div> 
        </div>
    );
};

export default AddItem;