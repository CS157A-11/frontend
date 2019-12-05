import React from "react";
import DoughnutChart from "./DoughnutChart";
import BarChart from "./BarChart";

const Report: React.FC = () => {
  return (
    <div className="m-3 p-3">
      <DoughnutChart />
      <BarChart />
    </div>
  );
};

export default Report;
