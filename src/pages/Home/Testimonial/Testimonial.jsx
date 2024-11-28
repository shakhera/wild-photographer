import React, { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import SectionTitle from "@/components/common/SectionTitle";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch(
      "https://wild-photographer-server-shakheras-projects.vercel.app/testimonial"
    )
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  const groupedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    groupedTestimonials.push(testimonials.slice(i, i + 2));
  }

  return (
    <section className="container mx-auto my-6 px-3">
      <SectionTitle
        heading="What Our Clients Say"
        subHeading="Real feedback from our amazing customers"
      />
      <Carousel className="w-full max-w-4xl mx-auto">
        <CarouselContent>
          {groupedTestimonials.map((group, index) => (
            <CarouselItem
              key={index}
              className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {group.map((testimony) => (
                <div
                  key={testimony._id}
                  className="bg-card rounded-lg shadow-md p-6 text-center flex flex-col items-center"
                >
                  <p className="italic text-muted-foreground mb-4">
                    "{testimony.review}"
                  </p>
                  <Rating
                    style={{ maxWidth: 100 }}
                    value={testimony.rating}
                    readOnly
                    className="mb-3"
                  />
                  <h3 className="font-semibold text-lg text-card-foreground">
                    {testimony.author}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {testimony.location}
                  </p>
                </div>
              ))}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Testimonial;
