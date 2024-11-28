import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { AuthContext } from "../../../provider/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
import SectionTitle from "@/components/common/SectionTitle";

const Signup = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section className="container mx-auto px-4 dark:bg-base-900 min-h-screen ">
      <Helmet>
        <title>SignUp | Wild Photographer</title>
      </Helmet>
      <div className="">
        <SectionTitle
          heading="Sign Up to Wild Photographer"
          subHeading="Access your account to explore exclusive photo collections and services."
        />
        <div className="card shrink-0 md:w-1/3 mx-auto shadow-2xl bg-base-100 dark:bg-base-800">
          <form onSubmit={handleSignup} className="card-body dark:bg-gray-600">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered bg-white dark:bg-gray-800 text-black dark:text-white"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered bg-white dark:bg-gray-800 text-black dark:text-white"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered bg-white dark:bg-gray-800 text-black dark:text-white"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-neutral hover:bg-white hover:text-black">
                SignUp
              </button>
            </div>
            <div>
              <p className="label">
                Already have an account?
                <Link
                  to="/auth/signin"
                  className="text-blue-500 hover:underline"
                >
                  Signin
                </Link>
              </p>
            </div>
            <SocialLogin></SocialLogin>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
