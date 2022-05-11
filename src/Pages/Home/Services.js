import React from "react";
import cavity from '../../assets/images/cavity.png';
import fluoride from '../../assets/images/fluoride.png';
import whitening from "../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Fluoride Treatment",
      description:
        "Fluoride treatments are typically professional treatments containing a high concentration of fluoride",
      image: fluoride,
    },
    {
      _id: 2,
      name: "Cavity Filling",
      description:
        "Amalgam Fillings: Amalgam has been used by dental professionals for more than a century; it is the most researched material used for filling cavities.",
      image: cavity,
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      description:
        "With professional Teeth Whitening treatment, you can enjoy the boost in confidence of a bright, white smile.",
      image: whitening,
    },
  ];
  return (
    <div className="pb-28 px-6 md:px-12 mx-auto">
      <div className="text-center pb-12">
        <h3 className="font-bold text-secondary text-xl uppercase">
          OUR SERVICES
        </h3>
        <h1 className="text-4xl">Services We Provide</h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
        {services.map((service) => (
          <Service key={service?._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
