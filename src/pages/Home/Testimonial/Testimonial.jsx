import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/testimonial")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);
  return (
    <div>
      <h2 className="uppercase text-2xl font-bold mt-12 text-center">
        testimony
      </h2>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {testimonials.map((testimony) => (
          <SwiperSlide key={testimony._id}>
            <div className="mx-28 flex flex-col items-center space-y-3 mt-8">
              <h3>{testimony.review}</h3>
              <Rating
                style={{ maxWidth: 100 }}
                value={testimony.rating}
                readOnly
              />
              <h3>Author: {testimony.author}</h3>
              <p>Location: {testimony.location}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
