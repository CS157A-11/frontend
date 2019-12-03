import React from "react";
//import { Row, Col } from "react-bootstrap";
import Header from "./Header";
import Routes from "../../Routes";

// let today = new Date();
// let monthNumber = today.getMonth();
// let monthNames = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December"
// ];
// let monthName = monthNames[monthNumber];
// let year = today.getFullYear();

const HabitTracker: React.FC = () => {
  return (
    <div>
      <Header />
      <Routes />
    </div>
  );
};

export default HabitTracker;
