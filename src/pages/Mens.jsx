import Card from "../components/card";
import UseFetch from "../customHooks/apiCalls";
import Header from "../components/Header";
import Skeleton from "../components/Skeleton";
import { useEffect, useState } from "react";

const Men = () => {
  const { allCategory } = UseFetch();

  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  console.log(searchResult, "searchResult");

  useEffect(() => {
    const filteredResults = allCategory?.mensProducts?.filter((item) =>
      item.title?.toLowerCase().includes(search?.toLowerCase())
    );

    setSearchResult(filteredResults);
  }, [search, allCategory?.mensProducts]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <Header handleSearchChange={handleSearchChange} />
      {searchResult?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2 mt-20 ">
          {searchResult?.map((item) => {
            return <Card item={item} />;
          })}
        </div>
      ) : (
        <Skeleton />
      )}
    </div>
  );
};

export default Men;
