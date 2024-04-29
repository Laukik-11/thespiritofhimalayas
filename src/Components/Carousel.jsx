import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BgImage1 from "../Assets/BgImage1.jpg";
import BgImage2 from "../Assets/BgImage2.jpg";
import BgImage3 from "../Assets/BgImage3.jpg";
import "swiper/css";
import "swiper/css/bundle";

const Carousel = () => {
  return (
    <>
      <div className="slider hero">
        <div className="hero-content-area">
          <h1>The Spirit Of Himalayas</h1>
          <h3>
            Chardham Yatra is a spiritual pilgrimage journey that includes
            visiting four holy shrines in the Himalayas — Yamunotri, Gangotri,
            Kedarnath, and Badrinath.
          </h3>
          <a href="#" className="btn" style={{ color: "white" }}>
            Contact Us Now
          </a>
        </div>
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
          slidesPerView={1}
          className="mySwiper"
        >
          <SwiperSlide>
            <section className="hero">
              <div
                className="background-image"
                style={{
                  background: `linear-gradient(
          rgba(0, 0, 0, 0.4), 
          rgba(0, 0, 0, 0.4)
        ),url(${BgImage3})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="hero">
              <div
                className="background-image"
                style={{
                  background: `linear-gradient(
          rgba(0, 0, 0, 0.4), 
          rgba(0, 0, 0, 0.4)
        ),url(${BgImage2})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </section>
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

export default Carousel;
