import React, { useState } from "react";

const AddReview = () => {
  return (
    <div>
      <div className=" mt-6 mb-12 ">
        <div className="card shrink-0 w-10/12 md:w-7/12 mx-auto  shadow-2xl bg-base-100">
          <form className="card-body bg-base-200">
            <h1 className="text-5xl font-bold text-center mb-8">
              Add your review
            </h1>
            <div className="md:flex gap-x-4">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Name*</span>
                </label>
                <input
                  type="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Email*</span>
                </label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="input input-bordered"
                  required
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
                  placeholder="rating"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Profile URL*</span>
                </label>
                <input
                  type="text"
                  placeholder="Profile URL"
                  className="input input-bordered"
                  required
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
                placeholder="your review"
                className="textarea textarea-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-neutral">Add review</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
