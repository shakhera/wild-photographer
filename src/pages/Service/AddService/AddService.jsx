import React from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddService = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);

    fetch("http://localhost:3000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Services has been successfully added",
            showConfirmButton: false,
            timer: 1500,
          });
          // form.reset();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Helmet>
        <title>AddService | Wild Photographer</title>
      </Helmet>
      <div className=" mt-6 mb-12 ">
        <div className="card shrink-0 w-10/12 md:w-7/12 mx-auto  shadow-2xl bg-base-100">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body bg-base-200"
          >
            <h2 className="text-3xl font-bold text-center mb-8">Add service</h2>
            <div className="md:flex gap-x-4">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Service Name*</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Service Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Service Image</span>
                </label>
                <input
                  type="text"
                  {...register("image")}
                  placeholder="service image"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="md:flex gap-x-4">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Rating*</span>
                </label>
                <input
                  type="number"
                  {...register("rating", { required: true })}
                  placeholder="rating"
                  className="input input-bordered"
                />
                {errors.rating && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Price*</span>
                </label>
                <input
                  type="number"
                  {...register("price", { required: true })}
                  placeholder="price"
                  className="input input-bordered"
                />
                {errors.price && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
            </div>

            <div className="form-control ">
              <label className="label">
                <span className="label-text">Review*</span>
              </label>
              <textarea
                type="text"
                {...register("description", { required: true })}
                rows={4}
                placeholder="your review"
                className="textarea textarea-bordered"
              />
              {errors.description && (
                <span className="text-red-600">This field is required</span>
              )}
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

export default AddService;
