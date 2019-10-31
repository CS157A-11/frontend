import React, { useState } from "react";

/* Components */
import Habit from "./Habit";
import Calendar from "./Calender";
import { Table } from "react-bootstrap";

export interface HabitType {
  id: number;
  name: string;
  color: string;
}

const Habits: React.FC = () => {
  const [habits, setHabits] = useState<HabitType[]>([
    { id: 1, name: "sleep early", color: "#e83e8c" },
    { id: 2, name: "aaaa", color: "#007bff" },
    { id: 3, name: "demo today", color: "#ffc107" }
  ]);

  return (
    <div className="habits mt-3">
      <h2>Habits:</h2>

      <Table bordered className="bg-white">
        <thead>
          <tr>
            <th></th>
            {["sun", "mon", "tue", "wed", "thr", "fri", "sat"].map(day => (
              <th key={day} className="name p-2">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {habits.map((habit: HabitType) => (
            <Habit key={habit.id} habit={habit} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Habits;
