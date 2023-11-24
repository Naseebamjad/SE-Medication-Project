import logo from "../Images/wecarelogo.png";
import { Link } from "react-router-dom";
import React from "react";
const NavBar = () => {
  return (
    <div className="flex justify-center bg-white">
      <div className="navbar bg-white lg:w-11/12">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
            >
              <Link
                to="/"
                className="hover:text-blue-500 font-poppins text-18 font-semibold leading-27 tracking-normal  text-custom hover:bg-white cursor-pointer  text-left p-1"
              >
                Home
              </Link>
              <Link
                to="/our-doctors"
                className="hover:text-blue-500 font-poppins text-18 font-semibold leading-27 tracking-normal  text-custom hover:bg-white cursor-pointer  text-left p-1"
              >
                Our Doctors
              </Link>
              <li className="hover:text-blue-500 font-poppins text-18 font-semibold leading-27 tracking-normal  text-custom hover:bg-white cursor-pointer  text-left p-1">
                Book Appointment
              </li>
              <Link
                to="/articles"
                className="hover:text-blue-500 font-poppins text-18 font-semibold leading-27 tracking-normal  text-custom hover:bg-white cursor-pointer  text-left p-1"
              >
                Articles
              </Link>
              <Link
                to="/about-us"
                className="hover:text-blue-500 font-poppins text-18 font-semibold leading-27 tracking-normal  text-custom hover:bg-white cursor-pointer  text-left p-1"
              >
                About Us
              </Link>
            </ul>
          </div>
          <Link className="cursor-pointer" to="/">
            <img
              className="inline mr-1"
              width="20px"
              height="20px"
              src={logo}
              alt=""
              srcSet=""
            />
            <a className="font-poppins text-xl font-bold leading-45 tracking-normal text-center bg-gradient-to-r from-custom1 to-custom2 bg-clip-text text-transparent cursor-pointer" href="/">
              <span className="text-custom">We</span> Care+
            </a>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 hover:bg-white">
            <Link
              to="/"
              className="hover:text-blue-500 font-poppins text-18 font-semibold leading-27 tracking-normal text-center text-custom hover:bg-white cursor-pointer flex justify-center m-auto mx-3"
            >
              Home
            </Link>
            <Link
              to="/our-doctors"
              className="hover:text-blue-500 font-poppins text-18 font-semibold leading-27 tracking-normal text-center text-custom hover:bg-white cursor-pointer flex justify-center m-auto mx-3"
            >
              Our Doctors
            </Link>
            <li className="hover:text-blue-500 font-poppins text-18 font-semibold leading-27 tracking-normal text-center text-custom hover:bg-white cursor-pointer flex justify-center m-auto mx-3">
              Book Appointment
            </li>
            <Link
              to="/articles"
              className="hover:text-blue-500 font-poppins text-18 font-semibold leading-27 tracking-normal text-center text-custom hover:bg-white cursor-pointer flex justify-center m-auto mx-3"
            >
              Articles
            </Link>
            <Link
              to="/about-us"
              className="hover:text-blue-500 font-poppins text-18 font-semibold leading-27 tracking-normal text-center text-custom hover:bg-white cursor-pointer flex justify-center m-auto mx-3"
            >
              About Us
            </Link>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            to="/register"
            className="btn btn-outline hover:text-white text-blue-500 bg-opacity-100 lg:h-9 lg:w-36 w-24 rounded-full mx-1  hover:bg-gradient-to-r from-teal-300 via-teal-500 to-teal-700 "
          >
            Register
          </Link>
          <Link
            to="/login"
            className="btn btn-outline hover:text-white text-blue-500 bg-opacity-100 lg:h-9 lg:w-36 w-24 rounded-full hover:bg-gradient-to-r from-teal-300 via-teal-500 to-teal-700"
          >
            Login
          </Link>
          {/* <a className="btn mx-1">Register</a>
          <a className="btn">Login</a> */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
