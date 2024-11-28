import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import { Helmet } from "react-helmet-async";
import { images } from "@/data/photos";

const Banner1 = () => {
  return (
    <section className="container mx-auto">
      <Helmet>
        <title>Home | Wild Photographer</title>
      </Helmet>

      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        className="w-full  h-[300px] lg:h-[500px] overflow-hidden"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-[300px] lg:h-[500px] overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover bg-black opacity-50 transition-transform duration-700 ease-in-out transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute top-1/2 left-8 transform -translate-y-1/2 text-white w-[90%] lg:w-[45%]">
                <h3 className="text-4xl md:text-6xl font-bold font-lacquer">
                  {item.title}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner1;
