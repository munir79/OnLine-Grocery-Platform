import React from 'react';
import ItemMenu from './Item/ItemMenu';
import Cover from './Cover';
import { Link } from 'react-router-dom';



const MenuCatagorey = ({item,title,img}) => {
    return (
      <div>
   {title &&  <Cover title={title} img={img}></Cover>}

          <div className='grid md:grid-cols-2 gap-6 mt-12'>
       {
        item.map(item=><ItemMenu key={item._id} item={item}></ItemMenu>)
       }
        </div>
        <Link to='/order'>  <button className=" mt-4 border-0  text-xl font-bold border-b-4 btn btn-outline">Order Now</button></Link>
      </div>
    );
};

export default MenuCatagorey;