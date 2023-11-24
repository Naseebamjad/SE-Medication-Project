import React from "react";
import google from "../Images/google.png";
import twiter from "../Images/twiter.png";
import instagram from "../Images/instagram.png";
import linkedin from "../Images/linkdin.png";
const Footer = () => {
  return (
    <div className="w-full bg-white lg:pl-20 pl-10 pt-10 lg:pt-10 lg:pb-10  lg:pr-20 pb-6">
      <div className="flex justify-between flex-wrap">
        <div className="lg:w-1/5 w-11/12 p-5 ">
          <p className="font-poppins text-base font-semibold leading-6 tracking-normal text-left text-custom">
            We Care+
          </p>
          <p className="font-dm-sans text-base font-normal leading-7 tracking-normal text-left text-custom">
            The greatest medicine of all is to teach people how not to need it.
          </p>
          <div className="mt-10 flex justify-between">
            <img src={google} width="42px" height="40px" alt="" srcSet="" />
            <img src={twiter} width="42px" height="40px" alt="" srcSet="" />
            <img src={instagram} width="42px" height="40px" alt="" srcSet="" />
            <img src={linkedin} width="42px" height="40px" alt="" srcSet="" />
          </div>
        </div>
        <div className="lg:w-1/5 w w-11/12 p-5 ">
          <p className="font-poppins text-base font-semibold leading-6 tracking-normal text-left text-custom">
            Find Doctor
          </p>

          <ul>
            <li className="font-dm-sans text-base font-normal leading-5 tracking-normal text-left text-custom mb-1 cursor-pointer btn bg-white border-white hover:bg-white hover:border-white block">
              Cardiologist
            </li>
            <li className="font-dm-sans text-base font-normal leading-5 tracking-normal text-left text-custom mb-1 cursor-pointer btn bg-white border-white hover:bg-white hover:border-white block">
              Dermatologist
            </li>
            <li className="font-dm-sans text-base font-normal leading-5 tracking-normal text-left text-custom mb-1 cursor-pointer btn bg-white border-white hover:bg-white hover:border-white block">
              Endocrinologist
            </li>
            <li className="font-dm-sans text-base font-normal leading-5 tracking-normal text-left text-custom mb-1  cursor-pointer btn bg-white border-white hover:bg-white hover:border-white block">
              Immunologist/Allergist
            </li>
            <li className="font-dm-sans text-base font-normal leading-5 tracking-normal text-left text-custom mb-1 cursor-pointer btn bg-white border-white hover:bg-white hover:border-white block">
              Others
            </li>
          </ul>
        </div>
        <div className="lg:w-1/5 w-11/12 p-5 ">
          <p className="font-poppins text-base font-semibold leading-6 tracking-normal text-left text-custom">
            Articles
          </p>

          <ul>
            <li className="font-dm-sans text-base font-normal leading-5 tracking-normal text-left text-custom mb-1 cursor-pointer btn bg-white border-white hover:bg-white hover:border-white block">
              About Heart
            </li>
            <li className="font-dm-sans text-base font-normal leading-5 tracking-normal text-left text-custom mb-1 cursor-pointer btn bg-white border-white hover:bg-white hover:border-white block">
              About Fitness
            </li>
            <li className="font-dm-sans text-base font-normal leading-5 tracking-normal text-left text-custom mb-1 cursor-pointer btn bg-white border-white hover:bg-white hover:border-white block">
              About Diets
            </li>
            <li className="font-dm-sans text-base font-normal leading-5 tracking-normal text-left text-custom mb-1  cursor-pointer btn bg-white border-white hover:bg-white hover:border-white block">
              About Mental Health
            </li>
            <li className="font-dm-sans text-base font-normal leading-5 tracking-normal text-left text-custom mb-1 cursor-pointer btn bg-white border-white hover:bg-white hover:border-white block">
              Learn More
            </li>
          </ul>
        </div>
        <div className="lg:w-44 w-11/12 p-5 ">
          <p className="font-poppins text-base font-semibold leading-6 tracking-normal text-left text-custom">
            Company
          </p>

          <ul>
            <li className="font-dm-sans text-base font-normal leading-5 tracking-normal text-left text-custom mb-1 cursor-pointer btn bg-white border-white hover:bg-white hover:border-white block">
              About
            </li>
            <li className="font-dm-sans text-base font-normal leading-5 tracking-normal text-left text-custom mb-1 cursor-pointer btn bg-white border-white hover:bg-white hover:border-white block">
              How it Works
            </li>
            <li className="font-dm-sans text-base font-normal leading-5 tracking-normal text-left text-custom mb-1 cursor-pointer btn bg-white border-white hover:bg-white hover:border-white block">
              Term
            </li>
            <li className="font-dm-sans text-base font-normal leading-5 tracking-normal text-left text-custom mb-1  cursor-pointer btn bg-white border-white hover:bg-white hover:border-white block">
              Privacy Policy
            </li>
          </ul>
        </div>
        <div className="lg:w-44  w-11/12 p-5 ">
          <p className="font-poppins text-base font-semibold leading-6 tracking-normal text-left text-custom ">
            More
          </p>

          <ul>
            <li className="font-dm-sans text-base font-normal leading-5 tracking-normal text-left text-custom mb-1 cursor-pointer btn bg-white border-white hover:bg-white hover:border-white block">
              Documentation
            </li>
            <li className="font-dm-sans text-base font-normal leading-5 tracking-normal text-left text-custom mb-1 cursor-pointer btn bg-white border-white hover:bg-white hover:border-white block">
              License
            </li>
          </ul>
        </div>
      </div>
      <p className="font-dm-sans text-base font-bold leading-5 tracking-normal text-center text-custom ">
        Copyright © 2021. Created with love.
      </p>
    </div>
  );
};

export default Footer;
