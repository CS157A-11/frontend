import React from 'react';
import { HabitType } from "./Habits";
import HabitSquare from "./HabitSquare";
let moment = require('moment');
moment().format();
import { Button } from "react-bootstrap";
import { WeeklyView } from './Habits';

let lastDayOfMonth = moment().daysInMonth();

const daysOfMonth:number[] = [];
for(let i=0; i<lastDayOfMonth; i++) { 
   daysOfMonth.push(i+1);
}

/* Components */
interface Props {
  habit: HabitType;
  toggleComplete(todoId: number, date: Date): void; 
  isCompleted(id: number, date: Date): boolean; 
  weeklyView: WeeklyView[]; 
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
      {props.weeklyView.map(day => ( 
        <td key={day.date} className="text-center">
          <HabitSquare habit={props.habit} date={day.date} toggleComplete={props.toggleComplete} isCompleted={props.isCompleted} /> 
        </td>
      ))}
    </tr>
  );
}

export default Habit;