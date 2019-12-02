import React from 'react';
//import { Row, Col } from "react-bootstrap";
import TodoBox from "./ToDoBox";
import Habits from "./Habits";
import Moods from "./Moods";
import { WeeklyView } from "./Habits"; 

interface Props {
  weeklyView: WeeklyView[]; 
}

const HabitTracker: React.FC<Props> = (props) => {  
  return (
    <div className="p-5" style={{background: "white"}}>
      <Habits />
      <Moods />
      <TodoBox />
    </div>
  );
}

export default HabitTracker;