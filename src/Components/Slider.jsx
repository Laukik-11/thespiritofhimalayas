import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BgImage1 from "../Assets/BgImage1.jpg";
import BgImage2 from "../Assets/BgImage2.jpg";
import BgImage3 from "../Assets/BgImage3.jpg";
import "swiper/css";
import "swiper/css/bundle";

const Slider = () => {
  return (
    <>
      <div>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: ".my-custom-pagination-div",
            clickable: true,
          }}
          spaceBetween={2}
          slidesPerView={3}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>hello</div>
          </SwiperSlide>
        </Swiper>
        <div
          className="my-custom-pagination-div"
          style={{ width: "100%", textAlign: "center" }}
        />
      </div>
    </>
  );
};

export default Slider;
