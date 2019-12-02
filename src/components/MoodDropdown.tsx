import React, {useState } from 'react';
import { Dropdown } from 'react-bootstrap';

/* Components */
interface Props {
  date: Date;
}

export interface MoodType {
    id: number;
    name: string;
    type: string; 
    selected: boolean;
}

export interface MoodOfTheDay {
  name: string;
  date: Date;
}

const MoodDropdown: React.FC<Props> = props => {
    const [moods, setMood] = useState<MoodType[]>([
        { id: 1, name: "happy", type: "positive", selected: false},
        { id: 2, name: "focused", type: "positive", selected: false},
        { id: 3, name: "productive", type: "positive", selected: false},
        { id: 4, name: "motivated", type: "positive", selected: false},
        { id: 5, name: "neutral", type: "neutral", selected: false},
        { id: 6, name: "sad", type: "negative", selected: false},
        { id: 7, name: "angry", type: "negative", selected: false},
        { id: 8, name: "tired", type: "negative", selected: false},
        { id: 9, name: "lazy", type: "negative", selected: false},
    ]);

    const [moodOfTheDay, setMoodOfTheDay] = useState<MoodOfTheDay[]>([

    ]);

    const handleSelectedMood = (eventKey: any, event: Object):any => {
        const newMoodOfTheDay = [...moodOfTheDay]; 
        newMoodOfTheDay.push( {name: eventKey, date: props.date} )
        setMoodOfTheDay(newMoodOfTheDay); 
        console.log(eventKey);
    }

    console.log(moodOfTheDay);

    return (   
        <Dropdown>
            <Dropdown.Toggle variant="info" id="dropdown-basic">
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {moods.map((mood: MoodType) =>
                <Dropdown.Item key={mood.id} eventKey={mood.name} onSelect={handleSelectedMood} >{mood.name}</Dropdown.Item>)}
            </Dropdown.Menu>
        </Dropdown>
    );
}
 
export default MoodDropdown;