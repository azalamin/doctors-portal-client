import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentService from "./AppointmentService";
import BookingModal from "./BookingModal";

const AvailableAppointment = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section className="mb-28 px-6 lg:px-12">
      <h3 className="text-center text-2xl text-secondary">
        Available Appointments on {format(date, "PP")}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 mx-auto">
        {services.map((service) => (
          <AppointmentService
            setTreatment={setTreatment}
            key={service?._id}
            service={service}
          />
        ))}
      </div>
      {treatment && (
        <BookingModal
          setTreatment={setTreatment}
          date={date}
          treatment={treatment}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointment;
