import React, { useState } from 'react';
var moment = require('moment');
import { Button } from 'react-bootstrap';
moment().format();

/* Components */
import Habit from "./Habit";
import WeeklyView from "./WeeklyView"
import { Table } from "react-bootstrap";
import { callbackify } from 'util';

//TODO: Move date stuff to another class and pass it in somehow? to make it cleaner 

let today = new Date();
const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
let day = today.getDay();
let dayOfWeek = days[day];
let startDate:Date = today;
let endDate:Date = today; 

if(dayOfWeek != "Sun") { 
  let today = new Date();
  let currDate = today; 
  for(let i=0; i<7; i++) { 
    if(currDate.getDay() != 0) { 
      currDate.setDate(currDate.getDate() - 1); 
    } else {
      startDate = currDate;  
    }
  }
} else {
  startDate = today; 
}

if(dayOfWeek != "Sat") {
  let today = new Date() 
  let currDate = today; 
  for(let i=0; i<7; i++) {
    if(currDate.getDay() != 6) { 
      currDate.setDate(currDate.getDate() + 1); 
    } else {
      endDate = currDate;  
    }
  }
} else {
  endDate = today; 
}

let firstDate = startDate.getMonth()+1 + "/" + startDate.getDate();  
let lastDate = endDate.getMonth()+1 + "/" + endDate.getDate(); 

let lastDayOfMonth = moment().daysInMonth();

const daysOfMonth:number[] = [];
for(let i=0; i<lastDayOfMonth; i++) { 
   daysOfMonth.push(i+1);
}

let monthNumber = startDate.getMonth();
let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let monthName = monthNames[monthNumber];
let year = startDate.getFullYear(); 

//TODO: Move everything above interface to another class and pass it in 

export interface HabitType {
  id: number;
  name: string;
  color: string;
  complete: boolean;
}

export interface CompletedHabit {
  id: number;
  date: Date; 
}

export interface WeeklyView {
  id: number; 
  date: Date; 
  weekHeading: string; 
  dayOfWeek: string; 
}

