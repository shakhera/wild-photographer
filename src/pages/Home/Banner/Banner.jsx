import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import banner1 from "../../../assets/images/banner/1.jpg";
import banner2 from "../../../assets/images/banner/2.jpg";
import banner3 from "../../../assets/images/banner/3.avif";
import banner4 from "../../../assets/images/banner/4.avif";
import banner5 from "../../../assets/images/banner/5.jpg";
import banner6 from "../../../assets/images/banner/6.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Helmet } from "react-helmet-async";

const Banner = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Wild Photographer</title>
      </Helmet>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className=""
      >
        <SwiperSlide>
          <img src={banner1} alt="" className="object-cover w-full h-96" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} alt="" className="object-cover w-full h-96" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3} alt="" className="object-cover w-full h-96" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner4} alt="" className="object-cover w-full h-96" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner5} alt="" className="object-cover w-full h-96" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner6} alt="" className="object-cover w-full h-96" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
