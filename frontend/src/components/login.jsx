import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Configuration } from "../config"
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const config = new Configuration()
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const formEncodedData = new URLSearchParams();
    formEncodedData.append('username', email);
    formEncodedData.append('password', password);
    try {
      const response = await axios({
        method: 'post',
        url: `${config.baseUrl}/login`,
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: formEncodedData.toString()
      });
      if (response.data.access_token) {
        localStorage.setItem("userToken", response.data.access_token);
        navigate("/");
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
            🌿Welcome Back
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
                Sign in now
              </p>

              <form>
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
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    className="input input-bordered bg-white text-custom"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {error && <p className="text-red-500">{error}</p>}

                <div className="mt-4">
                  <p onClick={handleLogin} className="btn btn-outline hover:text-white text-blue-500 bg-opacity-100 rounded-full mx-1  hover:bg-gradient-to-r from-teal-300 via-teal-500 to-teal-700 ">
                    Sign in
                  </p>
                  <span className="text-custom">
                    Don’t have an account?{" "}
                    <span className="underline cursor-pointer btn bg-white border-white hover:border-white hover:bg-white p-0 text-custom">
                      Sign up
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

export default Login;