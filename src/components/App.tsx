import React from 'react';
//import { Row, Col } from "react-bootstrap";
import TodoBox from "./ToDoBox";
import Habits from "./Habits";

var today = new Date();
var monthNumber = today.getMonth();
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthName = monthNames[monthNumber];
var year = today.getFullYear(); 

const App: React.FC = () => {
  return (
    <div className="p-5">
      <h1>Lalitha's Habit Tracker</h1>
      <h1>{monthName} {year}</h1> 
      <Habits />
      <TodoBox />
    </div>
  );
};

export default App;
