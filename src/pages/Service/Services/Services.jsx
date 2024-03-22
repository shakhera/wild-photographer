import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import { useLoaderData } from "react-router-dom";

const Services = () => {
  const { services } = useLoaderData();
  // const [services, setServices] = useState();
  // useEffect(() => {
  //   fetch("http://localhost:3000/services")
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, []);
  return (
    <div className="my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-10/12 mx-auto">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
