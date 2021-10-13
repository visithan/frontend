import React, { useState, useEffect } from "react";
import UserDataService from "./userServices";

//import userHandler from "./userHandler";

//const { getData, insertData } = userHandler;
const Getuser = () => {
  const [userdata, setUserData] = useState([]);

  const getUsers = () => {
    UserDataService.getAllUsers()
      .then((users) => {
        setUserData(users.data);
        console.log(users.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  const fedit = (id) => {
    alert("The id is " + id);
  };

  return (
    <table className="table table-striped table-hover table-sm">
      <thead>
        <tr>
          <th>User ID</th>
          <th>User Name</th>
          <th>E-Mail</th>
          <th>User Role</th>
          <th>User Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {userdata.map((data, i) => (
          <tr key={data.userId}>
            <td>{data.userId}</td>
            <td>{data.userName}</td>
            <td>{data.user_email}</td>
            <td>{data.user_role}</td>
            <td>{data.user_status}</td>
            <td>
              <div
                className="btn-group btn-group-sm"
                role="group"
                aria-label="Action Btns"
              >
                <button
                  onClick={() => fedit(data.userId)}
                  type="button"
                  className="btn btn-primary"
                >
                  Edit
                </button>
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Getuser;
