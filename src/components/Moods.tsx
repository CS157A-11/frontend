import React, { useState } from 'react'; 
import { WeeklyView } from "./Habits"; 
import MoodDropdown from "./MoodDropdown";

const daysOfWeek:string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; 

interface Props {
  weeklyView: WeeklyView[];
}

const Moods: React.FC<Props> = (props) => {

    return (
      <tr className="mood">
      <td className="title" style={{ color: '#e83e8c'}}>
        mood of the day
      </td>
      {props.weeklyView.map(day => (
        <td key={day.date.toString()} className="text-center">
          <MoodDropdown date={day.date} />
        </td>
      ))}
      </tr>
    ) 
};
  
export default Moods; 