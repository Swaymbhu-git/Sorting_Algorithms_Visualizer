import React from 'react';

const ComplexityInfo = ({ complexity }) => {
  return (
    <div className="info-panel">
      <div className="time-complexity">
        <h3>Time Complexity</h3>
        <p>Best: {complexity?.best}</p>
        <p>Average: {complexity?.avg}</p>
        <p>Worst: {complexity?.worst}</p>
      </div>
      <div className="space-complexity">
        <h3>Space Complexity</h3>
        <p>{complexity?.space}</p>
      </div>
    </div>
  );
};

export default ComplexityInfo;
