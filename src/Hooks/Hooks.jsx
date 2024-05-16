import { useEffect, useState } from "react";


const Hooks = () => {
    const [menu,setMenu]=useState([]);
    const [loading,setLOading]=useState(true);
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            setMenu(data);
            setLOading(false);
        })
    } ,[])
    return [menu,loading];
};

export default Hooks;