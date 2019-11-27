import React , { useState } from 'react'; 
import { MoodType } from "./Moods";
import { Button, Dropdown } from 'react-bootstrap';

/* Components */
interface Props {
   moods: MoodType[]; 
}

const Mood: React.FC<Props> = props => {
    /* Render mood */
    return (
      <tr className="mood">
        <td className="title" style={{ color: '#e83e8c'}}>
            mood of the day
        </td>
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
          <td key={day} className="text-center">
            <Dropdown>
                <Dropdown.Toggle variant="info" id="dropdown-basic">
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {props.moods.map((mood: MoodType) =>
                    <Dropdown.Item href="#/action-1">{mood.name}</Dropdown.Item>)}
                </Dropdown.Menu>
            </Dropdown>
          </td>
        ))}
      </tr>
    );
  }
  
  export default Mood;