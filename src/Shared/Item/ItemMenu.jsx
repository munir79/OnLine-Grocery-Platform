import React from 'react';

const ItemMenu = ({item}) => {
    const {name,recipe,image,price}=item;
    return (
        <div className='flex mt-2 mb-2'>
            <img style={{borderRadius:'0 200px 200px'}} className='w-[100px]' src={image} alt="" />
            <div className='m-4'> 
               <h3 className= 'font-bold uppercase'>---------------------------------------- </h3>
               <p>{recipe} </p>
            </div>
            <h4 className='text-2xl m-3 text-yellow-500'> ${price} </h4>
        </div>
    );
};

export default ItemMenu;