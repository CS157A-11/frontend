import React from 'react';

/* Components */
interface Props {
  weekHeading: string; 
}

const WeeklyView: React.FC<Props> = props => {
    return (
        <div> 
         {props.weekHeading}
        </div> 
    ); 
}
// const WeeklyView: React.FC<Props> = props => {
//   return (   
//      {props.weekHeading}
//   );
// }

export default WeeklyView;