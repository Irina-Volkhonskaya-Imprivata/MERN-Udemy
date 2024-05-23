import React from "react";
import UsersList from "../components/UsersList";


const Users = () => {
  const USERS = [
    {
      id: "u1",
      image: "https://static.toiimg.com/photo/75503656.cms",
      name: "John Doe",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
