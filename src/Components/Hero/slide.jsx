// Import Swiper React components
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import styles from "./slide.module.css";
import Img1 from "../../assets/img/img1.jpeg";
import Img2 from "../../assets/img/img3.jpg";
import Img3 from "../../assets/img/img4.jpg";
import Img4 from "../../assets/img/img5.jpg";
import Img5 from "../../assets/img/img2.jpg";

// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        autoplay={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className={styles.hero_img}
      >
        <div className={styles.heroimg}>
          <SwiperSlide>
            <a href="#">
              <img src={Img1} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#">
              <img src={Img2} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#">
              <img src={Img3} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#">
              <img src={Img4} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#">
              <img src={Img5} alt="" />
            </a>
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
};

export default Hero;
