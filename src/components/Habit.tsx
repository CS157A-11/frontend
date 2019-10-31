import React from "react";
import { HabitType } from "./Habits";
import { Button } from "react-bootstrap";

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
      {["sun", "mon", "tue", "wed", "ths", "fri", "sat"].map(day => (
        <td key={day} className="text-center">
          <div
            style={{
              width: "20px",
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
};

export default Habit;
