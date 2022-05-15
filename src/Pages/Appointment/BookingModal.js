import { format } from "date-fns";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
  const [user] = useAuthState(auth);
  useEffect(() => {}, [date, user]);
  const formattedDate = format(date, "PP");

  const handleBooking = (event) => {
    const { _id, name } = treatment;
    event.preventDefault();
    const slot = event?.target?.slot?.value;
    const phone = event?.target?.phone?.value;
    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      patient: user?.email,
      patientName: user?.displayName,
      phone,
    };

    fetch("https://doctors-portal360.herokuapp.com/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.success) {
          toast.success(`Appointment is booked on ${formattedDate} at ${slot}`);
        } else {
          toast.error(
            `Already have an appointment on ${data?.booking?.date} at ${data?.booking?.slot}`
          );
        }
        refetch();
      }); 
    // close the modal
    setTreatment(null);
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-middle">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary">
            Booking for: {treatment?.name}
          </h3>
          <form onSubmit={handleBooking} className="text-center mt-8">
            <input
              type="text"
              value={format(date, "PP")}
              readOnly
              name="date"
              className="input input-bordered w-full max-w-xl mb-3"
            />
            <br />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xl mb-3"
            >
              {treatment?.slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <br />
            <input
              type="text"
              value={user?.displayName}
              readOnly
              className="input input-bordered w-full max-w-xl mb-3"
              name="name"
            />
            <br />
            <input
              type="Email"
              value={user?.email}
              readOnly
              className="input input-bordered w-full max-w-xl mb-3"
              name="email"
            />
            <br />
            <input
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xl mb-3"
              name="phone"
            />
            <br />
            <br />
            <input
              type="submit"
              value="SUBMIT"
              className="btn w-full max-w-xl mb-3"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
