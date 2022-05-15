import React from "react";
import { useNavigate } from "react-router-dom";
import bannerBg from "../../assets/images/bg.png";
import chair from "../../assets/images/chair.png";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{ backgroundImage: `url("${bannerBg}")` }}
      className="hero min-h-[90vh] bg-cover bg-center bg-no-repeat pb-20"
    >
      <div className="hero-content flex-col lg:flex-row-reverse px-6 md:px-12 mx-auto">
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
          <button
            className="btn btn-primary bg-gradient-to-r from-secondary to-primary uppercase text-white font-bold"
            onClick={() => navigate("/appointment")}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
