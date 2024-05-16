import React from 'react';
import ItemMenu from './Item/ItemMenu';

const MenuCatagorey = ({item}) => {
    return (
        <div className='grid md:grid-cols-2 gap-6 mt-12'>
        {
              item.map(item=><ItemMenu key={item._id} 
              item={item}></ItemMenu>)
          }
        </div>
    );
};

export default MenuCatagorey;