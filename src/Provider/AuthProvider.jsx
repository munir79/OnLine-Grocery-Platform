import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.init";
import UseAxiousPublic from "../Hooks/UseAxiousPublic";

 export const AutContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiousPublic=UseAxiousPublic();
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            if(currentUser){
               const userInfo={email:currentUser.email};
               axiousPublic.post('/jwt',userInfo)
               .then(res=>{
                if(res.data.token){
                    localStorage.setItem("acess-token",res.data.token);
                }
               })
            }
            else{
              localStorage.removeItem("acess-token");
            }
            setLoading(false);
        } )

        return()=>{
       unsubscribe();
        }
    },[axiousPublic] )

const createUser=(email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
}

const signin=(email,password)=>{
    setLoading(true);
   return signInWithEmailAndPassword(auth,email,password);
}

const Logout=()=>{
    setLoading(true);
    return signOut(auth);
}
    const AuthInfo = { user,Logout, loading,createUser,signin }
    return (
        <AutContext.Provider value={AuthInfo}>
            {
                children
            }
        </AutContext.Provider>
    );
};

export default AuthProvider;