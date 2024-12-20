import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../provider/AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddReview = () => {
  const { user } = useContext(AuthContext);
  const services = useLoaderData();
  const { name, _id } = services;

  const handleAddReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const email = form.email.value || "unregister";
    const rating = form.rating.value;
    const message = form.message.value;

    const review = {
      services: _id,
      serviceName: name,
      userName: userName,
      email,
      rating,
      message,
    };

    fetch(
      "https://wild-photographer-server-shakheras-projects.vercel.app/reviews",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(review),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          alert("successfullay review");
          // toast.success("Review added successfully!");
          // form.reset();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <section className="container mx-auto px-3">
        <Helmet>
          <title>Review | Wild Photographer</title>
        </Helmet>
        <div className=" mt-6 mb-12 ">
          <div className="card shrink-0 w-10/12 md:w-7/12 mx-auto  shadow-2xl dark:bg-gray-800">
            <h2 className="text-3xl font-bold text-center mb-8">
              Add review for {name} service
            </h2>
            <form
              onSubmit={handleAddReview}
              className="card-body  dark:bg-gray-800"
            >
              <div className="md:flex gap-x-4">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="name"
                    placeholder="name"
                    name="userName"
                    defaultValue={user?.name}
                    className="input input-bordered dark:bg-gray-700 dark:text-gray-200"
                  />
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    defaultValue={user?.email}
                    className="input input-bordered dark:bg-gray-700 dark:text-gray-200"
                    required
                    readOnly
                  />
                </div>
              </div>
              <div className="md:flex gap-x-4">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Rating</span>
                  </label>
                  <input
                    type="number"
                    name="rating"
                    placeholder="rating"
                    className="input input-bordered dark:bg-gray-700 dark:text-gray-200"
                  />
                </div>
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Review*</span>
                </label>
                <textarea
                  type="text"
                  rows={4}
                  name="message"
                  placeholder="your review"
                  className="textarea textarea-bordered dark:bg-gray-700 dark:text-gray-200"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-neutral">Add review</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddReview;
