import React, { useState } from 'react';
var moment = require('moment');
import { Button } from 'react-bootstrap';
moment().format();

/* Components */
import Habit from "./Habit";
import { Table } from "react-bootstrap";
import { callbackify } from 'util';

//TODO: Move date stuff to another class and pass it in somehow? to make it cleaner 

let today = new Date();
const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
let day = today.getDay();
let dayOfWeek = days[day];
let start:Date = today;
let end:Date = today; 

if(dayOfWeek != "Sun") { 
  let today = new Date();
  let currDate = today; 
  for(let i=0; i<7; i++) { 
    if(currDate.getDay() != 0) { 
      currDate.setDate(currDate.getDate() - 1); 
    } else {
      start = currDate;  
    }
  }
} else {
  start = today; 
}

if(dayOfWeek != "Sat") {
  let today = new Date() 
  let currDate = today; 
  for(let i=0; i<7; i++) {
    if(currDate.getDay() != 6) { 
      currDate.setDate(currDate.getDate() + 1); 
    } else {
      end = currDate;  
    }
  }
} else {
  end = today; 
}

let firstDate = start.getMonth()+1 + "/" + start.getDate();  
let lastDate = end.getMonth()+1 + "/" + end.getDate(); 

let lastDayOfMonth = moment().daysInMonth();

const daysOfMonth:number[] = [];
for(let i=0; i<lastDayOfMonth; i++) { 
   daysOfMonth.push(i+1);
}

//TODO: Move everything above interface to another class and pass it in 

export interface HabitType {
  id: number;
  name: string;
  color: string;
  complete: boolean;
}

export interface CompletedHabit {
  id: number;
  date: string; 
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

  const [completedHabits, setCompletedHabits] = useState<CompletedHabit[]>([
    
  ]);
  
  /* Add habit to completed habits array when clicked */ 
  const handleToggleComplete = (newId: number, newDate: string): void => {
    const newCompletedHabits = [...completedHabits];
    newCompletedHabits.push( {id: newId, date: newDate} ); 
    setCompletedHabits(newCompletedHabits);
    console.log(completedHabits);
  };
  
  /* Check if habit is in the completed habits array */ 
  const isCompleted = (id: number, date: string): boolean => {
    const target = completedHabits.find(completedHabit => completedHabit.id == id) as CompletedHabit;
    if(target != null) {
      if(target.date == date) {
        return true;
      } else {
        return false;
      }
    } else {
      return false; 
    }
  }
  
  return (
    <div className="habits mt-3">

      {/* <h2>Habits:</h2> */} 
        <h3>
        <Button
          type="button"
          size="sm"
          style={{'borderRadius':'20px', margin:'5px', width: '33px', height: '33px', fontSize: '20px', textAlign: 'center', lineHeight: '0'}}

        >
          &#8249;	
        </Button>
      <Button
          type="button"
          size="sm"
          style={{'borderRadius':'20px', margin:'5px', width: '33px', height: '33px', fontSize: '20px', textAlign: 'center', lineHeight: '0', marginRight: '25px'}}
        >
          &#8250;	
        </Button> 
         Sun, {firstDate} - Sat, {lastDate}
          </h3>

          {/* className="bg-white"  */}
      <Table style={{background: "white"}}>
        <thead>
          <tr style={{textAlign:"center"}}>   
            <th></th>
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
              <th key={day} className="name p-2">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {habits.map((habit: HabitType) => (
            <Habit key={habit.id} habit={habit} toggleComplete={handleToggleComplete} isCompleted={isCompleted} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Habits; 