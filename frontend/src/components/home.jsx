import heroImg from "../Images/heroImg.png";
import getapppointment from "../Images/getappointment.png";
import visithospitals from "../Images/visithospitals.png";
import chatwithdoctors from "../Images/chatwithdoctor.png";
import specialServices from "../Images/specialServices.png";
import videoconsultancy from "../Images/videoconsultancy.png";
import chatwithdoctor2 from "../Images/chatwithdoctor2.png";
import articleonhealth from "../Images/articleonhealth.png";
import specialistdoctors from "../Images/specilistdoctors.png";
import React from "react";
import Button from "./common/button";
import HeroCard from "./common/heroCard";
import CategoriesCard from "./common/catogoriesCard";
import SpecialServiceCard from "./common/specialServiceCard";

const Home = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-wrap justify-center">
        <div className=" p-4 lg:w-3/6 lg:pl-16 lg:pt-10">
          <p className=" font-poppins text-4xl font-bold leading-24 tracking-normal text-left font-sans lg:text-6xl text-custom  leading-10">
            We Are Ready to{" "}
            <span className="bg-gradient-to-r from-custom1 to-custom2 bg-clip-text text-transparent">
              Help Your Health{" "}
            </span>
            Problems
          </p>
          <p className="text-md p-0.5 my-5 font-inter font-normal text-xl lg:text-lg leading-7 text-left text-customdim lg:w-96">
            To keep the body in good health is a duty... otherwise we shall not
            be able to keep our mind strong and clear.
          </p>
          <Button text="Try Free Consultation" />

          <div className="mt-8 flex">
            <HeroCard
              text1part1="200"
              text1part2="+"
              text2="Active"
              text3="Doctor"
            />
            <HeroCard
              text1part1="15K"
              text1part2="+"
              text2="Active"
              text3="User"
            />
            <HeroCard
              text1part1="50"
              text1part2="+"
              text2="Active"
              text3="Pharmacy"
            />
          </div>
        </div>
        <div className="lg:w-3/6 pr-0 flex justify-end">
          <img
            className="p-4 rounded-3xl"
            src={heroImg}
            width="500px"
            height="400"
            alt=""
            srcSet=""
          />
        </div>
      </div>
      <div className="p-5">
        <p className="text-center font-poppins text-4xl font-bold leading-24 tracking-normal italic font-sans lg:text-5xl text-custom  leading-10 ">
          <span className="bg-gradient-to-r from-custom1 to-custom2 bg-clip-text text-transparent">
            “
          </span>
          Healing is a matter{" "}
          <span className="bg-gradient-to-r from-custom1 to-custom2 bg-clip-text text-transparent">
            of time, but it is sometimes also a{" "}
          </span>
          matter of opportunity.
          <span className="bg-gradient-to-r from-custom1 to-custom2 bg-clip-text text-transparent">
            ”
          </span>
        </p>
      </div>
      {/* Main Services Card */}
      <div className="p-5">
        <div className="flex justify-center">
          <p className="text-3xl text-center lg:text-4xl font-poppins leading-18 font-poppins font-bold leading-24 tracking-normal italic font-sans  text-custom  leading-10 lg:w-96">
            Our{" "}
            <span className="bg-gradient-to-r from-custom1 to-custom2 bg-clip-text text-transparent">
              Main Services{" "}
            </span>
            Categories{" "}
          </p>
        </div>

        <div className="flex justify-center flex-wrap my-6">
          <CategoriesCard
            img={chatwithdoctors}
            title="Chat with doctor"
            para="You can connect directly, quickly and easily, and there is no need
            to doubt the quality of the consultation and treatment offered."
          />
          <CategoriesCard
            img={getapppointment}
            title="Get Appointment"
            para="Talk about the health complaints you are experiencing and don't hesitate to ask about the proper treatment"
          />
          <CategoriesCard
            img={visithospitals}
            title="Visit Hospitals"
            para="Get priority services in hospitals with Haidoc. Which allows you to go to the hospital more practically and save time."
          />
        </div>
      </div>
      {/* Special Services Card */}
      <div className="flex flex-wrap justify-center">
        <div className="lg:w-3/6 lg:pl-20">
          <img
            className="w-80 h-128 top-80 left-16"
            src={specialServices}
            alt=""
            srcSet=""
          />
        </div>
        <div className="lg:w-3/6">
          <div>
            <p className="text-3xl text-center lg:text-4xl font-poppins leading-18 font-poppins font-bold leading-24 tracking-normal italic font-sans  text-custom  leading-10 lg:w-96">
              Our{" "}
              <span className="bg-gradient-to-r from-custom1 to-custom2 bg-clip-text text-transparent">
                Special Services
              </span>
            </p>
            <div>
              <div className="flex my-5">
                <SpecialServiceCard
                  img={videoconsultancy}
                  title="Video Consultancy"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare tellus malesuada odio blandit. Sit duis eu nisi
                  habitant lorem egestas."
                />
                <SpecialServiceCard
                  img={chatwithdoctor2}
                  title="Chat with Doctor"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare tellus malesuada odio blandit. Sit duis eu nisi
                  habitant lorem egestas."
                />
              </div>
              <div className="flex my-5">
                <SpecialServiceCard
                  img={articleonhealth}
                  title="Articles on Health"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare tellus malesuada odio blandit. Sit duis eu nisi
                  habitant lorem egestas."
                />
                <SpecialServiceCard
                  img={specialistdoctors}
                  title="Specialist Doctors"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare tellus malesuada odio blandit. Sit duis eu nisi
                  habitant lorem egestas."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Doctors */}
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <div></div>
          <div></div>
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
            alt=""
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="/images/stock/photo-1414694762283-acccc27bca85.jpg"
            alt=""
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            alt=""
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
      <svg
        width="515"
        height="528"
        viewBox="0 0 515 528"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="515"
          height="772"
          transform="matrix(-1 2.21614e-10 2.21614e-10 1 515 0)"
          fill="url(#paint0_linear_102_344)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_102_344"
            x1="257.5"
            y1="0"
            x2="257.5"
            y2="772"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0104167" stopColor="#33B2C2" stopOpacity="0.56" />
            <stop offset="0.447917" stopColor="#33B2C2" stopOpacity="0.13" />
            <stop offset="0.776042" stopColor="#33B2C2" stopOpacity="0.03" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Home;
