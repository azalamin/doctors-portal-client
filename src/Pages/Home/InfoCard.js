import React from "react";

const InfoCard = ({img, title, des, bgClass}) => {
  return (
    <div className={`card lg:card-side bg-base-100 shadow-xl px-3 text-white mb-10 lg:mb-0 py-5 lg:py-0 ${bgClass}`}>
      <figure>
        <img src={img} alt="Album" />
      </figure>
      <div className="p-2 md:card-body">
        <h2 className="card-title">{title}</h2>
        <p>{des}</p>
      </div>
    </div>
  );
};

export default InfoCard;
