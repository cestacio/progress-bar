import React from 'react';
import '../App.css';

const Status = props => {
  return <div className="status" style={{ width: `${props.percentage}%` }} />;
};

export default Status;
