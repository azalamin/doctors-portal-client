import { format } from "date-fns";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const BookingModal = ({ treatment, date, setTreatment }) => {
    const [user] = useAuthState(auth);
  useEffect(() => {}, [date, user]);

  const handleBooking = (event) => {
    event.preventDefault();
    const date = event.target.date.value;
    const slot = event.target.slot.value;
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
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
              disabled
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
              disabled
              className="input input-bordered w-full max-w-xl mb-3"
              name="name"
              required
            />
            <br />
            <input
              type="Email"
              placeholder="Email"
              className="input input-bordered w-full max-w-xl mb-3"
              name="email"
              required
            />
            <br />
            <input
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xl mb-3"
              name="phone"
              required
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
