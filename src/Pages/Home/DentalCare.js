import React from "react";
import treatment from '../../assets/images/treatment.png';
import PrimaryButton from "../Shared/PrimaryButton";

const DentalCare = () => {
  return (
    <div className="card rounded-none lg:card-side bg-base-100 md:w-10/12 px-6 md:px-12 mx-auto mb-28">
      <figure className="lg:w-[200%]">
        <img className="rounded-lg" src={treatment} alt="Album" />
      </figure>
      <div className="lg:ml-14 mt-10 lg:mt-0 lg:flex items-center">
        <div>
          <h2 className="card-title text-4xl">
            Exceptional Dental Care, on Your Terms
          </h2>
          <p className="my-5">
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
    </div>
  );
};

export default DentalCare;
