import { useForm } from "react-hook-form";
import SectionTittle from "../../Component/SectionTittle/SectionTittle";
import { FaUtensils } from "react-icons/fa";


const AddItem = () => {
    const { register, handleSubmit } = useForm()
  const onSubmit = (data) =>{
    console.log(data);
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
   {...register("name")}
    className="input input-bordered w-full " />
  
</label>


<div className="flex gap-6">
    {/* catagorey */}
    <label className="form-control w-full my-6 ">
  <div className="label">
    <span className="label-text">Categorey*</span>
   
  </div>
  <select  {...register("category")}
       className="select select-bordered w-full ">
  <option disabled selected>Select a Categorey</option>
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
   {...register("price")}
    className="input input-bordered w-full " />
  
</label>

</div>

<label className="form-control">
  <div className="label">
    <span className="label-text">Reciepe Details</span>
    
  </div>
  <textarea {...register(recipe)} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
</label>

<div className="form-control w-full my-6 ">
<input {...register(image)} type="file" className="file-input w-full max-w-xs" />
</div>
     
      <button className="btn "> <FaUtensils className="ml-4"></FaUtensils> Add Item  </button>
    </form>
           </div> 
        </div>
    );
};

export default AddItem;