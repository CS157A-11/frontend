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

export interface WeeklyView {
  date: Date; 
  weekHeading: string; 
  dayOfWeek: string; 
}

export interface WeeklyDatesHeader {
  firstDate: string; 
  lastDate: string; 
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

  const [weeklyView, setWeeklyView] = useState<WeeklyView[]>([

  ]); 

  const [weeklyDatesHeader, setWeeklyDatesHeader] = useState<WeeklyDatesHeader[]>([
    { firstDate: start.getMonth()+1 + "/" + start.getDate(),
     lastDate: end.getMonth()+1 + "/" + end.getDate() }
  ]); 


  const setNewWeeklyDates = (startDate: Date, stopDate: Date): void => {
    let datesArray:WeeklyView[] = [];
    let currentDate:Date = moment(startDate); 
    let lastDate:Date = moment(stopDate); 
    while(currentDate <= lastDate) { 
      currentDate = moment(currentDate);

      let weekHeading = currentDate.getMonth().toString() + "/" + currentDate.getDate().toString();
      let dayNumber = moment(currentDate).getDay(); 
      let dayOfWeek = days[dayNumber]; 

      datesArray.push( {date: currentDate, weekHeading: weekHeading, dayOfWeek: dayOfWeek} );
      currentDate = moment(currentDate).add(1, 'days');
    }
    setWeeklyView(datesArray);
  }

  const handleTogglePrevWeek = (start: Date, end: Date): void => {
    start.setDate(start.getDate()-7); 
    end.setDate(end.getDate()-7);

    const newWeeklyDatesHeader = []; 
    
    firstDate = start.getMonth()+1 + "/" + start.getDate();  
    lastDate = end.getMonth()+1 + "/" + end.getDate(); 

    newWeeklyDatesHeader.push( { firstDate: firstDate, lastDate: lastDate} ); 
    setWeeklyDatesHeader(newWeeklyDatesHeader);
  }

  const handleToggleNextWeek = (start: Date, end: Date): void => {
    start.setDate(start.getDate()+7);
    end.setDate(end.getDate()+7); 
    // change state in weekly dates 

    const newWeeklyDatesHeader = []; 
    
    firstDate = start.getMonth()+1 + "/" + start.getDate();  
    lastDate = end.getMonth()+1 + "/" + end.getDate(); 

    newWeeklyDatesHeader.push( { firstDate: firstDate, lastDate: lastDate} ); 
    setWeeklyDatesHeader(newWeeklyDatesHeader);
  }

  const togglePrevWeek = (e: React.MouseEvent) => {
    e.preventDefault();
    handleTogglePrevWeek(start, end);
  }

  const toggleNextWeek = (e: React.MouseEvent) => {
    e.preventDefault();
    handleToggleNextWeek(start, end);
  }

  /* Add habit to completed habits array when clicked, 
     remove from array if you click on a completed habit again */ 
  const handleToggleComplete = (id: number, date: string): void => {
    const filteredArray = completedHabits.filter(
      completedHabit => completedHabit.id === id && completedHabit.date == date);
    
    if(filteredArray.length != 0) { 
      const newCompletedHabits = [...completedHabits]; 
      for(let i=0; i<newCompletedHabits.length; i++) {
        if(newCompletedHabits[i].id === id && newCompletedHabits[i].date === date) {
          newCompletedHabits.splice(i, 1); 
        }
      }
      setCompletedHabits(newCompletedHabits);
    } else { 
      const newCompletedHabits = [...completedHabits];
      newCompletedHabits.push( {id: id, date: date} ); 
      setCompletedHabits(newCompletedHabits);
    }
  };

  /* Check if habit is in the completed habits array */ 
  const isCompleted = (id: number, date: string): boolean => {
    const filteredArray = completedHabits.filter(
      completedHabit => completedHabit.id === id && completedHabit.date == date);
    if(filteredArray.length != 0) {
      return true; 
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
          onClick={togglePrevWeek}
        >
          &#8249;	
        </Button>
      <Button
          type="button"
          size="sm"
          style={{'borderRadius':'20px', margin:'5px', width: '33px', height: '33px', fontSize: '20px', textAlign: 'center', lineHeight: '0', marginRight: '25px'}}
          onClick={toggleNextWeek} 
        >
          &#8250;	
        </Button> 
         Sun, {firstDate} - Sat, {lastDate}
         {console.log(firstDate)}
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