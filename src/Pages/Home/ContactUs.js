import React from "react";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const ContactUs = () => {
  return (
    <section
      style={{ background: `url(${appointment})` }}
      className="mb-10 py-16 px-5 bg-cover bg-no-repeat bg-center"
    >
      <div className="">
        <div className="text-center">
          <h3 className="text-xl font-bold text-secondary">Contact Us</h3>
          <h2 className="text-4xl text-white">Stay connected with us</h2>
        </div>
        <div className="text-center mt-8">
          <input
            type="email"
            placeholder="Email Address"
            className="input w-full max-w-xl mb-3"
          />
          <br />
          <input
            type="text"
            placeholder="Subject"
            className="input w-full max-w-xl mb-3"
          />
          <br />
          <textarea
            className="textarea textarea-bordered w-full max-w-xl mb-3 h-40"
            placeholder="Your Message"
          ></textarea>
          <br />
          <PrimaryButton>Submit</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
