import React from 'react';
import Status from './Status';
import '../App.css';

const ProgressBar = props => {
  return (
    <div className="progress-bar">
      <Status percentage={props.percentage} />
    </div>
  );
};

export default ProgressBar;
