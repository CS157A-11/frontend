import React from 'react';
//import { Row, Col } from "react-bootstrap";
import TodoBox from "./ToDoBox";
import Habits from "./Habits";

let today = new Date();
let monthNumber = today.getMonth();
let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let monthName = monthNames[monthNumber];
let year = today.getFullYear(); 

const App: React.FC = () => {
  return (
    <div className="p-5" style={{backgroundColor: "white"}}>
      <h1>Hey there, [name]</h1>
      <h1>{monthName} {year}</h1> 
      <Habits />
      <TodoBox />
    </div>
  );
};

export default App;
