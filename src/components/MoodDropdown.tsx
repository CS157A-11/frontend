import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { MoodType } from "./Moods";
import "bootstrap/dist/css/bootstrap.min.css";

interface Props {
  date: Date;
  moods: MoodType[];
}

export interface MoodOfTheDay {
  name: string;
  date: Date;
}

const MoodDropdown: React.FC<Props> = props => {
  const [moodOfTheDay, setMoodOfTheDay] = useState<MoodOfTheDay[]>([]);

  const handleSelectedMood = (eventKey: any) => {
    setMoodOfTheDay(prevState => [
      ...prevState,
      { name: eventKey, date: props.date }
    ]);
    console.log("eventKey", eventKey);
  };

  console.log(moodOfTheDay);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="info" id="dropdown-basic"></Dropdown.Toggle>
      <Dropdown.Menu>
        {props.moods.map((mood: MoodType) => (
          <Dropdown.Item
            key={mood.id}
            eventKey={mood.name}
            onSelect={handleSelectedMood}
          >
            {mood.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default MoodDropdown;
