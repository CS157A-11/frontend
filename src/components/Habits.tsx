import React, { useState } from 'react';
var moment = require('moment');
moment().format();

/* Components */
import Habit from "./Habit";
import { Table } from "react-bootstrap";
import { callbackify } from 'util';

let lastDayOfMonth = moment().daysInMonth();

const daysOfMonth:number[] = [];
for(let i=0; i<lastDayOfMonth; i++) { 
   daysOfMonth.push(i+1);
}

export interface HabitType {
  id: number;
  name: string;
  color: string;
  isCompleted: boolean;
}

const Habits: React.FC = () => {
  const [habits, setHabits] = useState<HabitType[]>([
    { id: 1, name: "sleep early", color: "#e83e8c", isCompleted: false},
    { id: 2, name: "exercise", color: "#007bff", isCompleted: false},
    { id: 3, name: "meditate", color: "#ffc107", isCompleted: false},
    { id: 4, name: "floss", color: "#e83e8c", isCompleted: false},
    { id: 5, name: "read before class", color: "#007bff", isCompleted: false},
    { id: 6, name: "clean room", color: "#ffc107", isCompleted: false},
    { id: 7, name: "write in journal", color: "#e83e8c", isCompleted: false},
    { id: 8, name: "take vitamins", color: "#007bff", isCompleted: false},
    { id: 9, name: "wake up early", color: "#ffc107", isCompleted: false},
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
            <Habit key={habit.id} habit={habit}/>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default Habits;
