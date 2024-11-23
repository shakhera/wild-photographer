import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef();

  useEffect(() => {
    const closeDropDown = (e) => {
      if (!dropDownMenuRef?.current?.contains(e?.target)) {
        setDropDownState(false);
      }
    };
    document.addEventListener("mousedown", closeDropDown);
    return () => {
      document.removeEventListener("mousedown", closeDropDown);
    };
  }, []);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        localStorage.removeItem("wild-photographer-access-token");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const menuItems = (
    <>
      <li className="px-6 md:px-2 py-2 md:my-0 text-white hover:bg-sky-600 md:hover:bg-transparent">
        <Link to="/">Home</Link>
        <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
      </li>
      <li className="px-6 md:px-2 py-2 md:my-0 text-white hover:bg-sky-600 md:hover:bg-transparent">
        <Link to="/services">Services</Link>
      </li>

      <li className="px-6 md:px-2 py-2 md:my-0 text-white hover:bg-sky-600 md:hover:bg-transparent">
        <Link to="/">Contact</Link>
      </li>
      <li className="px-6 md:px-2 py-2 md:my-0 text-white hover:bg-sky-600 md:hover:bg-transparent">
        <Link to="/blog">Blog</Link>
      </li>

      {user ? (
        <>
          <li className="px-6 md:px-2 py-2 md:my-0 text-white hover:bg-sky-600 md:hover:bg-transparent">
            <Link to="/myReview">My Review</Link>
          </li>
          <li className="px-6 md:px-2 py-2 md:my-0 text-white hover:bg-sky-600 md:hover:bg-transparent">
            <Link to="/addService">Add Service</Link>
          </li>
          <li className="px-6 md:px-2 py-2 md:my-0 text-white hover:bg-sky-600 md:hover:bg-transparent">
            <button onClick={handleLogOut}>SignOut</button>
          </li>
        </>
      ) : (
        <li className="px-6 md:px-2 py-2 md:my-0 text-white hover:bg-sky-600 md:hover:bg-transparent">
          <Link to="auth/signin">Signin</Link>
        </li>
      )}
    </>
  );

  return (
    <div>
      <nav className="flex items-center justify-between bg-[#393E46] px-4 py-2 text-white ">
        <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
          <h2 className="font-serif">WildPhotographer</h2>
        </div>
        <ul className="hidden items-center justify-between gap-10 md:flex">
          {menuItems}
        </ul>
        <div
          ref={dropDownMenuRef}
          onClick={() => setDropDownState(!dropDownState)}
          className="relative flex transition-transform md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="cursor-pointer"
          >
            {" "}
            <line x1="4" x2="20" y1="12" y2="12" />{" "}
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />{" "}
          </svg>
          {dropDownState && (
            <ul className=" z-10  gap-2  bg-[#393E46]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
              {menuItems}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
