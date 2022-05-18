import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({ refetch, deleteConfirm, setDeleteConfirm }) => {
  const { name, email } = deleteConfirm;
  const handleDelete = () => {
    fetch(`https://doctors-portal360.herokuapp.com/doctor/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`Doctor ${name} is deleted`);
          setDeleteConfirm(null);
          refetch();
        } else {
          toast.error(`Failed to delete`);
        }
      });
  };
  return (
    <div>
      <input
        type="checkbox"
        id="delete-confirm-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-500">
            Are you sure you want to delete {name}?
          </h3>
          <p className="py-4">
            Once you delete the doctor you will not return back. The selected
            doctor will be deleted for permanently.
          </p>
          <div className="modal-action">
            <label htmlFor="delete-confirm-modal" className="btn">
              Cancel
            </label>
            <label
              onClick={() => handleDelete()}
              htmlFor="delete-confirm-modal"
              className="btn bg-red-500 hover:bg-red-600 hover:border-white border-white text-white"
            >
              Delete
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
