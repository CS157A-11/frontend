import React from "react";
import { Route, Switch } from "react-router-dom";
import HabitTracker from "./HabitTracker";
import GenerateHabits from "./GenerateHabits";
import Login from "./Login";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={HabitTracker} />
      <Route exact path="/home" component={HabitTracker} />
      <Route exact path="/generate" component={GenerateHabits} />
      <Route exact path="/login" component={Login} />
    </Switch>
  );
};

export default Routes;
