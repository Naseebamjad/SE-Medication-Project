import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Configuration } from "../config"

const Register = () => {
  const config = new Configuration()
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const requestData = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      phone_number: phone_number,
      address: address
    };
    console.log(requestData)
    try {
      const response = await axios({
        method: 'post',
        url: `${config.baseUrl}/signup`,
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
        data: requestData
      });
      if (response.data.id) {
        navigate("/login");
      }
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.detail);
      } else {
        setError("An error occurred. Please try again later.");
      }
    }
  };
  return (
    <div className="bg-white lg:px-20">
      <div className="bg-registerCustom lg:p-12 p-5 ">
        <div className="lg:w-2/5">
          <p className="font-poppins lg:text-2xl text-xl font-semibold leading-14 text-custom">
            🌿Unifying Wellness & Care
          </p>
          <p className="text-custom font-poppins text-base font-sm leading-8">
            Empower Your Health Journey with Personalized Medication Management,
            Expert Guidance, and a Supportive Community
          </p>
        </div>
        <div className="flex justify-center mt-10">
          <div className="lg:w-1/2 w-11/12 bg-white rounded-2xl border border-solid border-gray-400">
            <div className="p-10">
              <p className="font-poppins text-xl font-semibold leading-14 text-register">
                Sign up now
              </p>
              <form>
                <div className="flex justify-center">
                  <div className="w-2/4 mr-2">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">First Name</span>
                      </label>
                      <input
                        type="text"
                        className="input input-bordered bg-white text-custom"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-2/4">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Last Name</span>
                      </label>
                      <input
                        type="text"
                        className="input input-bordered bg-white text-custom"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email address</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered bg-white text-custom"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone number</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered bg-white text-custom"
                    value={phone_number}
                    onChange={(e) => setPhone_number(e.target.value)}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    className="input input-bordered bg-white text-custom"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Home Address</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered bg-white text-custom"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                {error && <p className="text-red-500">{error}</p>}
                {/* CheckBox */}
                <div className="mt-8 flex justify-center">
                  <div className="flex lg:flex-col justify-center">
                    <input type="checkbox" checked="checked" className="checkbox w-5 h-5" />
                  </div>
                  <span className="ml-1 text-custom font-poppins text-sm font-normal leading-6">
                    By creating an account, I agree to our Terms of use and
                    Privacy Policy{" "}
                  </span>
                </div>
                {/* CheckBox */}
                <div className="mt-8 flex justify-center">
                  <div className="">
                    <input type="checkbox" checked="checked" className="checkbox w-5 h-5" />
                  </div>
                  <span className="ml-1 text-custom font-poppins text-sm font-normal leading-6">
                    By creating an account, I am also consenting to receive SMS
                    messages and emails, including product new feature updates,
                    events, and marketing promotions.{" "}
                  </span>
                </div>
                <div className="mt-4">
                  <p onClick={handleSignup} className="btn btn-outline hover:text-white text-blue-500 bg-opacity-100 rounded-full mx-1  hover:bg-gradient-to-r from-teal-300 via-teal-500 to-teal-700 ">
                    Sign up
                  </p>
                  <span className="text-custom">
                    Already have an ccount?{" "}
                    <span className="underline cursor-pointer btn bg-white border-white hover:border-white hover:bg-white p-0 text-custom">
                      Log in
                    </span>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
