import React from "react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BgImage1 from "../Assets/BgImage1.jpg";
import BgImage2 from "../Assets/BgImage2.jpg";
import BgImage3 from "../Assets/BgImage3.jpg";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/thumbs";

const Slider = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          padding: "4% 2%",
          //   marginTop: "40px",
          background: "#F9F8F3",
        }}
      >
        <Swiper
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          style={{
            "--swiper-navigation-color": "white",
            "--swiper-navigation-size": "18px",
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[Pagination, Autoplay, Navigation]}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={BgImage1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={BgImage2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={BgImage3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={BgImage1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={BgImage2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={BgImage3} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
