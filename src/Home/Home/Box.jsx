import React from 'react';
import im from '../../assets/home/banner.jpg'

const Box = () => {
    return (
        <div className="card h-[600px] m-10 bg-base-100 shadow-xl image-full">
  <figure><img src={im} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Box;