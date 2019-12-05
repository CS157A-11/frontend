import React from "react";
import TodoItem from "./ToDoItem";
import { ListGroup } from "react-bootstrap";
import { TodoType, CompletedTodoType } from "../modules/todoModule";

interface Props {
  todos: TodoType[];
  completedTodos: CompletedTodoType[];
  removeTodo(todoId: number): void;
  toggleComplete(todoId: number): void;
}

const TodoList: React.FC<Props> = props => {
  const isAlreadyCompleted = (id: number) =>
    props.completedTodos &&
    props.completedTodos.some(cTodo => cTodo.todo_id === id);
  return (
    <ListGroup>
      {props.todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          isAlreadyCompleted={isAlreadyCompleted(todo.id)}
          removeTodo={props.removeTodo}
          toggleComplete={props.toggleComplete}
        />
      ))}
    </ListGroup>
  );
};

export default TodoList;
