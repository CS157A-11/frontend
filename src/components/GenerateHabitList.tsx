import React from "react";
import { ListGroup } from "react-bootstrap";
import Item from "./GenerateHabitItem";

export interface Item {
  name: string;
  id: number;
  is_active: boolean;
}
interface Props {
  items: Item[];
  toggleActive(id: number): void;
}

const GenerateHabitList: React.FC<Props> = props => {
  return (
    <ListGroup>
      {props.items.map(item => (
        <Item key={item.id} item={item} toggleActive={props.toggleActive} />
      ))}
    </ListGroup>
  );
};

export default GenerateHabitList;
