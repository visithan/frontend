import React, { useState, useEffect } from "react";
import UserDataService from "./userServices";

//import userHandler from "./userHandler";

//const { getData, insertData } = userHandler;
const Getuser = () => {
  const [userdata, setUserData] = useState();

  const getUsers = () => {
    UserDataService.getAllUsers()
      .then((users) => {
        setUserData(users.data);
        console.log(userdata);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    //getUsers();
  });

  return (
    <div>
      <h1>Hi User Welcome</h1>
      <button onClick={getUsers()}>All Users</button>
    </div>
  );
};

export default Getuser;
