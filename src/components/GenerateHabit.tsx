//! Will need to later remove the generate page out of the navbar

import React from 'react';
import { HabitType } from "./GenerateHabits";
import { ListGroup, ListGroupItem } from 'react-bootstrap'

interface Props {
    habit: HabitType;
    toggleSelected(todoId: number): void;
}

const GenerateHabit: React.FC<Props> = props => {
    const toggleSelected = (e: React.MouseEvent) => {
        e.preventDefault();
        props.toggleSelected(props.habit.id);
    };

      return (
          <div>
            <ListGroup>
                <ListGroup.Item action
                    onClick={toggleSelected}
                    variant={props.habit.selected ? "primary" : "light"}
                > 
                    {props.habit.name}
                </ListGroup.Item>
            </ListGroup>
          </div>
      );
  } 

  export default GenerateHabit;