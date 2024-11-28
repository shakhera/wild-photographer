import React from "react";
import Banner from "../Banner/Banner";
import ServiceHome from "../ServiceHome/ServiceHome";
import Testimonial from "../Testimonial/Testimonial";
import Banner1 from "../Banner/Banner1";
import PhotoGallery from "../PhotoGallery/PhotoGallery";

const Home = () => {
  return (
    <div>
      {/* <Banner /> */}
      <Banner1 />
      <PhotoGallery />
      <ServiceHome />
      <Testimonial />
    </div>
  );
};

export default Home;
