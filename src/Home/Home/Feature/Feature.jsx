import React from 'react';
import SectionTittle from '../../../Component/SectionTittle/SectionTittle';
import fet from '../../../assets/home/featured.jpg'
import '../../../Css/Feature.css'

const Feature = () => {
    return (
        <div className='feature text-white'>
            <SectionTittle Subheading={"Cheek it Out"} heading={" From Our Menu"} >
               
            </SectionTittle>
            <div className='md:flex justify-center items-center py-8 px-16'>
                    <div><img src={fet} alt="" /></div>
                    <div className='m-4 p-5'>
                        <h2> March 20,2023</h2>
                        <h4 className='uppercase'> Where can I get some?</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                            Read More</p>
                    </div>
                </div>
        </div>
    );
};

export default Feature;