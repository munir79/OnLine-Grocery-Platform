import React, { useEffect, useState } from 'react';
import SectionTittle from '../../Component/SectionTittle/SectionTittle';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Review = () => {
    const [review,setReview]=useState([]);
    useEffect( ()=>{
        fetch('review.json')
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[])
    return (
        <div className='mt-5'>
            <SectionTittle heading={"Testimonial "} Subheading={"What our client Says"}>
     
            </SectionTittle>
            <div className='m-20 text-center p-10'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            
       
       {
           review.map(rev=> <SwiperSlide>
           <div>
            
           <p className='p-14'> {rev.details} </p>
           <h4 className='text-2xl text-orange-400'>{rev.name} </h4></div></SwiperSlide>)
       }
 
       
      </Swiper>
      </div>
           
        </div>
    );
};

export default Review;