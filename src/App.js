import React from "react";
import Layout from "./components/Layout/layout";
import Getuser from "./components/User/getuser";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route exact path="/">
            <div>
              <h1>Welcome to home</h1>
            </div>
          </Route>
          <Route path="/adduser" component={Getuser}></Route>
          <Route path="/edituser">
            <div>
              <h1>Welcome to Edit User</h1>
            </div>
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
};

export default App;
