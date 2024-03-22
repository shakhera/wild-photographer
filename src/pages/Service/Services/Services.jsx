import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Services = () => {
  const { services } = useLoaderData();

  return (
    <div className="my-12">
      <Helmet>
        <title>Services | Wild Photographer</title>
      </Helmet>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-10/12 mx-auto">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
