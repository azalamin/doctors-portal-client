import React from "react";
import { useQuery } from "react-query";
import Spinner from "../Shared/Spinner";
import UserRow from "./UserRow";

const Users = () => {
  const { data: users, isLoading, refetch } = useQuery("users", () =>
    fetch("https://doctors-portal360.herokuapp.com/users", {
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
      <h1>All Users: {users?.length}</h1>
      <div className="overflow-x-auto">
        <table className="table w-full text-center">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Role </th>
              <th>User</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => <UserRow refetch={refetch} user={user} index={index} key={user._id} />)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
