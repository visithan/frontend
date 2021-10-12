import React, { useState } from "react";
import userDataService from "./userServices";

//import userHandler from "./userHandler";

//const { getData, insertData } = userHandler;
const getuser = () => {
  const [userdata, setUserData] = useState();

  const getUsers = () => {
    userDataService
      .getAllUsers()
      .then((users) => {
        setUserData(users.data);
        console.log(userdata);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getUsers();
  });

  return (
    <div>
      <h1>Hi User Welcome</h1>
    </div>
  );
};

export default getuser;
