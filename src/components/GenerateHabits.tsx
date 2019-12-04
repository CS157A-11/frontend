//! TEMPORARILY IN NAVBAR: Will need to later remove the generate page out of the navbar and use sessions instead

import React, { useState, useEffect } from "react";
import { ButtonToolbar } from "react-bootstrap";
import GenerateHabit from "./GenerateHabit";
import { Button } from "react-bootstrap";
import GenerateList from "./GenerateTodos/GenerateList";
import GenerateForm from "./GenerateTodos/GenerateForm";
import ItemList from "./ItemList";
import {
  HabitType,
  fetchHabits,
  updateIsActive,
  createHabit
} from "../modules/habitModule";
import ItemForm from "./ItemForm";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";

// export interface HabitType {
//   id: number;
//   name: string;
//   selected: boolean;
// }
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

  const [todos, setTodos] = useState<ToDoType[]>([]);

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

  const generateId = () => {
    if (todos.length === 0) {
      return 1;
    } else {
      return Math.max(...todos.map(todo => todo.id)) + 1;
    }
  };

  const handleRemoveTodo = (todoId: number): void => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  };
  const addHabit = (val: string): void => {
    dispatch(createHabit({ name: val, is_active: false }));
  };
  const handleSubmit = (val: string): void => {
    setTodos([...todos, { id: generateId(), task: val, complete: false }]);
  };

  const handleToggleComplete = (todoId: number): void => {
    const newTodos = [...todos];
    const targetTodo = newTodos.find(todo => todo.id === todoId) as ToDoType;
    targetTodo.complete = !targetTodo.complete;
    setTodos(newTodos);
    console.log(todoId);
  };

  return (
    <div className="p-5" style={{ backgroundColor: "white" }}>
      <h1>Create your habit tracker</h1>
      <h2>Pick and Create the habits you want to track:</h2>
      <h6>(these will be used to generate the report)</h6>
      <ItemList
        items={habits}
        toggleActive={handleToggleSelected}
        removeItem={() => console.log("remove")}
      />
      <ItemForm handleSubmit={addHabit} />
      {/* <>
        <h3>Add Todos:</h3>
        <GenerateList
          todos={todos}
          removeTodo={handleRemoveTodo}
          toggleComplete={handleToggleComplete}
        />
        <GenerateForm handleSubmit={handleSubmit} />
      </>
      <>
        <ButtonToolbar>
          <Button variant="outline-success">Generate Habit Tracker</Button>
        </ButtonToolbar>
      </> */}
    </div>
  );
};

export default GenerateHabits;
