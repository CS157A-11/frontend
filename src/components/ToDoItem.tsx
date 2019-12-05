import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { TodoType } from "../modules/todoModule";

interface Props {
  todo: TodoType;
  isAlreadyCompleted: boolean;
  removeTodo(todoId: number): void;
  toggleComplete(todoId: number): void;
}

const TodoItem: React.FC<Props> = props => {
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
  if (props.isAlreadyCompleted) {
    className = className + "list-group-item-success";
  }

  return (
    <ListGroup.Item
      className="w-100 d-flex justify-content-between align-items-center"
      variant={props.isAlreadyCompleted ? "success" : undefined}
    >
      {props.todo.name}
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

export default TodoItem;
