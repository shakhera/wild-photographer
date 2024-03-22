import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../provider/AuthProvider/AuthProvider";

const SocialLogin = () => {
  const { signWithGoogle } = useContext(AuthContext);

  const handleGoogleSignin = () => {
    signWithGoogle()
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
    <div>
      <div className="divider">or sign with</div>
      <div className="text-center">
        <button
          onClick={handleGoogleSignin}
          className="btn btn-outline uppercase border-0 border-b-4 "
        >
          google <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
