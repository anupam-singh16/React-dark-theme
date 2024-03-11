import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Banner = ({ handleSearchChange }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const category = ["home", "men", "women", "electronics", "jewellery"];
  const cartLength = useSelector((state) => state.counter.allItem?.length);
  const [selectName, setSelectName] = useState();

  const goToScreen = (name, i) => {
    setSelectName(name);
    navigate(`/${name}`);
  };

  return (
    <nav
      id="header"
      className="w-full z-30 top-0 py-1 bg-white shadow-lg border-b border-blue-400 mt-0"
      style={{ position: "fixed", zIndex: 1 }}
    >
      <div className="w-full flex items-center justify-between mt-0 px-6 py-2">
        <label for="menu-toggle" className="cursor-pointer md:hidden block">
          <svg
            className="fill-current text-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        {/* <div
          className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
          id="menu"
        >
          <nav>
            <ul className="md:flex items-center justify-between text-base text-blue-600 pt-4 md:pt-0">
              {location.pathname !== "/home" && (
                <li>
                  <p
                    className="inline-block cursor-pointer no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2"
                    onClick={() => navigate("/home")}
                  >
                    Home
                  </p>
                </li>
              )}
              {location.pathname !== "/menSection" && (
                <li>
                  <p
                    onClick={() => navigate("/menSection")}
                    className="cursor-pointer  inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2"
                  >
                    Mens
                  </p>
                </li>
              )}
              {location.pathname !== "/womenSection" && (
                <li>
                  <a
                    className=" cursor-pointer inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2"
                    onClick={() => navigate("/womenSection")}
                  >
                    Women
                  </a>
                </li>
              )}
              {location.pathname !== "/Jewellery" && (
                <li>
                  <p
                    className="cursor-pointer inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2"
                    onClick={() => navigate("/Jewellery")}
                  >
                    Jewellery
                  </p>
                </li>
              )}
              {location.pathname !== "/Electonics" && (
                <li>
                  <a
                    onClick={() => navigate("/Electonics")}
                    className=" cursor-pointer inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2"
                  >
                    Electronics
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </div> */}

        <div
          className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
          id="menu"
        >
          <nav>
            <ul className="md:flex items-center justify-between text-base text-blue-600 pt-4 md:pt-0">
              {category.map((item, i) => {
                return (
                  <li>
                    <p
                      style={{
                        color: item === selectName ? "black" : "",
                        textDecoration: item === selectName ? "underline" : "",
                      }}
                      className="inline-block cursor-pointer no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2"
                      onClick={() => goToScreen(item, i)}
                    >
                      {item?.charAt(0)?.toUpperCase() + item?.slice(1)}
                    </p>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div
          className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4"
          id="nav-content"
        >
          <div className="auth flex items-center w-full md:w-full">
            {location.pathname === "/login" && (
              <button
                onClick={() => navigate("/login")}
                className="bg-transparent text-gray-800  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700"
              >
                Sign in
              </button>
            )}
            {location.pathname === "/login" && (
              <button
                onClick={() => navigate("/login")}
                className="bg-blue-600 text-gray-200  p-2 rounded  hover:bg-blue-500 mr-4 hover:text-gray-100"
              >
                Sign up
              </button>
            )}
            {location.pathname !== "/login" && (
              <button
                onClick={() => navigate("/login")}
                className="bg-transparent text-gray-800  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700"
              >
                Log Out{" "}
              </button>
            )}
            <div
              onClick={() => navigate("/CartPage")}
              className=" flex justify-center items-center"
            >
              <div className="relative cursor-pointer py-2">
                {cartLength !== 0 ? (
                  <div className="t-0 absolute left-3">
                    <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                      {cartLength}
                    </p>
                  </div>
                ) : (
                  ""
                )}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="file: mt-4 h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {true && (
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              onChange={(e) => handleSearchChange(e)}
              class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Banner;
