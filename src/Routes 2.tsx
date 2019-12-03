import React from "react";
import { Route, Switch } from "react-router-dom";
import HabitTracker from "./components/HabitTracker";
import GenerateHabits from "./components/GenerateHabits";
import Login from "./containers/Login";
import Signup from "./containers/Signup";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={HabitTracker} />
      <Route exact path="/home" component={HabitTracker} />
      <Route exact path="/generate" component={GenerateHabits} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
    </Switch>
  );
};

export default Routes;
