import React from "react";
import Banner from "../Banner/Banner";
import ServiceHome from "../ServiceHome/ServiceHome";
import Testimonial from "../Testimonial/Testimonial";
import Banner1 from "../Banner/Banner1";

const Home = () => {
  return (
    <div>
      {/* <Banner /> */}
      <Banner1 />
      <ServiceHome />
      <Testimonial />
    </div>
  );
};

export default Home;
