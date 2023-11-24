import React from "react";
const HeroCard = ({ text1part1, text1part2, text2, text3 }) => {
  return (
    <p className="font-poppins lg:text-3xl text-2xl font-bold leading-7 tracking-normal text-left text-custom mx-3">
      {text1part1}
      <span className="bg-gradient-to-r from-custom1 text-2xl to-custom2 bg-clip-text text-transparent lg:text-3xl font-bold">
        {text1part2}
      </span>
      <span className="block text-sm lg:text-base font-poppins font-semibold leading-6 text-left font-inter  text-customdim">
        {text2}
      </span>
      <span className="block text-sm  font-inter font-normal lg:text-lg leading-3 text-left text-customdim">
        {text3}
      </span>
    </p>
  );
};

export default HeroCard;
