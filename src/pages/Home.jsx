import React from "react";
import Card from "../components/card";
import UseFetch from "../customHooks/apiCalls";

const Home = () => {
  const { data } = UseFetch();
  console.log(data, "data");
  return (
    <div>
      {data?.map((item) => {
        return (
          <div key={item.id}>
            <Card item={item} />
            {/* <p>{item?.name}</p>
            <img src={item?.image} /> */}
          </div>
        );
      })}
    </div>
  );
};

export default Home;
