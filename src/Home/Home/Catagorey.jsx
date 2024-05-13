import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import cat1 from '../../assets/home/slide1.jpg';
import cat2 from '../../assets/home/slide2.jpg';
import cat3 from '../../assets/home/slide3.jpg';
import cat4 from '../../assets/home/slide4.jpg';
import cat5 from '../../assets/home/slide5.jpg';
import SectionTittle from '../../Component/SectionTittle/SectionTittle';

const Catagorey = () => {
    return (
  <section>

    <SectionTittle heading={"Order Online"} Subheading={"From 11.00 am to 10.pm"} ></SectionTittle>
          <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-4"
      >
        <SwiperSlide><img src={cat1} alt="" />
        <h3 className='text-3xl text-white uppercase text-center -mt-16'>Salads</h3>
        </SwiperSlide>
        <SwiperSlide><img src={cat2} alt="" />
        <h3 className='text-3xl text-white uppercase text-center -mt-16'>Pizza</h3> </SwiperSlide>
        <SwiperSlide><img src={cat3} alt="" /><h3 className='text-3xl text-white uppercase text-center -mt-16'>Soup</h3>
        </SwiperSlide>
        <SwiperSlide><img src={cat4} alt="" /><h3 className='text-3xl text-white uppercase text-center -mt-16'>Cake</h3>
         </SwiperSlide>
        <SwiperSlide><img src={cat5} alt="" /> 
        <h3 className='text-3xl text-white uppercase text-center -mt-16'>Salads</h3>
        </SwiperSlide>
        <SwiperSlide><img src={cat1} alt="" />
        <h3 className='text-3xl text-white uppercase text-center -mt-16'>Salads</h3></SwiperSlide>
        <SwiperSlide><img src={cat2} alt="" />
        <h3 className='text-3xl text-white uppercase text-center -mt-16'>Pizza</h3></SwiperSlide>
        <SwiperSlide><img src={cat3} alt="" />
        <h3 className='text-3xl text-white uppercase text-center -mt-16'>Soup</h3></SwiperSlide>
        <SwiperSlide><img src={cat4} alt="" />
        <h3 className='text-3xl text-white uppercase text-center -mt-16'>Cake</h3></SwiperSlide>
      </Swiper>
  </section>
    );
};

export default Catagorey;