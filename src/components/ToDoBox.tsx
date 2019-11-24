import React, { useState } from "react";
import TodoList from "./ToDoList";
import TodoForm from "./ToDoForm";

export interface ToDoType {
  id: number;
  task: string;
  complete: boolean;
}

const TodoBox: React.FC = () => {
  const [todos, setTodos] = useState<ToDoType[]>([
    { id: 1, task: "HW 1", complete: false },
    { id: 2, task: "HW 2", complete: false },
    { id: 3, task: "Register for classes", complete: false }
  ]);

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
      <h3>Todo List:</h3>
      <TodoList
        todos={todos}
        removeTodo={handleRemoveTodo}
        toggleComplete={handleToggleComplete}
      />
      <TodoForm handleSubmit={handleSubmit} />
    </>
  );
};

export default TodoBox;
