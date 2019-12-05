import React from 'react';
import DoughnutChart from './DoughnutChart';
import BarChart from './BarChart';


export default class Report extends React.Component {
    render() {
        return (
            <div>
                <DoughnutChart />, 
                <BarChart />
            </div>
        );
    }
}