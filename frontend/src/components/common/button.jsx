import React from "react";
const Button = ({ text }) => {
  return (
    <p className="btn btn-outline hover:text-white text-blue-500 bg-opacity-100 rounded-full mx-1  hover:bg-gradient-to-r from-teal-300 via-teal-500 to-teal-700 ">
      {text}
    </p>
  );
};

export default Button;
