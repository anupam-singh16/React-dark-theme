import React, { useState } from "react";

const Card = ({ item }) => {
  const [addCart, setAddCart] = useState(1);
  const [id, setId] = useState();
  let price = id === item?.id ? item?.price * addCart : null;
  const backgroundImageUrl = item?.image;

  const addToCart = (id) => {
    setId(id);
    setAddCart(addCart + 1);
  };
  const addToCartMinus = (id) => {
    if (addCart !== 0) {
      setAddCart(addCart - 1);
    }
  };

  console.log(price, "price");

  return (
    <div className="flex items-center justify-center   p-6 ">
      <div className="w-full max-w-md  mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="max-w-md mx-auto">
          <div
            className="h-[236px] grayscale-0 "
            style={{
              backgroundImage: `url(${backgroundImageUrl})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div className="p-4 sm:p-6">
            <p className="font-bold text-gray-700 text-2xl max-h-32 leading-7 mb-1 overflow-hidden">
              {item?.title}
            </p>

            <p className="text-[17px] font-bold text-[#0FB478]">
              ₹ {item?.price}
            </p>

            <p className="text-[#7C7C80] font-[15px] h-[20px] mt-6 truncate ...">
              {item?.description}
            </p>

            <p
              target="_blank"
              href="foodiesapp://food/1001"
              className="block mt-10 cursor-pointer w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
            >
              Buy Now
            </p>
            {/* <p
              target="_blank"
              onClick={() => addToCart(item.id)}
              // href="https://apps.apple.com/us/app/id1493631471"
              className="block mt-1.5 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform rounded-[14px] hover:bg-[#F2ECE7] bg-[#F2ECE7] hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
            >
              add cart{price}
            </p> */}

            <div className="flex items-center border-gray-100">
              <p
                onClick={() => addToCartMinus(item.id)}
                className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
              >
                -
              </p>
              <input
                value={addCart}
                className="h-8 w-[50px] border bg-white text-center text-xs outline-none"
                type="number"
              />
              {/* <p>{price}</p> */}
              <p
                onClick={() => addToCart(item.id)}
                className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
              >
                +
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
