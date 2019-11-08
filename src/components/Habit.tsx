import React from 'react';
import { HabitType } from "./Habits";
var moment = require('moment');
moment().format();
 
import { Button } from "react-bootstrap";

var lastDayOfMonth = moment().daysInMonth();

const daysOfMonth:number[] = [];
for(var i=0; i<lastDayOfMonth; i++) { 
   daysOfMonth.push(i+1);
}

/* Components */
interface Props {
  habit: HabitType;
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
      { daysOfMonth.map(day => (
        <td key={day} className="text-center">
          <div
            style={{
              width: "15px",
              height: "20px",
              border: "1px solid",
              borderColor: props.habit.color,
              borderRadius: "2px"
            }}
          />
        </td>
      ))}
    </tr>
  );
}

export default Habit;
