import React, { useEffect } from "react";
import { WeeklyView } from "./Habits";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import {
  MoodType,
  MoodOfTheDayType,
  fetchAvailableMoods,
  createMoodOfTheDay,
  fetchMoodOfTheDayList
} from "../modules/moodModule";
import { Dropdown } from "react-bootstrap";

interface Props {
  weeklyView: WeeklyView[];
}

export interface MoodType2 {
  id: number;
  name: string;
  type: string;
  selected: boolean;
}

export interface MoodOfTheDay {
  name: string;
  date: Date;
}

const Moods: React.FC<Props> = props => {
  const dispatch = useDispatch();

  const availableMoods: MoodType[] = useSelector(
    (state: RootState) => state.mood.availableMoods
  );

  const moodOfTheDayList: MoodOfTheDayType[] = useSelector(
    (state: RootState) => state.mood.moodOfTheDayList
  );
  useEffect(() => {
    dispatch(fetchAvailableMoods());
    dispatch(fetchMoodOfTheDayList());
  }, []);

  const isAlreadyCompleted = (date: string): boolean =>
    moodOfTheDayList && moodOfTheDayList.some(moodDay => moodDay.date === date);

  return (
    <tr className="mood">
      <th className="title mr-3" style={{ color: "#e83e8c", width: "323px" }}>
        mood of the day
      </th>
      {props.weeklyView.map(day => (
        <td key={day.date.toString()} className="text-center">
          {isAlreadyCompleted(day.date.toISOString()) ? (
            <div>
              {
                moodOfTheDayList.filter(
                  moodDay => moodDay.date === day.date.toISOString()
                )[0].mood_name
              }{" "}
            </div>
          ) : (
            <Dropdown>
              <Dropdown.Toggle variant="info" id="dropdown-basic">
                mood
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {availableMoods.map((mood: MoodType) => (
                  <Dropdown.Item
                    key={mood.name}
                    eventKey={mood.name}
                    onSelect={(eventKey: string) => {
                      if (!isAlreadyCompleted(day.date.toISOString())) {
                        dispatch(
                          createMoodOfTheDay({
                            mood_name: eventKey,
                            date: day.date
                          })
                        );
                      }
                    }}
                  >
                    {mood.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          )}
        </td>
      ))}
    </tr>
  );
};

export default Moods;
