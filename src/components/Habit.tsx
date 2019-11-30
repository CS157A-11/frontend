import React from 'react';
import { HabitType } from "./Habits";
import HabitSquare from "./HabitSquare";
let moment = require('moment');
moment().format();
import { Button } from "react-bootstrap";

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