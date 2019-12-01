import React from 'react';
import { HabitType } from "./Habits";
import HabitSquare from "./HabitSquare";
let moment = require('moment');
moment().format();
<<<<<<< HEAD
=======
import { Button } from "react-bootstrap";
//import { WeeklyView } from './Habits';
>>>>>>> 69f4cee4c4c322ea8e1377246fdacfa3ca0e7803

let lastDayOfMonth = moment().daysInMonth();

const daysOfMonth:number[] = [];
for(let i=0; i<lastDayOfMonth; i++) { 
   daysOfMonth.push(i+1);
}

/* Components */
interface Props {
  habit: HabitType;
  toggleComplete(todoId: number, date: string): void; 
  isCompleted(id: number, date: string): boolean; 
  //weeklyView: WeeklyView[]; 
}

const Habit: React.FC<Props> = props => {
  // onDoubleClick() {
  //
  // }
  // onCancel() {
  //
  // }
  // onDelete() {
  // }

  // onSubmit(event) {
  // }

  /* Render habit */
  return (
    <tr className="habit" key={props.habit.name}>
      <td className="title" style={{ color: props.habit.color }}>
        {props.habit.name}        
      </td>
      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => ( 
        <td key={day} className="text-center">
          <HabitSquare habit={props.habit} date={day} toggleComplete={props.toggleComplete} isCompleted={props.isCompleted} /> 
        </td>
      ))}
    </tr>
  );
}

export default Habit;