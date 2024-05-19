import { useEffect, useState } from "react";


const Hooks = () => {
    const [menu,setMenu]=useState([]);
    // const [loading,setLOading]=useState(true);
    useEffect(()=>{
        fetch('http://localhost:5000/menu')
        .then(res=>res.json())
        .then(data=>{
            setMenu(data);
            setLOading(false);
        })
    } ,[])
    return [menu];
};

export default Hooks;