import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-700">
      <h1 className="text-6xl font-bold mb-4">Oops!</h1>
      <p className="text-xl mb-4">
        Something went wrong. The page you're looking for doesn't exist.
      </p>
      <p className="text-lg mb-8">Error 404: Page Not Found</p>
      <Link
        to="/"
        className="btn btn-outline px-6 py-3 text-white bg-blue-500 hover:bg-blue-600"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
