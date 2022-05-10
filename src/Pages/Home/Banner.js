import React from "react";
import bannerBg from "../../assets/images/bg.png";
import chair from "../../assets/images/chair.png";

const Banner = () => {
  return (
    <div
      style={{ backgroundImage: `url("${bannerBg}")` }}
      className="hero min-h-screen bg-cover bg-center bg-no-repeat"
    >
      <div className="hero-content flex-col lg:flex-row-reverse px-12">
        <img
          src={chair}
          className="lg:max-w-lg sm:max-w-sm rounded-lg shadow-2xl"
          alt="chair"
        />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary uppercase text-white font-bold">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;