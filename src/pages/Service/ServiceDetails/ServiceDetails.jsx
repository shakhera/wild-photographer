import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const services = useLoaderData();
  const { name, image, rating, price, description, _id } = services;
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold my-12 border-b-2 border-black pb-2">
          Rervice section
        </h2>
        <div className="space-y-3">
          <img src={image} alt="" />
          <h3 className="text-3xl font-mono font-bold text-center">{name}</h3>
          <p>{description}</p>
          <div className="mx-12">
            <p>
              <b>Price:</b> ${price}
            </p>
            <p>
              <b>Rating:</b> {rating}
            </p>
            <p>
              <b>Location:</b> {services.location}
            </p>
            <p>
              <b>Period of service:</b> {services.duration}
            </p>
            <p>
              <b>Expeditions:</b> {services.guide}
            </p>
            <p>
              <b>Other services:</b> {services.related.join(", ")}
            </p>
            <p>
              <b>Equipments:</b> {services.equipment.join(", ")}
            </p>
            <p>
              <b>Service package:</b> {services.included.join(", ")}
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-4xl font-bold my-12 border-b-2 border-black pb-2">
          Review section
        </h2>
      </div>
    </div>
  );
};

export default ServiceDetails;
