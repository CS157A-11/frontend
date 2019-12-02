import React, { useState } from 'react'; 
import { Table } from 'react-bootstrap'; 
import { WeeklyView } from "./Habits"; 
import MoodDropdown from "./MoodDropdown";

const daysOfWeek:string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; 

const Moods: React.FC = () => {

    return (
        <div className="moods mt-3">
          {/* className="bg-white"  */}
          <Table style={{background: "white"}}>
            <thead>
              <tr style={{textAlign: "center"}}>   
                {[].map(day => (
                  <th key={day} className="name p-2">
            
                  </th>
                ))}
              </tr>
            </thead>
              <tbody>
                <tr className="mood">
                <td className="title" style={{ color: '#e83e8c'}}>
                  mood of the day
                </td>
                {daysOfWeek.map(day => (
                  <td key={day} className="text-center">
                    <MoodDropdown date={day} />
                  </td>
                ))}
                </tr>
             </tbody>
          </Table>
        </div>
      );
    };
  
export default Moods; 