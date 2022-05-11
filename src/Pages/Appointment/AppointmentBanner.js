import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import AppointmentBg from "../../assets/images/bg.png";
import chair from "../../assets/images/chair.png";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <section
      style={{
        background: `url(${AppointmentBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="hero min-h-[90vh] mb-20 appointment"
    >
      <div className="hero-content flex-col lg:flex-row-reverse px-6 lg:px-12 mx-auto">
        <div>
          <img
            src={chair}
            className="w-max-w-xs lg:max-w-lg rounded-lg shadow-2xl"
            alt="Dentist chair"
          />
        </div>
        <div className="calender lg:mr-20 mt-10 lg:mt-0 bg-white rounded-xl shadow-lg">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;
