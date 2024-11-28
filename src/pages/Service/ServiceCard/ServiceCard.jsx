import React from "react";
import { PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, StarIcon } from "lucide-react";

const ServiceCard = ({ service }) => {
  const { name, image, rating, price, description, _id } = service;
  return (
    <>
      <Card className="max-w-sm mx-auto shadow-md hover:shadow-lg transition-shadow duration-200">
        <CardHeader className="p-0">
          <PhotoView src={image} className="">
            <img
              src={image}
              alt={name}
              className="w-full h-48 mx-auto rounded-t-md "
            />
          </PhotoView>
        </CardHeader>
        <CardContent className="px-4">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 w-64 truncate">
            {name}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            {description.length > 100
              ? `${description.slice(0, 100)}...`
              : description}
          </p>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            Price: ${price}
          </p>
          <p className="flex items-center gap-1">
            Ratings: {rating} <StarIcon size={16} className="text-yellow-500" />
          </p>
          {/* <div className="flex items-center mt-2">
            <p className="mr-2">Ratings: {rating}</p>
            {[...Array(5)].map((_, index) => (
              <StarIcon
                key={index}
                className={`h-5 w-5 ${
                  index < rating ? "text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </div> */}
        </CardContent>

        <CardFooter className="px-4 flex justify-end">
          <Button asChild variant="outline" size="sm" className="border-b-4">
            <Link to={`/serviceDetails/${_id}`}>Details</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default ServiceCard;
