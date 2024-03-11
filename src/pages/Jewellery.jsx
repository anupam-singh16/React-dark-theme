import Card from "../components/card";
import UseFetch from "../customHooks/apiCalls";
import Header from "../components/Header";
import Skeleton from "../components/Skeleton";
import { useEffect, useState } from "react";

const Men = () => {
  const { allCategory } = UseFetch();
  const [searchData, setSearchData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const filterData = allCategory?.jewelery?.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );

    setSearchData(filterData);
  }, [allCategory?.jewelery, searchText]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <div>
      <Header handleSearchChange={handleSearchChange} />
      {allCategory?.jewelery?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2 mt-20 ">
          {searchData?.map((item) => {
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
