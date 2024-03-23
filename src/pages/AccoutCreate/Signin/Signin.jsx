import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { AuthContext } from "../../../provider/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";

const Signin = () => {
  const { user, login } = useContext(AuthContext);

  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleSignin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    login(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        const currentUser = {
          email: user.email,
        };
        console.log(currentUser);

        // get jwt token
        fetch("http://localhost:3000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            //store token in localstorage
            localStorage.setItem("wild-photographer-access-token", data.token);
          });
        navigate(from, { replace: true });
        // from.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Helmet>
        <title>SignIn | Wild Photographer</title>
      </Helmet>
      <div className=" min-h-screen bg-base-200">
        <div className="card shrink-0 md:w-1/3 mx-auto shadow-2xl bg-base-100">
          <form onSubmit={handleSignin} className="card-body">
            <h1 className="text-5xl font-bold">SignIn </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
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
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-neutral hover:bg-white hover:text-black">
                SignIn
              </button>
            </div>
            <div>
              <p className="label">
                Are you new? please
                <Link to="/signup" className="text-blue-500 hover:underline">
                  Create an account
                </Link>
              </p>
            </div>
            <SocialLogin></SocialLogin>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
