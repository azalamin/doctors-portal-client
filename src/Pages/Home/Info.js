import React from "react";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const Info = () => {
  return (
    <div className="container px-6 mx-auto mb-20">
      <div className="lg:grid grid-cols-3 gap-10">
        <InfoCard
          img={clock}
          title="Opening Hours"
          des="Lorem Ipsum is simply dummy text of the pri"
          bgClass="bg-gradient-to-r from-secondary to-primary"
        ></InfoCard>
        <InfoCard
          img={marker}
          title="Visit our location"
          des="Brooklyn, NY 10036, United States"
          bgClass="bg-accent"
        ></InfoCard>
        <InfoCard
          img={phone}
          title="Contact us now"
          des="+000 123 456789"
          bgClass="bg-gradient-to-r from-secondary to-primary"
        ></InfoCard>
      </div>
    </div>
  );
};

export default Info;
