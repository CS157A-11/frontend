import React, { useEffect } from "react";
import { Pie, Doughnut } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import {
  MoodType,
  MoodOfTheDayType,
  fetchAvailableMoods,
  fetchMoodOfTheDayList
} from "../modules/moodModule";
import { RootState } from "../modules";

const DoughnutChart: React.FC = () => {
  const dispatch = useDispatch();

  const availableMoods: MoodType[] = useSelector(
    (state: RootState) => state.mood.availableMoods
  );

  const moodOfTheDayList: MoodOfTheDayType[] = useSelector(
    (state: RootState) => state.mood.moodOfTheDayList
  );
  useEffect(() => {
    dispatch(fetchAvailableMoods());
    dispatch(fetchMoodOfTheDayList());
  }, []);
  const labels = availableMoods.map(mood => mood.name);

  const dataSet = {
    labels,
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: [
          "#B21F00",
          "#C9DE00",
          "#2FDE00",
          "#00A6B4",
          "#6800B4",
          "#FFB560",
          "#ffbf00",
          "#00ffbf",
          "#ffe6e6"
        ],

        hoverBackgroundColor: [
          "#501800",
          "#4B5000",
          "#175000",
          "#003350",
          "#35014F",
          "#FFB560",
          "#ffbf00",
          "#00ffbf",
          "#ffe6e6"
        ],
        data: labels.map(
          label =>
            moodOfTheDayList.filter(mood => mood.mood_name === label).length
        )
      }
    ]
  };

  return (
    <div>
      <Pie
        data={dataSet}
        options={{
          title: {
            display: true,
            text: "Average Mood",
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

export default DoughnutChart;
