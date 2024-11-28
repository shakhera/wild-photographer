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
import { PhotoProvider, PhotoView } from "react-photo-view";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Banner1 = () => {
  const images = [banner2, banner4, banner5, banner6];

  const img = [
    {
      title: "",
      img: "https://askproject.net/geowild/wp-content/uploads/sites/112/2022/11/mckenzie-toyne-YYFLSbM2FEo-unsplash.jpg",
    },
    {
      title: "",
      img: "https://askproject.net/geowild/wp-content/uploads/sites/112/2022/11/wildlife-WF9SS43.jpg",
    },
    {
      title: "",
      img: "https://askproject.net/geowild/wp-content/uploads/sites/112/2022/11/max-van-den-oetelaar-S0txA-JnUFA-unsplash.jpg",
    },
    {
      title: "",
      img: "https://askproject.net/geowild/wp-content/uploads/sites/112/2022/11/redcharlie-O7zkyNkQ1lM-unsplash.jpg",
    },
    {
      title: "",
      img: "https://askproject.net/geowild/wp-content/uploads/sites/112/2022/11/zdenek-machacek-2GAvdXQ6Xp8-unsplash.jpg",
    },
  ];

  // Capture Every Moment In The Wild World

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section className="container mx-auto">
      <Helmet>
        <title>Home | Wild Photographer</title>
      </Helmet>
      <Carousel
        className="w-full max-w-xs"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {img?.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <img src={item.img} alt="" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* <Carousel
        className="w-full max-w-xs"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {img?.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <img src={item.img} alt="" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel> */}
    </section>
  );
};

export default Banner1;
