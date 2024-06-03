import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import UseAxiousPublic from "./UseAxiousPublic";


const Hooks = () => {
    const axiosPublic=UseAxiousPublic();
    // const [menu,setMenu]=useState([]);
    // const [loading,setLOading]=useState(true);
    // useEffect(()=>{
    //     fetch('http://localhost:5000/menu')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setMenu(data);
    //         setLOading(false);
    //     })
    // } ,[])

const {data:menu=[],refetch ,isPending:loading}=useQuery({
    queryKey:['menu'],
    queryFn:async()=>{
        const res=await axiosPublic.get('/menu');
        return res.data;

    }
})


    return [menu,loading,refetch];
};

export default Hooks;