//! TEMPORARILY IN NAVBAR: Will need to later remove the generate page out of the navbar and use sessions instead

import React, { useState } from "react";
import { ButtonToolbar } from "react-bootstrap";
import GenerateHabit from "./GenerateHabit";
import { Button } from "react-bootstrap";
import GenerateList from "./GenerateTodos/GenerateList";
import GenerateForm from "./GenerateTodos/GenerateForm";

export interface HabitType {
  id: number;
  name: string;
  selected: boolean;
}
export interface ToDoType {
  id: number;
  task: string;
  complete: boolean;
}

const GenerateHabits: React.FC = () => {
  const [habits, setHabits] = useState<HabitType[]>([
    { id: 1, name: "sleep early", selected: false },
    { id: 2, name: "wake up early", selected: false },
    { id: 3, name: "exercise", selected: false },
    { id: 4, name: "meditate", selected: false },
    { id: 5, name: "read before class", selected: false },
    { id: 6, name: "clean", selected: false },
    { id: 7, name: "write", selected: false },
    { id: 8, name: "take vitamins", selected: false },
    { id: 9, name: "no caffeine", selected: false },
    { id: 10, name: "hydrate", selected: false }
  ]);

  const [todos, setTodos] = useState<ToDoType[]>([]);

  const handleToggleSelected = (id: number): void => {
    const newHabits = [...habits];
    const targetHabit = newHabits.find(habit => habit.id === id) as HabitType;
    targetHabit.selected = !targetHabit.selected;
    setHabits(newHabits);
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
      <h2>Pick which habits you want to track:</h2>
      <h6>(these will be used to generate the report)</h6>
      {habits.map((habit: HabitType) => (
        <GenerateHabit
          key={habit.id}
          habit={habit}
          toggleSelected={handleToggleSelected}
        />
      ))}
      <h3>Add your own customized habits:</h3>
      <>
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
      </>
    </div>
  );
};

export default GenerateHabits;
