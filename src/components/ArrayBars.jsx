import React from 'react';

const ArrayBars = ({ array }) => {
  const bars = array.array || array; // fallback
  const highlights = array.highlights || [];

  return (
    <div className="array-container">
      {bars.map((val, idx) => (
        <div
          key={idx}
          className={`array-bar ${highlights.includes(idx) ? 'highlight' : ''}`}
          style={{ height: `${val}px` }}
        />
      ))}
    </div>
  );
};

export default ArrayBars;
