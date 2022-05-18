import React from "react";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const Info = () => {
  return (
    <div className="container mx-auto mb-28 px-6 md:px-12">
      <div className="lg:grid grid-cols-3 gap-10">
        <InfoCard
          img={clock}
          title="Opening Hours"
          des="Lorem Ipsum is simply dummy text of the pri"
          bgclassName="bg-gradient-to-r from-secondary to-primary"
        ></InfoCard>
        <InfoCard
          img={marker}
          title="Visit our location"
          des="Brooklyn, NY 10036, United States"
          bgclassName="bg-accent"
        ></InfoCard>
        <InfoCard
          img={phone}
          title="Contact us now"
          des="+000 123 456789"
          bgclassName="bg-gradient-to-r from-secondary to-primary"
        ></InfoCard>
      </div>
    </div>
  );
};

export default Info;
