import React, { useState } from 'react'; 
import Mood from "./Mood";
import { Table } from 'react-bootstrap'; 


export interface MoodType {
    id: number;
    name: string;
    type: string; 
    selected: boolean;
}

export interface MoodOfTheDay {
  id: number;
  date: Date;
}

const Moods: React.FC = () => {
    const [moods, setMood] = useState<MoodType[]>([
        { id: 1, name: "happy", type: "positive", selected: false},
        { id: 1, name: "focused", type: "positive", selected: false},
        { id: 1, name: "productive", type: "positive", selected: false},
        { id: 1, name: "motivated", type: "positive", selected: false},
        { id: 1, name: "neutral", type: "neutral", selected: false},
        { id: 1, name: "sad", type: "negative", selected: false},
        { id: 1, name: "angry", type: "negative", selected: false},
        { id: 1, name: "tired", type: "negative", selected: false},
        { id: 1, name: "lazy", type: "negative", selected: false},
    ]);

    const [moodOfTheDay, setMoodOfTheDay] = useState<MoodOfTheDay[]>([
      
    ]);
    
    
    return (
        <div className="moods mt-3">
          {/* className="bg-white"  */}
          <Table style={{background: "white"}}>
            <thead>
              <tr style={{textAlign: "center"}}>   
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