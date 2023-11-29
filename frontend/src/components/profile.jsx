import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Configuration } from "../config"


const Profile = () => {
  const config = new Configuration()
  const [errorMessage, setErrorMessage] = useState('')
  const [userData, setUserData] = useState({
    firstname: '',
    lastname: '',
    phone_number: '',
    address: ''
  });
  const [passwordData, setPasswordData] = useState({
    currentpassword: '',
    newpassword: '',
    confirmPassword: ''
  });
  const fetchData = async () => {
    try {
      const response = await axios.get(`${config.baseUrl}/users/me`, {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("userToken"),
        }
      });
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user data', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpdateInfo = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${config.baseUrl}/users/me`, userData, {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("userToken"),
        }
      });
      fetchData()
    } catch (error) {
      console.error('Error updating user data', error);
    }
  };
  
  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${config.baseUrl}/users/me/password`, passwordData, {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("userToken"),
        }
      });
    } catch (error) {
      console.error('Error updating password', error);
      console.log(error.response.data.detail)
    }
  };

  return (
    <div className="flex justify-center bg-registerCustom">
      <div className="p-10 w-[700px]">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              My details
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Personal Information
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="First Name"
                    value={userData.firstname}
                    onChange={e => setUserData({ ...userData, firstname: e.target.value })}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Last Name"
                    value={userData.lastname}
                    onChange={e => setUserData({ ...userData, lastname: e.target.value })}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phoneNo"
                    id="phoneNo"
                    placeholder="Phone Number"
                    value={userData.phone_number}
                    onChange={e => setUserData({ ...userData, phone_number: e.target.value })}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Home Address"
                    value={userData.address}
                    onChange={e => setUserData({ ...userData, address: e.target.value })}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50  sm:px-6">
                <p onClick={handleUpdateInfo} className="btn btn-outline hover:text-white text-blue-500 bg-opacity-100 rounded-full mx-1  hover:bg-gradient-to-r from-teal-300 via-teal-500 to-teal-700 ">
                  Update Pesonal Info
                </p>
              </div>
            </dl>
          </div>
          <div className="px-4 py-5 sm:px-6">
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Password</p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Current Password
                  </label>
                  <input
                    type="password"
                    name="currentpassword"
                    id="currentpassword"
                    placeholder="Current Password"
                    value={passwordData.currentpassword}
                    onChange={e => setPasswordData({ ...passwordData, currentpassword: e.target.value })}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    New Password
                  </label>
                  <input
                    type="password"
                    name="newpassword"
                    id="newpassword"
                    placeholder="New Password"
                    value={passwordData.newpassword}
                    onChange={e => setPasswordData({ ...passwordData, newpassword: e.target.value })}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    value={passwordData.confirmPassword}
                    onChange={e => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50  sm:px-6">
                <p onClick={handleUpdatePassword} className="btn btn-outline hover:text-white text-blue-500 bg-opacity-100 rounded-full mx-1  hover:bg-gradient-to-r from-teal-300 via-teal-500 to-teal-700 ">
                  Update Password
                </p>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
