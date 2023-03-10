import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function UserList({ user, person, changeStatus }) {
  const [userStatus, setUserStatus] = useState(user && user.userStatus);

  const onChangeStatus = (e) => {
    const value = e.target.value;

    Swal.fire({
      title: "Are you sure??",
      showDenyButton: true,
      confirmButtonText: "Ok",
      denyButtonText: `Cancel`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        changeStatus(user.userId, value);
        setUserStatus(value);
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  if (user && person) {
    return (
      <div className="flex justify-between gap-3 place-items-center w-full py-3 px-2 border-b-2 border-[rgba(255,255,255,0.15)]">
        <div className="flex gap-2 place-items-center">
          <img
            className="rounded-full h-8 w-8 object-cover"
            src={user.imageUrl}
            alt="User profile"
          />
          <div>
            <p className="text-md capitalize">
              {person.firstName} {person.lastName}
            </p>
            <p className="text-xs opacity-80 font-normal uppercase">
              {user.userType}
            </p>
          </div>
        </div>
        <p className="text-sm opacity-80 font-normal">02 Mar, 2023</p>
        <Link to={`${user.userId}/subscription/history`}>
          See Subscription History
        </Link>
        <select
          value={userStatus}
          onChange={onChangeStatus}
          className="text-black"
        >
          <option value="active">Active</option>
          <option value="block">Block</option>
          <option value="deactivate">Deactivate</option>
        </select>
      </div>
    );
  }
}
