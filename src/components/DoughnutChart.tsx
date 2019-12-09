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
import colors from "../utils/color";

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
        backgroundColor: colors,

        hoverBackgroundColor: colors,
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
