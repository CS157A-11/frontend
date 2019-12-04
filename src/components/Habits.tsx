import React, { useState, useEffect } from "react";
var moment = require("moment");
import { Button } from "react-bootstrap";
moment().format();

/* Components */
import Habit from "./Habit";
import Moods from "./Moods";
import { Table } from "react-bootstrap";
import {
  HabitType,
  fetchHabits,
  CompletedHabitType,
  fetchCompletedHabits
} from "../modules/habitModule";
import { RootState } from "../modules";
import { useSelector, useDispatch } from "react-redux";

//TODO: Move date stuff to another class and pass it in somehow? to make it cleaner

let today = new Date();
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = today.getDay();
let dayOfWeek = days[day];
let startDate: Date = today;
let endDate: Date = today;

if (dayOfWeek != "Sun") {
  let today = new Date();
  let currDate = today;
  for (let i = 0; i < 7; i++) {
    if (currDate.getDay() != 0) {
      currDate.setDate(currDate.getDate() - 1);
    } else {
      startDate = currDate;
    }
  }
} else {
  startDate = today;
}

if (dayOfWeek != "Sat") {
  let today = new Date();
  let currDate = today;
  for (let i = 0; i < 7; i++) {
    if (currDate.getDay() != 6) {
      currDate.setDate(currDate.getDate() + 1);
    } else {
      endDate = currDate;
    }
  }
} else {
  endDate = today;
}

let firstDate = startDate.getMonth() + 1 + "/" + startDate.getDate();
let lastDate = endDate.getMonth() + 1 + "/" + endDate.getDate();

let lastDayOfMonth = moment().daysInMonth();

const daysOfMonth: number[] = [];
for (let i = 0; i < lastDayOfMonth; i++) {
  daysOfMonth.push(i + 1);
}

let monthNumber = startDate.getMonth();
let monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let monthName = monthNames[monthNumber];
let year = startDate.getFullYear();

//TODO: Move everything above interface to another class and pass it in

export interface CompletedHabit {
  id: number;
  date: Date;
}

