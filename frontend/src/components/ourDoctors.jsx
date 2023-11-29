import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import DoctorCard from "./common/doctorCard";
import { Configuration } from "../config"


const OurDoctors = () => {
  const config = new Configuration()
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          method: 'get',
          url: `${config.baseUrl}/doctors`,
          headers: {
            'Authorization': 'Bearer '+localStorage.getItem("userToken"),
          }
        });
        setDoctors(response.data);
        console.log(response.data)
      } catch (err) {
        if(err.message === "Request failed with status code 403"){
          navigate("/login");
        }
        setError('Error fetching data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  },[navigate]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-white">
      <div className="flex justify-center mb-5">
        <div className="w-2/3">
          <p className="font-work-sans text-base font-normal leading-6 text-custom">
            {/* Home / Doctors */}
          </p>
          <p className="font-yeseva-one text-4xl font-normal leading-9 text-custom">
            Our Doctors
          </p>
        </div>
      </div>

      <div className="flex justify-center flex-wrap">
        {doctors.map(doctor => (
          <DoctorCard id={doctor.id} name={doctor.name} category={doctor.category} />
        ))}
      </div>
    </div>
  );
};

export default OurDoctors;
