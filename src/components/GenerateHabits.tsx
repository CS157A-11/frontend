//! TEMPORARILY IN NAVBAR: Will need to later remove the generate page out of the navbar and use sessions instead

import React, { useEffect } from "react";
import GenerateHabitList from "./GenerateHabitList";
import {
  HabitType,
  fetchHabits,
  updateIsActive,
  createHabit
} from "../modules/habitModule";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import GenerateHabitForm from "./GenerateHabitForm";

export interface ToDoType {
  id: number;
  task: string;
  complete: boolean;
}

const GenerateHabits: React.FC = () => {
  const habits: HabitType[] = useSelector(
    (state: RootState) => state.habit.habits
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHabits());
  }, []);

  // UPDATE: toggle is_active
  const handleToggleSelected = (id: number): void => {
    const newHabits = [...habits];
    const targetHabit = newHabits.find(habit => habit.id === id);
    if (targetHabit)
      dispatch(
        updateIsActive({
          habit_id: targetHabit.id,
          is_active: !targetHabit.is_active
        })
      );
  };

  const addHabit = (val: string): void => {
    dispatch(createHabit({ name: val, is_active: false }));
  };

  return (
    <div className="p-5" style={{ backgroundColor: "white" }}>
      <h1>Create your habit tracker</h1>
      <h2>Pick and Create the habits you want to track:</h2>
      <h6>(these will be used to generate the report)</h6>
      <GenerateHabitList items={habits} toggleActive={handleToggleSelected} />
      <GenerateHabitForm handleSubmit={addHabit} />
    </div>
  );
};

export default GenerateHabits;