export interface WeeklyView {
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
  const habits: HabitType[] = useSelector(
    (state: RootState) => state.habit.habits
  );
  const completedHabits: CompletedHabitType[] = useSelector(
    (state: RootState) => state.habit.completedHabits
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHabits());
    dispatch(fetchCompletedHabits());
  }, []);

  const [weeklyView, setWeeklyView] = useState<WeeklyView[]>([
    {
      date: new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate()
      ),
      weekHeading: firstDate,
      dayOfWeek: "Sun"
    },
    {
      date: new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate() + 1
      ),
      weekHeading:
        new Date(
          startDate.getFullYear(),
          startDate.getMonth(),
          startDate.getDate() + 1
        ).getMonth() +
        1 +
        "/" +
        new Date(
          startDate.getFullYear(),
          startDate.getMonth(),
          startDate.getDate() + 1
        ).getDate(),
      dayOfWeek: "Mon"
    },
    {
      date: new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate() + 2
      ),
      weekHeading:
        new Date(
          startDate.getFullYear(),
          startDate.getMonth(),
          startDate.getDate() + 2
        ).getMonth() +
        1 +
        "/" +
        new Date(
          startDate.getFullYear(),
          startDate.getMonth(),
          startDate.getDate() + 2
        ).getDate(),
      dayOfWeek: "Tue"
    },
    {
      date: new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate() + 3
      ),
      weekHeading:
        new Date(
          startDate.getFullYear(),
          startDate.getMonth(),
          startDate.getDate() + 3
        ).getMonth() +
        1 +
        "/" +
        new Date(
          startDate.getFullYear(),
          startDate.getMonth(),
          startDate.getDate() + 3
        ).getDate(),
      dayOfWeek: "Wed"
    },
    {
      date: new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate() + 4
      ),
      weekHeading:
        new Date(
          startDate.getFullYear(),
          startDate.getMonth(),
          startDate.getDate() + 4
        ).getMonth() +
        1 +
        "/" +
        new Date(
          startDate.getFullYear(),
          startDate.getMonth(),
          startDate.getDate() + 4
        ).getDate(),
      dayOfWeek: "Thu"
    },
    {
      date: new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate() + 5
      ),
      weekHeading:
        new Date(
          startDate.getFullYear(),
          startDate.getMonth(),
          startDate.getDate() + 5
        ).getMonth() +
        1 +
        "/" +
        new Date(
          startDate.getFullYear(),
          startDate.getMonth(),
          startDate.getDate() + 5
        ).getDate(),
      dayOfWeek: "Fri"
    },
    {
      date: new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate() + 6
      ),
      weekHeading: lastDate,
      dayOfWeek: "Sat"
    }
  ]);

  /* After clicking the previous week button (<) change the header above habit tracker (i.e. Sun 12/1- Sat 12/7) by updating weeklyDatesHeader state
     also update the weekly view of the habit tracker (which date each button corresponds to) by changing the weekly view state */

  const handleTogglePrevWeek = (startDate: Date, endDate: Date): void => {
    let startCopy = new Date(
      startDate.getFullYear(),
      startDate.getMonth(),
      startDate.getDate() - 7
    );
    let endCopy = new Date(
      endDate.getFullYear(),
      endDate.getMonth(),
      endDate.getDate() - 7
    );

    startDate.setDate(startDate.getDate() - 7);
    endDate.setDate(endDate.getDate() - 7);

    const newWeeklyDatesHeader = [];

    firstDate = startDate.getMonth() + 1 + "/" + startDate.getDate();
    lastDate = endDate.getMonth() + 1 + "/" + endDate.getDate();
    monthName = monthNames[startDate.getMonth()];
    year = startDate.getFullYear();

    newWeeklyDatesHeader.push({
      firstDate: firstDate,
      lastDate: lastDate,
      monthName: monthName,
      year: year
    });

    const newWeeklyView = [];

    let i = 0;
    for (
      let d = startCopy;
      d <= endCopy;
      d = new Date(
        startCopy.getFullYear(),
        startCopy.getMonth(),
        startCopy.getDate() + i
      )
    ) {
      let weekHeading = d.getMonth() + 1 + "/" + d.getDate();
      let dayNumber = d.getDay();
      let dayOfWeek = days[dayNumber];

      newWeeklyView.push({
        date: d,
        weekHeading: weekHeading,
        dayOfWeek: dayOfWeek
      });

      i += 1;
    }
    setWeeklyView(newWeeklyView);
  };

  const handleToggleNextWeek = (startDate: Date, endDate: Date): void => {
    let startCopy = new Date(
      startDate.getFullYear(),
      startDate.getMonth(),
      startDate.getDate() + 7
    );
    let endCopy = new Date(
      endDate.getFullYear(),
      endDate.getMonth(),
      endDate.getDate() + 7
    );

    startDate.setDate(startDate.getDate() + 7);
    endDate.setDate(endDate.getDate() + 7);

    const newWeeklyDatesHeader = [];

    firstDate = startDate.getMonth() + 1 + "/" + startDate.getDate();
    lastDate = endDate.getMonth() + 1 + "/" + endDate.getDate();
    monthName = monthNames[startDate.getMonth()];
    year = startDate.getFullYear();

    newWeeklyDatesHeader.push({
      firstDate: firstDate,
      lastDate: lastDate,
      monthName: monthName,
      year: year
    });

    const newWeeklyView = [];

    let i = 0;
    for (
      let d = startCopy;
      d <= endCopy;
      d = new Date(
        startCopy.getFullYear(),
        startCopy.getMonth(),
        startCopy.getDate() + i
      )
    ) {
      let weekHeading = d.getMonth() + 1 + "/" + d.getDate();
      let dayNumber = d.getDay();
      let dayOfWeek = days[dayNumber];

      newWeeklyView.push({
        date: d,
        weekHeading: weekHeading,
        dayOfWeek: dayOfWeek
      });

      i += 1;
    }
    setWeeklyView(newWeeklyView);
  };

  const togglePrevWeek = (e: React.MouseEvent) => {
    e.preventDefault();
    handleTogglePrevWeek(startDate, endDate);
  };

  const toggleNextWeek = (e: React.MouseEvent) => {
    e.preventDefault();
    handleToggleNextWeek(startDate, endDate);
  };

  return (
    <div className="habittracker mt-3">
      <div className="habits mt-3">
        <h1>Hey there, [name]</h1>
        <h1>
          {monthName} {year}
        </h1>

        <h3>
          <Button
            type="button"
            size="sm"
            style={{
              borderRadius: "20px",
              margin: "5px",
              width: "33px",
              height: "33px",
              fontSize: "20px",
              textAlign: "center",
              lineHeight: "0"
            }}
            onClick={togglePrevWeek}
          >
            &#8249;
          </Button>
          <Button
            type="button"
            size="sm"
            style={{
              borderRadius: "20px",
              margin: "5px",
              width: "33px",
              height: "33px",
              fontSize: "20px",
              textAlign: "center",
              lineHeight: "0",
              marginRight: "25px"
            }}
            onClick={toggleNextWeek}
          >
            &#8250;
          </Button>
          Sun, {firstDate} - Sat, {lastDate}
        </h3>

        <Table style={{ background: "white" }}>
          <thead>
            <tr style={{ textAlign: "center" }}>
              <th></th>
              {weeklyView.map(day => (
                <th key={day.date.toString()} className="name p-2">
                  {`${day.dayOfWeek} ${day.weekHeading}`}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {habits
              .filter(habit => habit.is_active)
              .map((habit: HabitType) => (
                <Habit
                  key={habit.id}
                  habit={habit}
                  completedHabits={completedHabits.filter(
                    ch => ch.habit_id === habit.id
                  )}
                  weeklyView={weeklyView}
                />
              ))}
            <Moods weeklyView={weeklyView} />
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Habits;
