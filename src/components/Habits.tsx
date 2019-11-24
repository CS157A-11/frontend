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
  complete: boolean;
}

const Habits: React.FC = () => {
  const [habits, setHabits] = useState<HabitType[]>([
    { id: 1, name: "sleep early", color: "#e83e8c", complete: false},
    { id: 2, name: "exercise", color: "#007bff", complete: false},
    { id: 3, name: "meditate", color: "#ffc107", complete: false},
    { id: 4, name: "floss", color: "#e83e8c", complete: false},
    { id: 5, name: "read before class", color: "#007bff", complete: false},
    { id: 6, name: "clean room", color: "#ffc107", complete: false},
    { id: 7, name: "write in journal", color: "#e83e8c", complete: false},
    { id: 8, name: "take vitamins", color: "#007bff", complete: false},
    { id: 9, name: "wake up early", color: "#ffc107", complete: false},
  ]);
  
  const handleToggleComplete = (id: number): void => {
    const newHabits = [...habits];
    const targetHabit = newHabits.find(habit => habit.id === id) as HabitType;
    targetHabit.complete = !targetHabit.complete;
    setHabits(newHabits);
  };
  
  return (
    <div className="habits mt-3">

      <h2>Habits:</h2>

      <Table className="bg-white">
        <thead>
          <tr align="center">   
            <th></th>
            {["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"].map(day => (
              <th key={day} className="name p-2">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {habits.map((habit: HabitType) => (
            <Habit key={habit.id} habit={habit} toggleComplete={handleToggleComplete}/>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default Habits;
