import { Rating } from "@smastrom/react-rating";
import React, { useContext, useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../../provider/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const MyReview = () => {
  const [reviews, setReviews] = useState([]);
  const { user } = useContext(AuthContext);

  // const url = `https://wild-photographer-server-shakheras-projects.vercel.app/reviews?email=${user?.email}`;
  useEffect(() => {
    fetch(
      `https://wild-photographer-server-shakheras-projects.vercel.app/reviews?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem(
            "wild-photographer-access-token"
          )}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        // console.log("reviews", data);
      });
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://wild-photographer-server-shakheras-projects.vercel.app/reviews/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaing = reviews.filter((review) => review._id !== id);
              setReviews(remaing);
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }
    });
  };

  return (
    <div>
      <div>
        <div className="overflow-x-auto ">
          <h2 className="text-3xl font-bold text-center mt-5">My Reviews</h2>
          <table className="max-w-[80%] shadow-md  border mx-auto border-gray-100  my-6">
            <thead>
              <tr className="bg-[#333333] text-white">
                <th className="py-3 px-6 text-left border-b">Service Name</th>
                <th className="py-3 px-6 text-left border-b">Review</th>
                <th className="py-3 px-6 text-left border-b">Rating</th>
                <th className="py-3 px-6 text-left border-b">Action</th>
                <th className="py-3 px-6  border-b text-end">Action</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <tr
                  key={review._id}
                  className="hover:bg-gray-50 transition duration-300"
                >
                  <td className="py-4 px-6 border-b">{review.serviceName} </td>
                  <td className="py-4 px-6 border-b">{review.message}</td>
                  <td className="py-4 px-6 border-b">
                    <Rating
                      style={{ maxWidth: 80 }}
                      value={review.rating}
                      readOnly
                    />
                  </td>
                  <td className="py-4 px-6 border-b">
                    <Link
                      to={`/updateReview/${review._id}`}
                      className="btn btn-outline"
                    >
                      <FaEdit></FaEdit>
                    </Link>
                  </td>
                  <td className="py-4 px-6 border-b text-end">
                    <button
                      onClick={() => handleDelete(review._id)}
                      className="btn btn-outline"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyReview;
