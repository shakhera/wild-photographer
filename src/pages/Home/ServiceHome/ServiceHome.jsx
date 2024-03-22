import React, { useEffect, useState } from "react";
import ServiceCard from "../../Service/ServiceCard/ServiceCard";
import { Link } from "react-router-dom";

const ServiceHome = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/services?limit=3")
      .then((res) => res.json())
      .then((data) => {
        setServices(data.services);
      });
  }, []);
  return (
    <div className="md:w-10/12 mx-auto my-12">
      <h2 className="text-4xl font-bold text-center mb-4">Services Section</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="flex justify-center my-8">
        <Link to="/services" className="btn btn-outline border-0 border-b-4">
          See More
        </Link>
      </div>
    </div>
  );
};

export default ServiceHome;
