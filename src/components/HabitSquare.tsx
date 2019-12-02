import React from 'react';
import { Button } from 'react-bootstrap';
import { HabitType } from './Habits';

/* Components */
interface Props {
  habit: HabitType; 
  date: Date;
  toggleComplete(todoId: number, date: Date): void;
  isCompleted(id: number, date: Date): boolean;
}

const HabitSquare: React.FC<Props> = props => {
  const toggleComplete = (e: React.MouseEvent) => {
    e.preventDefault();
    props.toggleComplete(props.habit.id, props.date);
  };
  
  return (   
      <Button
        variant={props.isCompleted(props.habit.id, props.date) ? "primary" : "outline-primary"}
        onClick={toggleComplete}  
        size="lg"   
      >
      </Button>
  );
}
 
export default HabitSquare;