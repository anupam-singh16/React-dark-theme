import Card from "../components/card";
import UseFetch from "../customHooks/apiCalls";
import Header from "../components/Header";
import Skeleton from "../components/Skeleton";
import { useEffect, useState } from "react";


const Women = () => {
const { allCategory } = UseFetch();

const [search,setSearch] = useState('');
const [searchResultData,setSearchResultData] = useState([])

const handleSearchChange = (e) =>{
  setSearch(e.target.value)
}

  useEffect(()=>{
    const filterData = allCategory?.womensProducts?.filter((item)=>
      item.title?.toLowerCase().includes(search.toLowerCase())
    )

    setSearchResultData(filterData)

  },[search,allCategory?.womensProducts])

  return (
    <div>
      <Header handleSearchChange={handleSearchChange} />
      {allCategory?.womensProducts?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2 mt-20 " >
          {searchResultData?.map((item) => {
            return (
              <div key={item.id}>
                <Card item={item} />;
              </div>
            );
          })}
        </div>
      ) : (
        <Skeleton />
      )}
    </div>
  );
};

export default Women;
