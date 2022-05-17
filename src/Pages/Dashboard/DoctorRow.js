import React from "react";
import { toast } from "react-toastify";

const DoctorRow = ({ doctor, index, refetch }) => {
  const { name, specialization, img, email } = doctor;
  const handleDelete = (email) => {
    console.log(email);
    fetch(`http://localhost:5000/doctor/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(`Doctor ${name} is deleted`);
          refetch();
        } else{
            toast.error(`Failed to delete`);
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-10 rounded">
            <img src={img} alt={name} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{specialization}</td>
      <td>
        <button
          onClick={() => handleDelete(email)}
          className="btn btn-circle btn-outline hover:bg-red-500 hover:border-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default DoctorRow;
