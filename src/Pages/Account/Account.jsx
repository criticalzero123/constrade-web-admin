import React from "react";
import { useUsers } from "../../hooks/account/useUsers";

const Account = () => {
  const [users] = useUsers();

  console.log(users);

  return (
    <div>
      <p className="text-white">Helo from users</p>
    </div>
  );
};

export default Account;
