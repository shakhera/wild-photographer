import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
import AddReview from "../AddReview/AddReview";

const ServiceDetails = () => {
  const services = useLoaderData();
  const { name, image, rating, price, description, reviews, _id } = services;

  return (
    <div className="">
      <div className=" flex flex-col justify-center items-center">
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
              <b>Other services:</b> {services.related?.join(", ")}
            </p>
            <p>
              <b>Equipments:</b> {services.equipment?.join(", ")}
            </p>
            <p>
              <b>Service package:</b> {services.included?.join(", ")}
            </p>
          </div>
        </div>
      </div>
      <div className="w-8/12 mx-auto">
        <h2 className="text-4xl font-bold my-12 border-b-2 text-center border-black pb-2">
          Review section
        </h2>

        {/* review section  */}

        <div className="">
          {reviews?.map((review, inx) => (
            <div key={inx} className="my-10 bg-slate-600 text-slate-300 p-8">
              <div className="flex gap-x-5 items-center">
                <img
                  src={review.image}
                  alt=""
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <Rating
                    style={{ maxWidth: 100 }}
                    value={review.rating}
                    readOnly
                  />
                  <h3 className="text-xl font-bold">{review.name}</h3>
                </div>
              </div>
              <div>
                <p>{review.text}</p>
              </div>
            </div>
          ))}

          <div className="my-4">
            <Link to={`/addReview/${_id}`} className="btn btn-neutral">
              Add your review
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
