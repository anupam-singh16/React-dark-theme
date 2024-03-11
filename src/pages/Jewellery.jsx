import Card from "../components/card";
import UseFetch from "../customHooks/apiCalls";
import Header from "../components/Header";
import Skeleton from "../components/Skeleton";

const Men = () => {
  const { allCategory } = UseFetch();
 

  return (
    <div>
      <Header />
      {allCategory?.jewelery?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2 mt-20 ">
          {allCategory?.jewelery?.map((item) => {
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
