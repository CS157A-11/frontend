import React from "react";
import { ListGroup } from "react-bootstrap";
import Item from "./Item";

export interface Item {
  name: string;
  id: number;
  is_active: boolean;
}
interface Props {
  items: Item[];
  removeItem(id: number): void;
  toggleActive(id: number): void;
}

const ItemList: React.FC<Props> = props => {
  return (
    <ListGroup>
      {props.items.map(item => (
        <Item
          key={item.id}
          item={item}
          removeItem={props.removeItem}
          toggleActive={props.toggleActive}
        />
      ))}
    </ListGroup>
  );
};

export default ItemList;
