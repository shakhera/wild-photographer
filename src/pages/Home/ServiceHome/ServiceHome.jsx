import React, { useEffect, useState } from "react";
import ServiceCard from "../../Service/ServiceCard/ServiceCard";
import { Link } from "react-router-dom";
import SectionTitle from "@/components/common/SectionTitle";

const ServiceHome = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(
      "https://wild-photographer-server-shakheras-projects.vercel.app/services?limit=4"
    )
      .then((res) => res.json())
      .then((data) => {
        setServices(data.services);
      });
  }, []);
  return (
    <section className="container mx-auto my-12 px-3">
      <SectionTitle
        heading="Our Services"
        subHeading="Explore the best services we offer"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="flex justify-center my-8">
        <Link to="/services" className="btn btn-outline border-0 border-b-4">
          See More
        </Link>
      </div>
    </section>
  );
};

export default ServiceHome;
