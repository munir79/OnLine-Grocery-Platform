import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.init";

 export const AutContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
        } )

        return()=>{
       unsubscribe();
        }
    },[] )

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