export interface WeeklyDatesHeader {
  firstDate: string; 
  lastDate: string; 
  monthName: string;
  year: number;
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
     {  id: 1,
        date: new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()),
        weekHeading: firstDate,
        dayOfWeek: days[startDate.getDay()] },
     { id: 2, 
       date: new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()+1),
       weekHeading: (new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()+1)).getMonth()+1
          + "/" + (new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()+1)).getDate(),
       dayOfWeek: "Mon" },
     { id: 3,
       date: new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()+2),
       weekHeading: (new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()+2)).getMonth()+1 
          + "/" + (new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()+2)).getDate(),
       dayOfWeek: "Tue" },
     { id: 4,  
       date: new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()+3),
       weekHeading: (new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()+3)).getMonth()+1 
          + "/" + (new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()+3)).getDate(), 
       dayOfWeek: "Wed" },
     { id: 5, 
       date: new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()+4),
       weekHeading: (new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()+4)).getMonth()+1 
          + "/" + (new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()+4)).getDate(),
       dayOfWeek: "Thu" },
     { id: 6, 
       date: new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()+5),
       weekHeading: (new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()+5)).getMonth()+1 
          + "/" + (new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()+5)).getDate(),
       dayOfWeek: "Fri" },
     { id: 7, 
       date: new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()+6), 
       weekHeading: lastDate,
       dayOfWeek: days[endDate.getDay()] },
  ]); 

  const [weeklyDatesHeader, setWeeklyDatesHeader] = useState<WeeklyDatesHeader[]>([
    { firstDate: startDate.getMonth()+1 + "/" + startDate.getDate(), 
      lastDate: endDate.getMonth()+1 + "/" + endDate.getDate(), 
      monthName: monthNames[startDate.getMonth()], 
      year: startDate.getFullYear() }, 
  ]); 


  /* After clicking the previous week button (<) change the header above habit tracker (i.e. Sun 12/1- Sat 12/7) by updating weeklyDatesHeader state
     also update the weekly view of the habit tracker (which date each button corresponds to) by changing the weekly view state */ 
  const handleTogglePrevWeek = (startDate: Date, endDate: Date): void => {
    let startCopy = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()-7); 
    let endCopy = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate()-7); 

    startDate.setDate(startDate.getDate()-7); 
    endDate.setDate(endDate.getDate()-7);

    const newWeeklyDatesHeader = []; 
    
    firstDate = startDate.getMonth()+1 + "/" + startDate.getDate();  
    lastDate = endDate.getMonth()+1 + "/" + endDate.getDate(); 
    monthName = monthNames[startDate.getMonth()];  
    year = startDate.getFullYear(); 

    newWeeklyDatesHeader.push( { firstDate: firstDate, lastDate: lastDate, monthName: monthName, year: year} ); 
    setWeeklyDatesHeader(newWeeklyDatesHeader);

    const newWeeklyView = [];

    let id = 1; 
    let i = 0;
    for(let d=startCopy; d<=endCopy; d = new Date(startCopy.getFullYear(), startCopy.getMonth(), startCopy.getDate()+i)) { 
      let weekHeading = d.getMonth()+1 + "/" + (d.getDate()); 
      let dayNumber = d.getDay();
      let dayOfWeek = days[dayNumber]; 

      newWeeklyView.push( {id: id, date: d, weekHeading: weekHeading, dayOfWeek: dayOfWeek} );

      id += 1; 
      i += 1;
    }
    setWeeklyView(newWeeklyView);
  }

  const handleToggleNextWeek = (startDate: Date, endDate: Date): void => {
    let startCopy = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()+7); 
    let endCopy = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate()+7); 

    startDate.setDate(startDate.getDate()+7);
    endDate.setDate(endDate.getDate()+7);     

    const newWeeklyDatesHeader = []; 
    
    firstDate = startDate.getMonth()+1 + "/" + startDate.getDate();  
    lastDate = endDate.getMonth()+1 + "/" + endDate.getDate(); 
    monthName = monthNames[startDate.getMonth()]; 
    year = startDate.getFullYear(); 

    newWeeklyDatesHeader.push( { firstDate: firstDate, lastDate: lastDate, monthName: monthName, year: year} ); 
    setWeeklyDatesHeader(newWeeklyDatesHeader);

    const newWeeklyView = [];

    let id = 1; 
    let i = 0;
    for(let d=startCopy; d<=endCopy; d = new Date(startCopy.getFullYear(), startCopy.getMonth(), startCopy.getDate()+i)) { 
      let weekHeading = d.getMonth()+1 + "/" + (d.getDate()); 
      let dayNumber = d.getDay();
      let dayOfWeek = days[dayNumber]; 

      newWeeklyView.push( {id: id, date: d, weekHeading: weekHeading, dayOfWeek: dayOfWeek} );
      id += 1; 
      i += 1;
    }
    setWeeklyView(newWeeklyView);
  }

  const togglePrevWeek = (e: React.MouseEvent) => {
    e.preventDefault();
    handleTogglePrevWeek(startDate, endDate);
  }

  const toggleNextWeek = (e: React.MouseEvent) => {
    e.preventDefault();
    handleToggleNextWeek(startDate, endDate);
  }

  /* Add habit to completed habits array when clicked, 
     remove from array if you click on a completed habit again */ 
  const handleToggleComplete = (id: number, date: Date): void => {
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
  const isCompleted = (id: number, date: Date): boolean => {
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
      <h1>Hey there, [name]</h1>
      <h1>{monthName} {year}</h1> 

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
          </h3>

          {/* className="bg-white"  */}
      <Table style={{background: "white"}}>
        <thead>
          <tr style={{textAlign:"center"}}>   
            <th></th>
            {weeklyView.map(day => (
              <th key={day.id} className="name p-2">
                {/* {day.weekHeading} */}
                {day.weekHeading}
                {/* <WeeklyView weekHeading={day.weekHeading} /> */}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {habits.map((habit: HabitType) => (
            <Habit key={habit.id} habit={habit} toggleComplete={handleToggleComplete} isCompleted={isCompleted} weeklyView={weeklyView}/> 
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Habits; 