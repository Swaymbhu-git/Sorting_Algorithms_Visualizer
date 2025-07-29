import React, { useState, useEffect } from 'react';
import Controls from './components/Controls';
import ArrayBars from './components/ArrayBars';
import ComplexityInfo from './components/ComplexityInfo';
import './index.css';

const App = () => {
  const [array, setArray] = useState([]);
  const [arraySize, setArraySize] = useState(80);
  const [speed, setSpeed] = useState(4);
  const [isSorting, setIsSorting] = useState(false);
  const [complexity, setComplexity] = useState({ best: '', avg: '', worst: '', space: '' });

  const generateArray = () => {
    const newArr = Array.from({ length: arraySize }, () => Math.floor(Math.random() * 300) + 10);
    setArray({ array: newArr, highlights: [] });
  };

  useEffect(() => {
    generateArray();
  }, [arraySize]);

  return (
    <div>
      <Controls
        arraySize={arraySize}
        setArraySize={setArraySize}
        speed={speed}
        setSpeed={setSpeed}
        generateArray={generateArray}
        isSorting={isSorting}
        setIsSorting={setIsSorting}
        array={array}
        setArray={setArray}
        setComplexity={setComplexity}
        complexity={complexity}
      />
      <div className="main-section">
        <ComplexityInfo complexity={complexity} />
        <ArrayBars array={array} />
      </div>
    </div>
  );
};

export default App;
