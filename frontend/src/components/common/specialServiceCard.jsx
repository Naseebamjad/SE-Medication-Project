import React from "react";
const SpecialServiceCard = ({ img, title, text }) => {
  return (
    <div className="w-52 h-52 top-96 left-72 mx-5">
      <img className="w-16 h-16 top-96 left-72 rounded-md" src={img} alt="" />
      <p className="text-base lg:text-lg text-left font-poppins font-bold leading-7 text-custom">
        {title}
      </p>
      <p className="text-xs lg:text-sm font-poppins font-normal leading-5 text-left mt-3">
        {text}
      </p>
    </div>
  );
};

export default SpecialServiceCard;
