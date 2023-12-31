import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div class="flex items-center">
          <img
            src="https://clipart-library.com/images/kiKo9BA4T.png"
            class="h-8 mr-3"
            alt="Flowbite_Logo"
          />
          <span class="self-center text-2xl font-semibold whitespace-nowrap text-cyan-600 dark:text-white">
            Regent's Park
          </span>
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          onClick={toggleMenu}
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            className={`w-5 h-5 ${isOpen ? "rotate-180" : ""}`}
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
        <div
          className={`${
            isOpen ? "block z-99" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul class="font-medium flex flex-col gap-3 p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <p
                class="block py-2 pl-3 pr-4 text-black hover:bg-slate-200  rounded md:bg-transparent md:text-blue-700 md:p-3 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                <NavLink to="/">Home</NavLink>
              </p>
            </li>
            <li>
              <p class="block py-2 pl-3 pr-4 text-black hover:bg-slate-200  rounded md:bg-transparent md:text-blue-700 md:p-3 dark:text-white md:dark:text-blue-500">
                <NavLink to="/register">Register</NavLink>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
