import React from "react";
import { Row, Col } from "react-bootstrap";
import TodoBox from "./ToDoBox";
import Habits from "./Habits";

const App: React.FC = () => {
  return (
    <div className="p-5">
      <h1>hey Test</h1>
      <Habits />
      <TodoBox />
    </div>
  );
};

export default App;
