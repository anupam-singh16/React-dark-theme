import React from "react";
import Card from "../components/card";
import UseFetch from "../customHooks/apiCalls";
import Header from "../components/Header";
import Skeleton from "../components/Skeleton";

const Home = () => {
  const { data, user } = UseFetch();
  console.log(data, "data");
  return (
    <div>
      <Header />
      {data ? (
        <div className="grid grid-cols-4 gap-4">
          {data?.map((item) => {
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
