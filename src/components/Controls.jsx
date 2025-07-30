import React from 'react';
import { runSort } from '../algorithms/visualize';

const Controls = ({
  arraySize, setArraySize,
  speed, setSpeed,
  generateArray,
  isSorting, setIsSorting,
  array, setArray,
  setComplexity,
}) => {
  const handleSort = (algo) => {
    if (isSorting) return;
    setIsSorting(true);

    switch (algo) {
      case 'Bubble':
        setComplexity({ best: 'O(n)', avg: 'O(n²)', worst: 'O(n²)', space: 'O(1)' });
        break;
      case 'Selection':
        setComplexity({ best: 'O(n²)', avg: 'O(n²)', worst: 'O(n²)', space: 'O(1)' });
        break;
      case 'Insertion':
        setComplexity({ best: 'O(n)', avg: 'O(n²)', worst: 'O(n²)', space: 'O(1)' });
        break;
      case 'Merge':
        setComplexity({ best: 'O(n log n)', avg: 'O(n log n)', worst: 'O(n log n)', space: 'O(n)' });
        break;
      case 'Heap':
        setComplexity({ best: 'O(n log n)', avg: 'O(n log n)', worst: 'O(n log n)', space: 'O(1)' });
        break;
      default:
        break;
    }

    runSort(algo, array, setArray, speed, () => setIsSorting(false));
  };

  return (
    <div className="controls-container">
      <nav className="header-nav">
        <h1 className="header">Sorting Algorithm Visualizer</h1>
        <div className="algorithms">
          {['Bubble', 'Selection', 'Insertion', 'Merge', 'Heap'].map(name => (
            <button
              key={name}
              onClick={() => handleSort(name)}
              disabled={isSorting}
              className={isSorting ? 'disabled-sort-btn' : ''}
            >
              {name}
            </button>
          ))}
        </div>
      </nav>

     

      <div className="side-panel">
        <div className="sliders">
          <label>Size:</label>
          <input type="range" min="5" max="50" value={arraySize} onChange={e => setArraySize(+e.target.value)} disabled={isSorting} />
          <label>Speed:</label>
          <input type="range" min="1" max="8" value={speed} onChange={e => setSpeed(+e.target.value)} disabled={isSorting} />
        </div>
        <button className="generate-btn" onClick={generateArray} disabled={isSorting}>Generate New Array</button>
      </div>
    </div>
  );
};

export default Controls;