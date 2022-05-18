import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Management from "./Management";

function Features() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/management">
          <Management />
        </Route>
      </Switch>
    </>
  );
}

export default Features;
