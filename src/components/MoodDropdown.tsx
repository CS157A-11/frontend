import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { MoodType, MoodOfTheDay } from "./Moods";
import "bootstrap/dist/css/bootstrap.min.css";

interface Props {
  date: Date;
  moods: MoodType[];
  onHandleSelectedMood: (MoodOfTheDay: MoodOfTheDay) => void;
}

const MoodDropdown: React.FC<Props> = props => {
  //   console.log(moodOfTheDay);
  const onSelect = (eventKey: any) => {
    const newMoodOfTheDay = { name: eventKey, date: props.date };
    console.log(newMoodOfTheDay);
    console.log("eventKey", eventKey);
    props.onHandleSelectedMood(newMoodOfTheDay);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="info" id="dropdown-basic"></Dropdown.Toggle>
      <Dropdown.Menu>
        {props.moods.map((mood: MoodType) => (
          <Dropdown.Item key={mood.id} eventKey={mood.name} onSelect={onSelect}>
            {mood.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default MoodDropdown;
