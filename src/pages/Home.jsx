import React, { useEffect, useRef, useState } from "react";
import Card from "../components/card";
import UseFetch from "../customHooks/apiCalls";
import Header from "../components/Header";
import Skeleton from "../components/Skeleton";

const Home = () => {
  const { data, user } = UseFetch();
  console.log(data, "data");
  const [isSticky, setSticky] = useState(false);
  const headerRef = useRef(null);
  const [searchResults, setSearchResults] = useState([]);

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
    const results = data?.filter((item) =>
      item.title?.toLowerCase().includes(searchText?.toLowerCase())
    );
    setSearchResults(results);
  }, [searchText, data]);

  return (
    <div>
      <div
        style={{ width: "100%" }}
        ref={headerRef}
        className={`sticky-header ${isSticky ? "sticky" : ""}`}
      >
        <Header handleSearchChange={handleSearchChange} />
      </div>
      {data ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2 mt-20 ">
          {searchResults?.map((item) => {
            return <Card item={item} />;
          })}
        </div>
      ) : (
        <Skeleton />
      )}
    </div>
  );
};

export default Home;
