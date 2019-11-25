import React from "react";
import Habits from "./Habits"; 

const Calendar: React.FC = () => {
  const calendar = ["sun", "mon", "tue", "wed", "ths", "fri", "sat"].map(
    day => {
      return (
        <div key={day} className="name p-2">
          {day}
        </div>
      );
    }
  );

  return (
    <div className="calendar">
      <div className="d-flex justify-content-end">{calendar}</div>
    </div>
  );
};

/* First argument allows to access state */
/* Second allows to fire actions */
export default Calendar;