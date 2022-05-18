import React, { useState } from "react";
import { useQuery } from "react-query";
import Spinner from "../Shared/Spinner";
import DeleteConfirmModal from "./DeleteConfirmModal";
import DoctorRow from "./DoctorRow";

const ManageDoctors = () => {
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch(`http://localhost:5000/doctor`, {
      method: "GET",
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
      <h1 className="text-2xl">Doctor Management: {doctors.length}</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <DoctorRow
                doctor={doctor}
                index={index}
                key={doctor._id}
                setDeleteConfirm={setDeleteConfirm}
              />
            ))}
          </tbody>
        </table>
      </div>
      {deleteConfirm && (
        <DeleteConfirmModal
          refetch={refetch}
          deleteConfirm={deleteConfirm}
          setDeleteConfirm={setDeleteConfirm}
        />
      )}
    </div>
  );
};

export default ManageDoctors;
