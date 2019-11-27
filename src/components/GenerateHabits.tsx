//! TEMPORARILY IN NAVBAR: Will need to later remove the generate page out of the navbar and use sessions instead

import React, { useState } from 'react';
import { Form, ListGroup, ButtonToolbar, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import GenerateHabit from './GenerateHabit';

export interface HabitType {
    id: number;
    name: string;
    selected: boolean;
  }

const GenerateHabits: React.FC = () => {
    const [habits, setHabits] = useState<HabitType[]>([
        { id: 1, name: "sleep early", selected: false},
        { id: 2, name: "wake up early", selected: false},
        { id: 3, name: "exercise", selected: false},
        { id: 4, name: "meditate", selected: false},
        { id: 5, name: "read before class", selected: false},
        { id: 6, name: "clean", selected: false},
        { id: 7, name: "write", selected: false},
        { id: 8, name: "take vitamins", selected: false},
        { id: 9, name: "no caffeine", selected: false},
        { id: 10, name: "hydrate", selected: false},
    ]);

    const handleToggleSelected = (id: number): void => {
        const newHabits = [...habits];
        const targetHabit = newHabits.find(habit => habit.id === id) as HabitType;
        targetHabit.selected = !targetHabit.selected;
        setHabits(newHabits);
    };

    return (
        <div className="p-5" style={{backgroundColor: "white"}}>
            <h1>Create your habit tracker</h1>
            <h2>Pick which habits you want to track:</h2>
            <h6>(these will be used to generate the report)</h6>
            {habits.map((habit: HabitType) => (
                <GenerateHabit key={habit.id} habit={habit} toggleSelected={handleToggleSelected} />   
            ))}
            <h3>Add your own customized habits:</h3>
            <h2>Add Todos:</h2>
        </div>
    );
};

export default GenerateHabits;
