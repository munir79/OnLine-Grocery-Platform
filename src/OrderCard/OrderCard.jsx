// import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from "axios";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import UseCart from "../Hooks/UseCart";


const OrderCard = ({item}) => {
  const [, refetch]=UseCart();
    const {name,recipe,image,price,_id}=item;

    
    const navigate=useNavigate();
    const location=useLocation();
    const AxiousSecure=UseAxiosSecure();
    const {user}=UseAuth();
const handleAddToCart=()=>{
  // console.log(food,user.email);
  if(user && user.email){
   const CardItem={
    name,
    menuId:_id,
    email:user.email,
    name,
    image,
    price
  

   }
   AxiousSecure.post('/carts',CardItem)
   .then(res=>{
   if(res.data.insertedId){
    alert("data inserted Sucessfully");
   }
   refetch();
   })
 
  }
  
  else{
    Swal.fire({
      title: "You Should Log in To Add to Cart",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log in"
    }).then((result) => {
      if (result.isConfirmed) {
       navigate('/login',{state:{from:location}});
      }
    });
  }
}

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <p className=" absolute right-0 mr-4 mt-4 p-3 bg-slate-950  text-white"> ${price} </p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe} </p>
          <div className="card-actions justify-end">
            <button 
            onClick={handleAddToCart}
            
            className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
    );
};

export default OrderCard;