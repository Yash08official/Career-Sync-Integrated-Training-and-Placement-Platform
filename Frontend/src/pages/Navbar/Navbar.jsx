import React, { useState } from "react";
import MainLogoBG from "../../images/Logo_New-removebg-preview.png";
import ThemeToggle from "../../components/ThemeToggle";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" border-gray-200 px-3">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          <img src={MainLogoBG} className="mt-2 md:w-52 w-48" alt="Icon 02" />
        </span>

        <div className="flex items-center gap-0 md:gap-4 md:order-2 space-x-3 md:space-x-0 ">
          <ThemeToggle />
          <Link to="/login">
            {" "}
            <button
              type="button"
              className="text-white bg-[#4F46E5] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-6 md:px-8 py-2 text-center dark:bg-[#4F46E5]  dark:focus:ring-blue-800 ml-2"
            >
              Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
