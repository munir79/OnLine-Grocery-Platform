import { useContext } from "react";
import { AutContext } from "../Provider/AuthProvider";
import UseAxiousPublic from "../Hooks/UseAxiousPublic";

const SignUp = () => {
   const axiousPublic=UseAxiousPublic();
    const {createUser}=useContext(AutContext);
    const HandleSignUp=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);
        createUser(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            const userInfo={
              email:email
            }
            axiousPublic.post('/users',userInfo)
            // .then(res=>{
            //   if(res.data.insertedId){
            //     alert(" user Posted SucessFully");
            //   }
            // })
            alert(" User Create Sucessfully ");
        })
        .catch(error=>{
            console.log(error);
        })

    }
    
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">signUp</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={HandleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button  className="btn btn-primary" type="submit">SignUp</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignUp;