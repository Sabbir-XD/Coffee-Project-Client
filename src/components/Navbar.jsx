import React, { useContext } from "react";
import logo from "../assets/logo1.png";
import { Link } from "react-router";
import {
  FaCoffee,
  FaSearch,
  FaShoppingCart,
  FaHome,
  FaPlus,
  FaUser,
} from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, setUser, handleLogoutUser } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <Link
          to="/"
          className="text-amber-50 hover:bg-amber-900/30 flex items-center gap-2"
        >
          <FaHome className="text-amber-200" />
          Home
        </Link>
      </li>
      {
        user && (
          <li>
            <Link
              to="/all-users"
              className="text-amber-50 hover:bg-amber-900/30 flex items-center gap-2"
            >
              <FaUser className="text-amber-200" />
              All User
            </Link>
          </li>
        )
      }
    </>
  );

  // Handle logout logic
  const handleLogout = () => {
    handleLogoutUser()
      .then(() => {
        setUser(null);
        Swal.fire({
          title: "Logged out!",
          text: "You have successfully logged out.",
          icon: "success",
          confirmButtonText: "OK",
        });
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };
  return (
    <div className="bg-gradient-to-r from-[#2d1b08] to-[#4a2e0f] shadow-lg">
      <div className="navbar w-11/12 mx-auto max-w-7xl">
        {/* Mobile menu */}
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden text-amber-50 hover:bg-amber-900/30"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gradient-to-b from-[#3a2410] to-[#2d1b08] rounded-box w-52 border border-amber-900/50"
            >
              {links}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl text-amber-50 hover:bg-transparent p-0"
          >
            <img src={logo} alt="Logo" className="h-8 inline mr-2" />
            <span className="flex items-center gap-1">
              Espresso
              <GiCoffeeCup className="text-amber-300" />
              Emporium
            </span>
          </Link>
        </div>

        {/* Desktop menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1">
            {links}
          </ul>
        </div>

        {/* Icons */}
        <div className="navbar-end gap-1">
          <button
            className="btn btn-ghost btn-circle text-amber-50 hover:bg-amber-900/30 hover:text-amber-200"
            aria-label="Search"
          >
            <FaSearch className="text-lg" />
          </button>
          <button
            className="btn btn-ghost btn-circle text-amber-50 hover:bg-amber-900/30 hover:text-amber-200 relative"
            aria-label="Cart"
          >
            <FaShoppingCart className="text-lg" />
            <span className="absolute top-1 right-1 w-4 h-4 bg-amber-400 text-amber-900 rounded-full flex items-center justify-center text-xs font-bold">
              3
            </span>
          </button>
          {user ? (
            <button
              onClick={handleLogout}
              className="btn btn-ghost text-amber-50 hover:bg-amber-900/30 hover:text-amber-200 ml-2 hidden sm:flex"
            >
              <FaCoffee className="mr-1" />
              Logout
            </button>
          ) : (
            <Link
              to="/signin"
              className="btn btn-ghost text-amber-50 hover:bg-amber-900/30 hover:text-amber-200 ml-2 hidden sm:flex"
            >
              <FaCoffee className="mr-1" />
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
