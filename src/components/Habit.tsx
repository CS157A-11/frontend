import React from 'react';
import { HabitType } from "./Habits";
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
  toggleComplete(todoId: number): void;
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

  const toggleComplete = (e: React.MouseEvent) => {
    e.preventDefault();
    props.toggleComplete(props.habit.id);
  };

  /* Render habit */
  return (
    <tr className="habit" key={props.habit.name}>
      <td className="title" style={{ color: props.habit.color }}>
        {props.habit.name}
      </td>
      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
        <td key={day} className="text-center">
          <Button
            variant={props.habit.complete ? "primary" : "light"}
            onClick={toggleComplete}  
            size="lg"       
          >
          </Button>
        </td>
      ))}
    </tr>
  );
}

export default Habit;