import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return <section data-aos="zoom-out-down">
    <SectionTitle subHeading={"From 11:00am to 10:00pm"}
    heading={"Order Online"}
    />
  <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-20"
      >
        <SwiperSlide><img src={slide1} alt="" />
        <h3 className="uppercase text-2xl text-white -mt-10 text-center">salad</h3></SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" />
        <h3 className="uppercase text-2xl text-white -mt-10 text-center">pizza</h3></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" />
        <h3 className="uppercase text-2xl text-white -mt-10 text-center">soup</h3></SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" />
        <h3 className="uppercase text-2xl text-white -mt-10 text-center">desserts</h3></SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" />
        <h3 className="uppercase text-2xl text-white -mt-10 text-center">salad</h3></SwiperSlide>
        
      </Swiper></section>;
};

export default Category;
