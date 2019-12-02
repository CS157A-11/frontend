import React, { useState } from "react";
import { WeeklyView } from "./Habits";
import MoodDropdown from "./MoodDropdown";

interface Props {
  weeklyView: WeeklyView[];
}

export interface MoodType {
  id: number;
  name: string;
  type: string;
  selected: boolean;
}

const Moods: React.FC<Props> = props => {
  const [moods, setMood] = useState<MoodType[]>([
    { id: 1, name: "happy", type: "positive", selected: false },
    { id: 2, name: "focused", type: "positive", selected: false },
    { id: 3, name: "productive", type: "positive", selected: false },
    { id: 4, name: "motivated", type: "positive", selected: false },
    { id: 5, name: "neutral", type: "neutral", selected: false },
    { id: 6, name: "sad", type: "negative", selected: false },
    { id: 7, name: "angry", type: "negative", selected: false },
    { id: 8, name: "tired", type: "negative", selected: false },
    { id: 9, name: "lazy", type: "negative", selected: false }
  ]);

  return (
    <tr className="mood">
      <td className="title" style={{ color: "#e83e8c" }}>
        mood of the day
      </td>
      {props.weeklyView.map(day => (
        <td key={day.date.toString()} className="text-center">
          <MoodDropdown date={day.date} moods={moods} />
        </td>
      ))}
    </tr>
  );
};

export default Moods;
