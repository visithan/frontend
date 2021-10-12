//import React from 'react';
import axios from "axios";

const userHandler = () => {
  const getData = () => {
    axios
      .get("http://localhost:3030/users")
      .then((response) => {
        return response.data;
        //this.setState({ datas: response.data.students });
        //console.log(response);
      })
      .catch((e) => {
        console.error(e);
      });

    /*$.ajax({
        url: 'server_pages/viewall.php',
        method: "GET",
        dataType: 'json',
        cache: false,
        success: function(data) {
        console.log(data);
        this.setState({datas: data.students});
        }.bind(this),
        error: function(xhr, status, err) {
        console.error(status, err.toString());
        }.bind(this)
    });*/

    /*fetch(
        "server_pages/viewall.php",
        {
        method: 'GET',
        }
        ).then(res => res.json())
        .then((result) => {
        console.log(result.students);
        this.setState({
        datas: result.students,
        });
        },
        (error) => {
        console.error(error);
        }
    )*/
  };

  const insertData = (formData) => {
    axios
      .post("server_pages/insert.php", formData)
      .then((response) => {
        this.getData();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const editData = (formData) => {
    axios
      .post("server_pages/edit.php", formData)
      .then((response) => {
        //console.error(response);
        this.getData();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const deleteData = (formData) => {
    axios
      .post("server_pages/delete.php", formData)
      .then((response) => {
        //console.error(response);
        this.getData();
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export default userHandler;
