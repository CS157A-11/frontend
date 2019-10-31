import React from "react";
import { ToDoType } from "./ToDoBox";
import TodoItem from "./ToDoItem";
import { ListGroup } from "react-bootstrap";

interface Props {
  todos: ToDoType[];
  removeTodo(todoId: number): void;
  toggleComplete(todoId: number): void;
}

const TodoList: React.FC<Props> = props => {
  return (
    <ListGroup>
      {props.todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={props.removeTodo}
          toggleComplete={props.toggleComplete}
        />
      ))}
    </ListGroup>
  );
};

export default TodoList;
