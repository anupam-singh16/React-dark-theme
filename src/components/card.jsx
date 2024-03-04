import React from "react";

const Card = ({ item }) => {
  const backgroundImageUrl = item?.image;
  return (
    <div className="flex items-center justify-center   p-6 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
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
            <p className="font-bold text-gray-700 text-[22px] h-[88px] leading-7 mb-1">
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
            {/* <a
              target="_blank"
              href="https://apps.apple.com/us/app/id1493631471"
              className="block mt-1.5 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform rounded-[14px] hover:bg-[#F2ECE7] hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
            >
             Buy Now
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
