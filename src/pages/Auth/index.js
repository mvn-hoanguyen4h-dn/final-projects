import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";

function Auth() {
  return (
    <>
      <Switch>
        <Route path="/auth/login">
          <Login />
        </Route>
      </Switch>
    </>
  );
}

export default Auth;
