import React, { useState } from 'react';
var moment = require('moment');
moment().format();

/* Components */
import Habit from "./Habit";
import { Table } from "react-bootstrap";
import { callbackify } from 'util';

var lastDayOfMonth = moment().daysInMonth();

const daysOfMonth:number[] = [];
for(var i=0; i<lastDayOfMonth; i++) { 
   daysOfMonth.push(i+1);
}


export interface HabitType {
  id: number;
  name: string;
  color: string;
}

const Habits: React.FC = () => {
  const [habits, setHabits] = useState<HabitType[]>([
    { id: 1, name: "sleep early", color: "#e83e8c"},
    { id: 2, name: "exercise", color: "#007bff" },
    { id: 3, name: "wake up early", color: "#ffc107" }
  ]);

  return (
    <div className="habits mt-3">

      <h2>Habits:</h2>

      <Table bordered className="bg-white">
        <thead>
          <tr>   
            <th></th>
            {daysOfMonth.map(day => (
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
