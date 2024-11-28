import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SectionTitle from "@/components/common/SectionTitle";

const Services = () => {
  const { services } = useLoaderData();

  return (
    <section className="my-6 container mx-auto px-4">
      <Helmet>
        <title>Services | Wild Photographer</title>
      </Helmet>

      <SectionTitle
        heading="Our Photography Services"
        subHeading="Explore our expert services in photography to capture the beauty of nature and beyond."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:w-11/12 lg:w-10/12 mx-auto">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </section>
  );
};

export default Services;
