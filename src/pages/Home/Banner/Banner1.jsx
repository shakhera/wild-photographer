import React from "react";

import banner1 from "../../../assets/images/banner/1.jpg";
import banner2 from "../../../assets/images/banner/2.jpg";
import banner3 from "../../../assets/images/banner/3.avif";
import banner4 from "../../../assets/images/banner/4.avif";
import banner5 from "../../../assets/images/banner/5.jpg";
import banner6 from "../../../assets/images/banner/6.jpg";

import { Helmet } from "react-helmet-async";
import { PhotoProvider, PhotoView } from "react-photo-view";

const Banner1 = () => {
  const images = [banner1, banner2, banner3, banner4, banner5, banner6];

  return (
    <section className="container mx-auto">
      <Helmet>
        <title>Home | Wild Photographer</title>
      </Helmet>
      <PhotoProvider>
        <div className="foo">
          {images.map((item, index) => (
            <PhotoView key={index} src={item}>
              <img src={item} alt="" />
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>

      <PhotoProvider>
        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-16">
          {images.map((item, index) => (
            <PhotoView key={index} src={item}>
              <div className="relative group">
                <img
                  src={item}
                  alt={`Banner ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-md transition duration-300 ease-in-out group-hover:scale-105"
                />
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-300 ease-in-out"></div>
              </div>
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </section>
  );
};

export default Banner1;
