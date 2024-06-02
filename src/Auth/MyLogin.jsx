import React, { useContext } from 'react';
import { AutContext } from '../Provider/AuthProvider';

const MyLogin = () => {
    const {signin}=useContext(AutContext);
    const  myHandleLogin=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);
        signin(email,password)
        .then(result=>{
            const user=result.user;
            alert("Log in SucessFully");
            console.log(user);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div>
            <form onSubmit={myHandleLogin} >
            
            <input type="email" name="email" id="" /> <br />
            <input type="password" name="password" id="" /><br />
            <button type="submit">Login </button>


            </form>
        </div>
    );
};

export default MyLogin;