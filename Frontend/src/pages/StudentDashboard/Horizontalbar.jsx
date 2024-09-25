import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import image from "../../images/Logo_New-removebg-preview.png";
import ThemeToggle from "../../components/ThemeToggle";
import UserMenu from "../../components/DropdownProfile";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav class=" bg-[#1E293B]">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-6 py-1">
        <div>
          <NavLink to="/Studentinfo" className="block w-full py-5 ">
            <img src={image} alt="logo" className="h-10 w-15 ml-4 " />
          </NavLink>
        </div>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 dark:border-gray-700">
            <li>
              <Link
                to="/Studentdashboard"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Studentdashboard/activejobs"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Active Jobs
              </Link>
            </li>
            <li>
              <Link
                to="/studentdashboard/Studentinfo"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Student Profile
              </Link>
            </li>
            <li></li>
          </ul>
        </div>
        <div className="hidden justify-end pr-16 sm:flex lg:pr-0 gap-3">
          <ThemeToggle />
          <UserMenu align="right" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const ListItem = ({ children, NavLink }) => {
  return (
    <>
      <li>
        <a
          href={NavLink}
          className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex"
        >
          {children}
        </a>
      </li>
    </>
  );
};
