import React from "react";
import appointment from "../../assets/images/appointment.png";
import doctor from "../../assets/images/doctor.png";
import PrimaryButton from "../Shared/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section
      style={{ background: `url(${appointment})` }}
      className="mb-28 lg:mt-40"
    >
      <div className="mx-auto flex justify-center items-center">
        <div className="flex-1 mt-[-100px] xl:mt-[-130px] hidden lg:block">
          <img src={doctor} alt="" />
        </div>
        <div className="flex-1 p-5 sm:p-10 lg:p-0">
          <h3 className="text-secondary font-bold text-2xl">Appointment</h3>
          <h2 className="text-white text-4xl mt-3">
            Make an appointment Today
          </h2>
          <p className="text-white py-5 lg:pr-20">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
