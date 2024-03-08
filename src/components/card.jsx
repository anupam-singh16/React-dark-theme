import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../store/reducerSlice/cartSlice";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const counter = useSelector((state) => state.counter.value);

  const [addCart, setAddCart] = useState(0);

  const [id, setId] = useState(null);

  let price = id === item?.id ? item?.price * addCart : "";

  // const backgroundImageUrl =
  //   item?.images[1] || item?.images[0] || item?.images[2] || item?.images[3];

  const addIncrement = (idx) => {
    setId(idx);
    setAddCart((prevAddCart) => prevAddCart + 1);

    dispatch(increment({ price, idx, item }));
  };
  const addToCartMinus = (idx) => {
    setId(idx);
    if (addCart !== 0) {
      setAddCart(addCart - 1);
    }
    dispatch(decrement({ price, idx }));
  };

  return (
    <div className="flex items-center justify-center  p-4 ">
      <div className="w-[85%] max-w-md  mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="max-w-md mx-auto">
          <div
            onClick={() => navigate(`/detailsPage/${item?.id}`)}
            className="flex justify-center w-full"
            // style={{
            //   // borderRadius: "10px",
            //   backgroundImage: `url(${backgroundImageUrl})`,
            //   backgroundSize: "cover",
            // }}
          >
            <img
              style={{ border: "10px" }}
              className="h-[200px] w-[300px]"
              src={item?.images[0]}
            />
          </div>
          <div className="p-4 sm:p-6 ">
            <p
              onClick={() => navigate(`/detailsPage/${item?.id}`)}
              className="font-bold text-gray-700 text-2xl h-[80px] leading-7 mb-1 overflow-hidden"
            >
              {item?.title}
            </p>
            <span className="flex justify-left flex-row font-bold text-gray-700">
              MRP{""}&nbsp;&nbsp;
              <p className="text-[17px] font-bold text-[#0FB478]">
                ₹{item?.price}
              </p>
            </span>

            <p
              target="_blank"
              onClick={() => navigate(`/detailsPage/${item?.id}`)}
              className="block mt-10 cursor-pointer w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
            >
              Buy Now
            </p>
            {id !== item.id || addCart === 0 ? (
              <p
                target="_blank"
                onClick={() => addIncrement(item.id)}
                className="block mt-1.5 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform rounded-[14px] hover:bg-[#F2ECE7] bg-[#F2ECE7] hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
              >
                add cart
              </p>
            ) : (
              <p
                target="_blank"
                onClick={() => addIncrement(item.id)}
                className="block mt-1.5 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform rounded-[14px] hover:bg-[#F2ECE7] bg-[#F2ECE7] hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
              >
                Remove From Cart
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
