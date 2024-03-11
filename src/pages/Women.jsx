import Card from "../components/card";
import UseFetch from "../customHooks/apiCalls";
import Header from "../components/Header";
import Skeleton from "../components/Skeleton";

const Women = () => {
  const { allCategory } = UseFetch();
  console.log(allCategory, "allCategoryallCategory");

  return (
    <div>
      <Header />
      {allCategory?.womensProducts?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2 mt-20 " >
          {allCategory?.womensProducts.map((item) => {
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
