import React, { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const UpdateReview = () => {
  const { user } = useContext(AuthContext);
  const reviews = useLoaderData();
  //   console.log(reviews);
  const handleUpdateReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const rating = form.rating.value;
    const message = form.message.value;
    const updatedReview = { name, rating, message };
    console.log("update review", updatedReview);

    fetch(`http://localhost:3000/reviews/${reviews._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("user updated successfully");
          form.reset();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <div className=" mt-6 mb-12 ">
        <div className="card shrink-0 w-10/12 md:w-7/12 mx-auto  shadow-2xl bg-base-100">
          <form onSubmit={handleUpdateReview} className="card-body bg-base-200">
            <h2 className="text-3xl font-bold text-center mb-8">
              Update the review service
            </h2>
            <div className="md:flex gap-x-4">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="name"
                  name="name"
                  defaultValue={reviews?.serviceName}
                  className="input input-bordered"
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
                  className="input input-bordered"
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
                  defaultValue={reviews?.rating}
                  placeholder="rating"
                  className="input input-bordered"
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
                defaultValue={reviews?.message}
                placeholder="your review"
                className="textarea textarea-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-neutral">Update review</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateReview;
