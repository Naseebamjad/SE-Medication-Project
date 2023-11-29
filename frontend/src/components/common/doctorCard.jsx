import React from "react";
import doclinkedin from "../../Images/doclinkedin.png";
import docfacebook from "../../Images/docfacebook.png";
import docinstagram from "../../Images/docinstagram.png";
import defaultImg from "../../Images/default.jpg"
import { Configuration } from "../../config"
const DoctorCard = ({ id, name, category }) => {
  const config = new Configuration()
  const path = `${config.baseUrl}/doctors/${id}/image`
  return (
    <div className="w-80 rounded-sm mx-1 my-1">
      <img src={path} onError={(e) => e.target.src = defaultImg} alt="" srcSet="" className="w-full"/>
      <div className=" p-3 flex justify-center bg-registerCustom">
        <div className="w-1/2">
          <p className="font-work-sans text-base font-normal leading-6 text-custom">
            {name}
          </p>
          <p className="font-work-sans text-base font-bold leading-5 tracking-wider text-custom uppercase">
            {category}
          </p>
        </div>
      </div>
      <div className="p-3  flex justify-center bg-registerCustom">
        <div className=" w-1/2 flex justify-start">
          <img
            className="mx-1"
            src={doclinkedin}
            width="24px"
            height="24px"
            alt=""
            srcSet=""
          />
          <img
            className="mx-1"
            src={docfacebook}
            width="24px"
            height="24px"
            alt=""
            srcSet=""
          />
          <img
            className="mx-1"
            src={docinstagram}
            width="24px"
            height="24px"
            alt=""
            srcSet=""
          />
        </div>
      </div>
      <div className="font-work-sans text-base font-normal leading-6 text-center bg-doctorsCustom p-3 cursor-pointer">
        View Profile
      </div>
    </div>
  );
};

export default DoctorCard;
