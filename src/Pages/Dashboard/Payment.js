import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Spinner from "../Shared/Spinner";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L0l0fEuMLENT0w2vYC8FQYBtyxw3uXLbftAzLSZQFKUYdUe550ceGkGnETrxIdxINNwpR5fG6aTlNfXx5OoR4QC00iHsmtbGh"
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://doctors-portal360.herokuapp.com/booking/${id}`;
  const { data: appointment, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div className="card-body">
          <p className="text-success font-bold">
            Hello, {appointment?.patientName}
          </p>
          <h2 className="card-title">Please Pay for: {appointment?.treatment}</h2>
          <p>
            Your appointment
            <span className="text-orange-600">
              {" "}
              {appointment?.date}
            </span> at {appointment?.slot}
          </p>
          <p>Please pay: ${appointment?.price}</p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm appointment={appointment} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
