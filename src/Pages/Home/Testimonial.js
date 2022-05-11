import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Review from "./Review";

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      location: "California",
      img: people1,
      comment:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: 2,
      name: "Emma Watson",
      location: "Chicago",
      img: people2,
      comment:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: 3,
      name: "Isabella",
      location: "New York",
      img: people3,
      comment:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];
  
  return (
    <section className="mb-28 px-6 md:px-12 mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-secondary font-bold">Testimonial</h4>
          <h2 className="text-3xl">What Our Patients Says</h2>
        </div>
        <div>
          <img className="w-24 lg:w-48" src={quote} alt="" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
        {reviews.map((review) => (
          <Review key={review?._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
