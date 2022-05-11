import React from "react";

const Review = ({ review }) => {
  return (
    <div className="card w-[100%] bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{review?.comment}</p>
        <div className="flex items-center pt-5">
          <div className="avatar">
            <div className="w-14 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
              <img src={review?.img} alt="patient" />
            </div>
          </div>
          <div className="ml-3">
            <h2 className="card-title">{review?.name}</h2>
            <p>{review?.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
