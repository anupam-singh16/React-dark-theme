import React from "react";
import Card from "../components/card";
import UseFetch from "../customHooks/apiCalls";
import Header from "../components/Header";

const Home = () => {
  const { data, user } = UseFetch();
  console.log(data, "data");
  return (
    <div>
      <Header />
      <div className="grid grid-cols-4 gap-4">
        {data?.map((item) => {
          return <Card item={item} />;
        })}
      </div>
    </div>
  );
};

export default Home;
