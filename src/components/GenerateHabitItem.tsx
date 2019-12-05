import React from "react";
import { ListGroup } from "react-bootstrap";
import { Item } from "./GenerateHabitList";

interface Props {
  item: Item;
  toggleActive(id: number): void;
}

const GenerateHabit: React.FC<Props> = props => {
  const toggleComplete = (e: React.MouseEvent) => {
    e.preventDefault();
    props.toggleActive(props.item.id);
  };

  let className = "d-flex justify-content-between align-items-center";
  if (props.item.is_active) {
    className = className + "list-group-item-success";
  }

  return (
    <ListGroup.Item
      as="li"
      className="w-100 d-flex justify-content-between align-items-center"
      variant={props.item.is_active ? "success" : undefined}
      style={{ cursor: "pointer" }}
      onClick={toggleComplete}
    >
      {props.item.name}
    </ListGroup.Item>
  );
};

export default GenerateHabit;
