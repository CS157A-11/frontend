import React, { useState } from 'react'; 
import Mood from "./Mood";
import { Table } from 'react-bootstrap'; 


export interface MoodType {
    id: number;
    name: string;
    selected: boolean;
  }

const Moods: React.FC = () => {
    const [moods, setMood] = useState<MoodType[]>([
        { id: 1, name: "happy", selected: false},
        { id: 1, name: "focused", selected: false},
        { id: 1, name: "productive", selected: false},
        { id: 1, name: "motivated", selected: false},
        { id: 1, name: "neutral", selected: false},
        { id: 1, name: "sad", selected: false},
        { id: 1, name: "angry", selected: false},
        { id: 1, name: "tired", selected: false},
        { id: 1, name: "lazy", selected: false},
    ]);
    
    return (
        <div className="moods mt-3">
          <Table className="bg-white">
            <thead>
              <tr align="center">   
                {[].map(day => (
                  <th key={day} className="name p-2">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
                <Mood moods={moods} />
            </tbody>
          </Table>
        </div>
      );
    };
  
export default Moods; 