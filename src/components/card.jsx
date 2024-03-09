import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  addAllItem,
} from "../store/reducerSlice/cartSlice";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allItem = useSelector((state) => state.counter.allItem);

  const [addCart, setAddCart] = useState(0);

  const [id, setId] = useState(null);

  let price = id === item?.id ? item?.price * addCart : "";

  const matchingItem = allItem.find((item) => parseFloat(item.id) === id);
  console.log(matchingItem?.id === item.id, "matchingItem");
  const addIncrement = (idx) => {
    setId(idx);
    setAddCart((prevAddCart) => prevAddCart + 1);

    dispatch(addAllItem({ price, idx, item }));
  };

  const removeFromCart = (idx) => {
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
              src={item?.image}
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
              className="cursor-pointer block mt-10 cursor-pointer w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
            >
              Buy Now
            </p>
            {matchingItem?.id !== item.id || id !== item.id ? (
              <p
                target="_blank"
                onClick={() => addIncrement(item.id)}
                className="cursor-pointer block mt-1.5 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform rounded-[14px] hover:bg-[#F2ECE7] bg-[#F2ECE7] hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
              >
                add cart
              </p>
            ) : (
              <p
                target="_blank"
                onClick={() => removeFromCart(item.id)}
                className="cursor-pointer  block mt-1.5 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform rounded-[14px] hover:bg-[#F2ECE7] bg-[#F2ECE7] hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
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
