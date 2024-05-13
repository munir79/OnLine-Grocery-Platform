import React, { useEffect, useState } from 'react';
import SectionTittle from '../../../Component/SectionTittle/SectionTittle';
import ItemMenu from '../../../Shared/Item/ItemMenu';

const PopularMeny = () => {
    const [menu,setMenu]=useState([]);
     useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const menuItem=data.filter(item=>item.category==="popular");
            setMenu(menuItem);
        })
     } ,[])
    return (
        <div>
            <SectionTittle Subheading={"Cheek it Out "}  
            heading={"From Our Menu "}></SectionTittle>
          <div className='grid md:grid-cols-2 gap-6 mt-12'>
          {
                menu.map(item=><ItemMenu key={item._id} 
                item={item}></ItemMenu>)
            }
          </div>
        </div>
    );
};

export default PopularMeny;