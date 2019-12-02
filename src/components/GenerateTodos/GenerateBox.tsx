import React, { useState } from "react";
import GenerateList from "./GenerateList";
import GenerateForm from "./GenerateForm";

export interface ToDoType {
  id: number;
  task: string;
  complete: boolean;
}

const GenerateBox: React.FC = () => {
  const [todos, setTodos] = useState<ToDoType[]>([]);

  const generateId = () => {
    return Math.max(...todos.map(todo => todo.id)) + 1;
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
  };

  return (
    <>
      <h3>Add Todos:</h3>
      <GenerateList
        todos={todos}
        removeTodo={handleRemoveTodo}
        toggleComplete={handleToggleComplete}
      />
      <GenerateForm handleSubmit={handleSubmit} />
    </>
  );
};

export default GenerateBox;
