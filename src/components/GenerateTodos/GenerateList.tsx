import React from "react";
import { ToDoType } from "../GenerateHabits";
import GenerateItem from "./GenerateItem";
import { ListGroup } from "react-bootstrap";

interface Props {
  todos: ToDoType[];
  removeTodo(todoId: number): void;
  toggleComplete(todoId: number): void;
}

const GenerateList: React.FC<Props> = props => {
  return (
    <ListGroup>
      {props.todos.map(todo => (
        <GenerateItem
          key={todo.id}
          todo={todo}
          removeTodo={props.removeTodo}
          toggleComplete={props.toggleComplete}
        />
      ))}
    </ListGroup>
  );
};

export default GenerateList;
