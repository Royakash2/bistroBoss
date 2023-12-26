import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from '../../../../src/assets/home/01.jpg'
import bannerImg2 from '../../../../src/assets/home/02.jpg'
import bannerImg3 from '../../../../src/assets/home/03.png'
import bannerImg4 from '../../../../src/assets/home/04.jpg'
import bannerImg5 from '../../../../src/assets/home/05.png'
import bannerImg6 from '../../../../src/assets/home/06.png'

const Banner = () => {
  return (
    <Carousel autoPlay infiniteLoop stopOnHover={false} interval={3000} transitionTime={1900} showThumbs={false}  animationHandler="fade" >
        <div>
            <img src={bannerImg1} alt="" />
        </div>
        <div>
            <img src={bannerImg2} alt="" />
        </div>
        <div>
            <img src={bannerImg3} alt="" />
        </div>
        <div>
            <img src={bannerImg4} alt="" />
        </div>
        <div>
            <img src={bannerImg5} alt="" />
        </div>
        <div>
            <img src={bannerImg6} alt="" />
        </div>
    </Carousel>
  );
};

export default Banner;
