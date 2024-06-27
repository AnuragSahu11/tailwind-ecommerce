import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };

  return (
    <nav className="z-10 w-full bg-white border bg-indigo-700 dark:border-indigo-700 px-2 sm:px-4 py-2.5  dark:bg-indigo-700 shadow fixed top-0 left-0">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            My India
          </span>
        </a>

        <div className="flex items-center">
          <button
            onClick={toggleMobileMenu}
            id="menu-toggle"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-100 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-100 dark:hover:bg-gray-700  md:hidden"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <div
          className={`w-full md:block md:w-auto ${showMobileMenu && "hidden"}`}
          id="mobile-menu"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <NavLink to="/">
                <p className="block py-2 pr-4 pl-3 text-gray-700  border-gray-100  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 dark:text-white">
                  Home
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                <p className="block py-2 pr-4 pl-3 text-gray-700  border-gray-100  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 dark:text-white">
                  Cart
                </p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
