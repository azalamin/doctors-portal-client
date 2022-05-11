import React from "react";

const AppointmentService = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-secondary">{name}</h2>
        <p>
          <small>
            {slots.length ? (
              <span>{slots[0]}</span>
            ) : (
              <span className="text-red-500">Try another date</span>
            )}
          </small>
        </p>
        <p className="mb-3">
          <small className="uppercase">
            {slots?.length} {slots.length > 1 ? "spaces" : "space"} available
          </small>
        </p>
        <div className="card-actions justify-center">
          <label
            disabled={slots.length === 0}
            onClick={() => setTreatment(service)}
            htmlFor="booking-modal"
            className="btn btn-secondary  uppercase text-white font-bold"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentService;
