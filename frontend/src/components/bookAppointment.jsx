import React, { Component } from "react";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import ScheduleHoursCard from "./common/sheduleHoursCard";
import call from "../Images/call2.png";

class BookAppointment extends Component {
  state = {
    selectedDate: null,
    selectedTime: null,
  };
  handleDateChange = (date) => {
    this.setState({ selectedDate: date });
  };
  handleTimeChange = (time) => {
    this.setState({ selectedTime: time });
  };
  getAvailableTimes = () => {
    // Assuming your business hours are between 9 AM and 5 PM
    const businessStartTime = 9;
    const businessEndTime = 17;

    const currentDate = new Date();
    const selectedDate = this.state.selectedDate || currentDate;
    const isToday = selectedDate.toDateString() === currentDate.toDateString();

    const currentHour = currentDate.getHours();

    // If the selected date is today, filter out times that have already passed
    if (isToday) {
      return Array.from(
        { length: businessEndTime - currentHour },
        (_, i) => `${currentHour + i + 1}:00`
      );
    }

    // If it's a future date, return all available business hours
    return Array.from(
      { length: businessEndTime - businessStartTime + 1 },
      (_, i) => `${businessStartTime + i}:00`
    );
  };

  render() {
    const availableTimes = this.getAvailableTimes();
    return (
      <div className="bg-white">
        <div className="flex justify-center pt-5">
          <div className="w-2/3">
            <p className="font-work-sans text-base font-normal leading-6 text-custom">
              Home / Appointment
            </p>
            <p className="font-yeseva-one lg:text-4xl text-2xl font-normal leading-9 text-custom">
              Book an Appointment
            </p>
          </div>
        </div>
        <div className="flex justify-center flex-wrap lg:mt-10">
          <div className="lg:w-[992px] w-11/12">
            <div className="flex flex-wrap lg:flex-nowrap">
              <div className="lg:w-2/4 w-full lg:mr-4 lg:mb-0 mb-2">
                <p className="text-[#172048] font-bold text-xl lg:mb-2">
                  Book an Appointment
                </p>
                <p className="lg:mb-8 text-custom">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque placerat scelerisque tortor ornare ornare. Convallis
                  felis vitae tortor augue. Velit nascetur proin massa in.
                  Consequat faucibus porttitor enim et.
                </p>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered max-w-xs w-2/4 bg-[#172048] rounded-none border-white placeholder:text-white"
                  />
                  <select className="select select-bordered w-2/4 max-w-xs bg-[#172048] rounded-none border-white placeholder:text-white">
                    <option
                      className="placeholder:text-white text-white"
                      disabled
                      selected
                    >
                      Gender
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Email"
                    className="input input-bordered w-2/4 max-w-xs bg-[#172048] rounded-none placeholder:text-white border-white"
                  />
                  <input
                    type="text"
                    placeholder="Phone"
                    className="input input-bordered w-2/4 max-w-xs bg-[#172048] rounded-none border-white placeholder:text-white"
                  />
                </div>
                <div className="flex bg-[#172048] border-[#172048]">
                  <div className="w-2/4 border-white">
                    <DatePicker
                      selected={this.state.selectedDate}
                      onChange={this.handleDateChange}
                      placeholderText="Select Date"
                      className="input input-bordered w-full bg-[#172048] rounded-none placeholder:text-white"
                      minDate={new Date()}
                    />
                  </div>
                  <div className="w-2/4">
                    <TimePicker
                      value={this.state.selectedTime}
                      onChange={this.handleTimeChange}
                      disableClock={true}
                      clearIcon={null}
                      className="input input-bordered w-full bg-[#172048] rounded-none border-white placeholder:text-white"
                      format={"h:mm a"}
                      clockIcon={null}
                      showLeadingZeros={true}
                      options={availableTimes}
                    />
                  </div>
                </div>
                {/* <div className="flex">
                  <select className="select select-bordered w-2/4 max-w-xs bg-[#172048] rounded-none border-white placeholder:text-white">
                    <option className="disabled:text-white" disabled selected>
                      Date
                    </option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                  </select>
                  <select className="select select-bordered w-2/4 max-w-xs bg-[#172048] rounded-none border-white placeholder:text-white">
                    <option disabled selected>
                      Time
                    </option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                  </select>
                </div> */}
                <div className="flex">
                  <select className="select select-bordered w-2/4 max-w-xs bg-[#172048] rounded-none border-white placeholder:text-white">
                    <option className="disabled:text-white" disabled selected>
                      Doctor
                    </option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                  </select>
                  <select className="select select-bordered w-2/4 max-w-xs bg-[#172048] rounded-none border-white placeholder:text-white">
                    <option disabled selected>
                      Department
                    </option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                  </select>
                </div>
                <div className="p-0 m-0 bg-[#172048] border-white">
                  <textarea
                    className="textarea textarea-bordered mb-0 h-[190px] w-full resize-none bg-[#172048] rounded-none m-0 placeholder:text-white  p-3"
                    placeholder="Messagge"
                  ></textarea>
                </div>
                <button
                  className="btn bg-[#50D8DB] w-full text-custom uppercase font-bold rounded-none border-none hover:bg-[#50D8DB]"
                  type="submit"
                >
                  Submit
                </button>
              </div>
              <div className=" lg:w-2/4 w-full bg-[#172048] rounded-md">
                <p className="text-xl text-[#50D8DB] lg:text-[48px] text-center lg:p-7 p-4 font-yeseva-one">
                  Shedule hours
                </p>
                <ScheduleHoursCard />
                <ScheduleHoursCard />
                <ScheduleHoursCard />
                <ScheduleHoursCard />
                <ScheduleHoursCard />
                <ScheduleHoursCard />
                <ScheduleHoursCard />
                <div className="flex cursor-pointer justify-center lg:pb-0 pb-5">
                  <div className="flex items-center">
                    <img
                      className="lg:w-[50px] lg:h-[47.5px] w-[20px] h-[20px] mr-1"
                      src={call}
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div>
                    <p className="lg:text-[26px] text-[14px] text-white font-work-sans">
                      Emergency
                    </p>
                    <p className="lg:text-[26px] text-[14px] text-[#50D8DB]">
                      (237) 681-812-255
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookAppointment;
