import React from "react";
import { Route, Switch } from "react-router-dom";
import HabitTracker from "./components/HabitTracker";
import GenerateHabits from "./components/GenerateHabits";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Report from "./components/Report";
import Auth from "./Auth";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Auth>
        <Switch>
          <Route exact path="/" component={HabitTracker} />
          <Route exact path="/home" component={HabitTracker} />
          <Route exact path="/generate" component={GenerateHabits} />
          <Route exact path="/report" component={Report} />
        </Switch>
      </Auth>
    </Switch>
  );
};

export default Routes;
