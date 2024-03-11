import React, { useEffect, useRef, useState } from "react";
import Card from "../components/card";
import UseFetch from "../customHooks/apiCalls";
import Header from "../components/Header";
import Skeleton from "../components/Skeleton";

const Home = () => {
  const { stockMarket, allCategory, data } = UseFetch();
  const [isSticky, setSticky] = useState(false);
  const headerRef = useRef(null);
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        setSticky(headerRef.current.getBoundingClientRect().top <= 0);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    const filteredResults = data?.filter((item) =>
      item.title?.toLowerCase().includes(searchText?.toLowerCase())
    );

    setSearchResults(filteredResults);
    setCurrentPage(1); // Reset page to 1 when search text changes
  }, [searchText, data]);

  const totalPages = Math.ceil(searchResults?.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const paginatedData = searchResults?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const nextPage = currentPage < totalPages ? currentPage + 1 : null;
  const prePage = currentPage < totalPages ? currentPage - 1 : null;

  const BothData = paginatedData || searchResults;

  return (
    <div>
      <div
        style={{ width: "100%" }}
        ref={headerRef}
        className={`sticky-header ${isSticky ? "sticky" : ""}`}
      >
        <Header handleSearchChange={handleSearchChange} />
      </div>
      {data?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2 mt-20 ">
          {BothData?.map((item) => {
            return <Card item={item} />;
          })}
        </div>
      ) : (
        <Skeleton />
      )}

      {data && (
        <div
          className="flex justify-center bg-white-700 w-full"
          style={{ position: "fixed", bottom: "0px" }}
        >
          <nav aria-label="Page navigation example">
            <ul className="flex list-style-none">
              <li className="page-item">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className="flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </li>
              <li className="page-item">
                <a
                  className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                  href="#"
                >
                  {" "}
                  {prePage === 0 ? "" : prePage}
                </a>
              </li>
              <li className="page-item active">
                <a
                  className="page-link relative block py-1.5 px-3 rounded border-0 bg-blue-600 outline-none transition-all duration-300 rounded text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md"
                  href="#"
                >
                  {currentPage} <span className="visually-hidden"></span>
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                  href="#"
                >
                  {nextPage}
                </a>
              </li>
              <li className="page-item">
                <li>
                  <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150  rounded-full focus:shadow-outline hover:bg-indigo-100"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </li>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Home;
