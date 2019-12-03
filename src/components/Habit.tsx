import React from "react";
let moment = require("moment");
moment().format();
import { WeeklyView } from "./Habits";
import {
  HabitType,
  CompletedHabitType,
  createCompletedHabits
} from "../modules/habitModule";
import colors from "../utils/color";
import { useDispatch } from "react-redux";

let lastDayOfMonth = moment().daysInMonth();

const daysOfMonth: number[] = [];
for (let i = 0; i < lastDayOfMonth; i++) {
  daysOfMonth.push(i + 1);
}

/* Components */
interface Props {
  habit: HabitType;
  completedHabits: CompletedHabitType[];
  weeklyView: WeeklyView[];
}

const Habit: React.FC<Props> = props => {
  const isAlreadyCompleted = (date: string): boolean =>
    props.completedHabits &&
    props.completedHabits.some(habit => habit.completed_date === date);
  const dispatch = useDispatch();
  /* Render habit */
  return (
    <tr className="habit" key={props.habit.name}>
      <td className="title" style={{ color: colors[props.habit.id] }}>
        {props.habit.name}
      </td>
      {props.weeklyView.map(day => (
        <td key={day.date.toISOString()}>
          <div
            className={
              isAlreadyCompleted(day.date.toISOString())
                ? "border bg-primary rounded m-auto p-0"
                : "border rounded m-auto p-0"
            }
            style={{ width: "30px", height: "30px" }}
            onClick={() => {
              console.log(day.date);
              if (!isAlreadyCompleted(day.date.toISOString())) {
                dispatch(
                  createCompletedHabits({
                    habit_id: props.habit.id,
                    completed_date: day.date
                  })
                );
              }
            }}
          ></div>
        </td>
      ))}
    </tr>
  );
};

export default Habit;
