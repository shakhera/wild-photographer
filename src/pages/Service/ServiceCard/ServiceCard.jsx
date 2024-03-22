import React from "react";
import { PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";

const ServiceCard = ({ service }) => {
  const { name, image, rating, price, description, _id } = service;
  return (
    <div>
      <div className="card max-w-[400px] max-h-[500px] mx-auto bg-base-100 shadow-xl">
        <PhotoView src={image} className="">
          <img src={image} alt="" className="w-full h-48 mx-auto rounded-lg " />
        </PhotoView>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Price: ${price}</p>
          <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
          <p> {description}</p>
          <div className="card-actions justify-end">
            <Link
              to={`/serviceDetails/${_id}`}
              className="btn btn-outline  border-b-4"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
