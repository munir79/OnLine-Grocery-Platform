import React, { useEffect, useState } from 'react';
import SectionTittle from '../../../Component/SectionTittle/SectionTittle';

import Hooks from '../../../Hooks/Hooks';
import MenuCatagorey from '../../../Shared/MenuCatagorey';
import ItemMenu from '../../../Shared/Item/ItemMenu';

const PopularMeny = () => {
    const [menu]=Hooks([]);
    const popularMenu=menu.filter(item=>item.category== "popular")
    return (
        <div>
            <SectionTittle Subheading={"Cheek it Out "}  
            heading={"From Our Menu "}></SectionTittle>
            <div className='grid md:grid-cols-2 gap-6 mt-12'>
        {
              popularMenu.map(item=><ItemMenu key={item._id} item={item}></ItemMenu>)
          }
        </div>
        </div>
    );
};

export default PopularMeny;