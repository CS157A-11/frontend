import React from "react";
import { ToDoType } from "../GenerateHabits";
import { Button, ListGroup } from "react-bootstrap";

interface Props {
  todo: ToDoType;
  removeTodo(todoId: number): void;
  toggleComplete(todoId: number): void;
}

const GenerateItem: React.FC<Props> = props => {
  const removeNode = (e: React.MouseEvent) => {
    e.preventDefault();
    props.removeTodo(props.todo.id);
    return;
  };

  const toggleComplete = (e: React.MouseEvent) => {
    e.preventDefault();
    props.toggleComplete(props.todo.id);
  };

  let className = "d-flex justify-content-between align-items-center";
  if (props.todo.complete) {
    className = className + "list-group-item-success";
  }

  return (
    <ListGroup.Item
      className="w-100 d-flex justify-content-between align-items-center"
      variant={props.todo.complete ? "success" : undefined}
    >
      {props.todo.task}
      <div className="ml-4" role="group">
        <Button
          type="button"
          className="btn btn-success mr-2"
          size="sm"
          onClick={toggleComplete}
          style={{ borderRadius: "20px" }}
        >
          &#x2713;
        </Button>
        <Button
          type="button"
          className="btn btn-sm btn-danger"
          size="sm"
          onClick={removeNode}
          style={{ borderRadius: "20px" }}
        >
          &#xff38;
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default GenerateItem;
