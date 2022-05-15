import { format } from "date-fns";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Spinner from "../Shared/Spinner";
import AppointmentService from "./AppointmentService";
import BookingModal from "./BookingModal";

const AvailableAppointment = ({ date }) => {
  const [treatment, setTreatment] = useState(null);
  const formattedDate = format(date, "PP");

  const { data: services, isLoading, refetch } = useQuery(
    ["available", formattedDate],
    () =>
      fetch(`https://doctors-portal360.herokuapp.com/available?date=${formattedDate}`).then(
        (res) => res.json()
      )
  );

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <section className="mb-28 px-6 lg:px-12">
      <h3 className="text-center text-2xl text-secondary">
        Available Appointments on {formattedDate}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 mx-auto">
        {services?.map((service) => (
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
          refetch={refetch }
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointment;
