import React from "react"; 
import { Route, Switch } from "react-router-dom";
//import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import HabitTracker from "./HabitTracker";
// import App from "./App";

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" component={HabitTracker} />
            <Route exact path="/Home" component={HabitTracker} />
        </Switch>
    );
}

export default Routes;