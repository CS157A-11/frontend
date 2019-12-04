import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { Item } from "./ItemList";

interface Props {
  item: Item;
  removeItem(id: number): void;
  toggleActive(id: number): void;
}

const Item: React.FC<Props> = props => {
  // const removeNode = (e: React.MouseEvent) => {
  //   e.preventDefault();
  //   props.removeItem(props.item.id);
  //   return;
  // };

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
      {/* <div className="ml-4" role="group">
        <Button
          type="button"
          className="btn btn-sm btn-danger"
          size="sm"
          onClick={() => console.log("aaa")}
          style={{ borderRadius: "20px" }}
        >
          &#xff38;
        </Button>
      </div> */}
    </ListGroup.Item>
  );
};

export default Item;
