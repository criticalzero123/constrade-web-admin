import React from "react";
import UserList from "../../Components/DashboardComponents/UserList";
import { useUsers } from "../../hooks/account/useUsers";

const Account = () => {
  const { users, changeStatus } = useUsers();

  return (
    <section className=" text-white font-bold bg-[rgba(255,255,255,0.1)] border-2 border-[rgba(255,255,255,0.15)] rounded-sm grow">
      {/* Header */}

      <div className="flex justify-between place-items-center p-4 bg-[rgba(255,255,255,0.20)]">
        <div>
          <h3>Accounts</h3>
          <p className="text-sm opacity-80 font-normal mt-1">
            Account information
          </p>
        </div>
      </div>

      {/* List contents  */}
      <div>
        {users &&
          users.map((_user, index) => (
            <UserList
              user={_user.user}
              person={_user.person}
              rate={_user.rate}
              key={index}
              changeStatus={changeStatus}
            />
          ))}
      </div>
    </section>
  );
};

export default Account;
