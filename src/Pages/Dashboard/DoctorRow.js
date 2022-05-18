import React from "react";

const DoctorRow = ({ doctor, index, setDeleteConfirm }) => {
  const { name, specialization, img } = doctor;

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
        <label
          onClick={() => setDeleteConfirm(doctor)}
          htmlFor="delete-confirm-modal"
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
        </label>
      </td>
    </tr>
  );
};

export default DoctorRow;
