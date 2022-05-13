import React from "react";
import {
  useAuthState,
  useSendEmailVerification
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Spinner from "../Shared/Spinner";

const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification] =
    useSendEmailVerification(auth);

  if (loading) {
    return <Spinner></Spinner>;
  }

  if (
    user?.providerData[0]?.providerId === "password" &&
    !user?.emailVerified
  ) {
    return (
      <div className="min-h-[60vh] flex justify-center items-center">
        <div className="text-center">
          <h3 className="text-4xl text-red-500">Email is not emailVerified</h3>
          <h3 className="text-4xl text-green-500">
            Please verify your email address
          </h3>
          <button
            className="btn btn-secondary bg-gradient-to-r from-secondary to-primary my-5"
            onClick={async () => {
              await sendEmailVerification(user?.email);
              toast.success("Verification email has been sent!");
            }}
          >
            Send email verification
          </button>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
