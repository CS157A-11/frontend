import React from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';

const state = {
  labels: ['Happy', 'Focused', 'Productive',
           'Motivated', 'Neutral', 'Sad', 'Angry',
            'Tired', 'Lazy'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4',
        '#FFB560',
        '#ffbf00',
        '#00ffbf',
        '#ffe6e6'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F',
      '#FFB560',
      '#ffbf00',
      '#00ffbf',
      '#ffe6e6'
      ],
      data: [65, 59, 80, 81, 50, 80, 12, 30, 30]
    }
  ]
}

export default class DoughnutChart extends React.Component {
  render() {
    return (
      <div>
        <Pie
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Mood per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />

        <Doughnut
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Mood per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}