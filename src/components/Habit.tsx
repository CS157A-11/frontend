import React from 'react';
import { HabitType } from "./Habits";
let moment = require('moment');
moment().format();
 
import { ButtonToolbar, Button } from "react-bootstrap";

let lastDayOfMonth = moment().daysInMonth();

const daysOfMonth:number[] = [];
for(let i=0; i<lastDayOfMonth; i++) { 
   daysOfMonth.push(i+1);
}

/* Components */
interface Props {
  habit: HabitType;
}

const Habit: React.FC<Props> = props => {
  const onClickHandler = () => {
    console.log(props.habit.isCompleted);
    {props.habit.isCompleted = !props.habit.isCompleted} 
  }
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
        <td key={day} className="text-center" onClick = {onClickHandler}>
          <div     
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: props.habit.isCompleted ? props.habit.color : 'none',
              border: "1px solid",
              borderColor: props.habit.color,
              borderRadius: "2px"
            }}
          />
          {/* <ButtonToolbar>
              <Button variant="outline-secondary"></Button>
          </ButtonToolbar> */}

        </td>
      ))}
    </tr>
  );
}

export default Habit;