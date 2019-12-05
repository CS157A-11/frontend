import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { getIncompleteHabitsForNegativeMoods } from "../usecases/report";

interface DATA {
  date: string;
  incompleteHabits: number;
  negativeMoods: string;
}
const BarChart: React.FC = () => {
  const [data, setData] = useState<DATA[]>([]);
  useEffect(() => {
    getIncompleteHabitsForNegativeMoods().then(res => setData(res));
  }, []);
  const state = {
    labels: data.map(d => d.negativeMoods),
    datasets: [
      {
        label: "Incomplete Habits",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 1,
        data: [...data.map(d => d.incompleteHabits), 0]
      }
    ]
  };

  return (
    <div>
      <Bar
        data={state}
        options={{
          title: {
            display: true,
            text: "Average Number of Incomplete Habits for Negative Moods",
            fontSize: 20
          },
          legend: {
            display: true,
            position: "right"
          }
        }}
      />
    </div>
  );
};

export default BarChart;
