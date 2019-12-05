import React, { useEffect } from "react";
import TodoList from "./ToDoList";
import TodoForm from "./ToDoForm";
import {
  TodoType,
  CompletedTodoType,
  fetchTodos,
  fetchCompletedTodos,
  updateIsActive,
  createTodo,
  createCompletedTodos
} from "../modules/todoModule";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";

export interface ToDoType2 {
  id: number;
  task: string;
  complete: boolean;
}

const TodoBox: React.FC = () => {
  const todos: TodoType[] = useSelector((state: RootState) => state.todo.todos);
  const completedTodos: CompletedTodoType[] = useSelector(
    (state: RootState) => state.todo.completedTodos
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
    dispatch(fetchCompletedTodos());
  }, []);

  const handleRemoveTodo = (todoId: number): void => {
    const targetTodo = todos.find(todo => todo.id === todoId);
    if (targetTodo)
      dispatch(
        updateIsActive({
          todo_id: targetTodo.id,
          is_active: false
        })
      );
  };
  const handleSubmit = (val: string): void => {
    dispatch(createTodo({ name: val, is_active: true }));
  };
  const handleToggleComplete = (todoId: number): void => {
    const targetTodo = todos.find(todo => todo.id === todoId);
    if (
      targetTodo &&
      completedTodos.every(cTodo => cTodo.todo_id !== targetTodo.id)
    ) {
      dispatch(
        createCompletedTodos({
          todo_id: targetTodo.id,
          completed_date: new Date()
        })
      );
    }
  };

  return (
    <>
      <h3>Todo List:</h3>
      <TodoList
        todos={todos.filter(todo => todo.is_active)}
        completedTodos={completedTodos}
        removeTodo={handleRemoveTodo}
        toggleComplete={handleToggleComplete}
      />
      <TodoForm handleSubmit={handleSubmit} />
    </>
  );
};

export default TodoBox;
