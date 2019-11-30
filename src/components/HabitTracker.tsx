import React from 'react';
//import { Row, Col } from "react-bootstrap";
import TodoBox from "./ToDoBox";
import Habits from "./Habits";
import Moods from "./Moods";

const HabitTracker: React.FC = () => {
  return (
    <div className="p-5" style={{background: "white"}}>
      <Habits />
      <Moods />
      <TodoBox />
    </div>
  );
}

export default HabitTracker;