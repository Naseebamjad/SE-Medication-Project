import React from "react";
const CategoriesCard = ({ img, title, para }) => {
  return (
    <div className="w-72 h-96 top-64 left-5 rounded-3xl p-5 shadow-md bg-blue-50 hover:bg-gradient-to-b from-cyan-400 to-blue-800 hover:cursor-pointer mx-4 my-3 btn border-white hover:border-white">
      <div className="flex justify-center ">
        <img
          className="w-40 h-40 top-64 left-20 mb-2"
          src={img}
          alt=""
          srcSet=""
        />
      </div>
      <p className="font-poppins leading-18 font-poppins leading-24 tracking-normal font-sans text-custom  block text-base lg:text-lg font-poppins font-bold leading-9 text-left">
        {title}
      </p>
      <p className="text-md p-0.5 my-5 font-inter text-black text-xs lg:text-sm font-poppins font-normal leading-6 text-left">
        {para}
      </p>
    </div>
  );
};

export default CategoriesCard;
