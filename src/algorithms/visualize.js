import { bubbleSort } from './bubbleSort';
import { selectionSort } from './selectionSort';
import { insertionSort } from './insertionSort';
import { mergeSort } from './mergeSort';
import { heapSort } from './heapSort';

export function runSort(type, arr, setArr, speed, done, setComplexity) {
  const update = (newStep) => {
    if (Array.isArray(newStep)) {
      setArr({ array: newStep, highlights: [] }); // fallback
    } else {
      setArr(newStep);
    }
  };
  const delay = getDelay(speed);

  const wrappedDone = () => {
    setTimeout(() => {
      done();
    }, delay * arr.array.length + 100);
  };

  switch (type) {
    case 'Bubble':
      bubbleSort(arr, update, delay, wrappedDone);
      break;
    case 'Selection':
      selectionSort(arr, update, delay, wrappedDone);
      break;
    case 'Insertion':
      insertionSort(arr, update, delay, wrappedDone);
      break;
    case 'Merge':
      mergeSort(arr, update, delay, wrappedDone);
      break;
    case 'Heap':
      heapSort(arr, update, delay, wrappedDone);
      break;
    default:
      done();
      break;
  }
}

function getDelay(speed) {
  switch (speed) {
    case 1: return 5;
    case 2: return 25;
    case 3: return 100;
    case 4: return 250;
    default: return 250;
  }
}

export function animate(actions, update, delay, done) {
  actions.forEach((step, i) => {
    setTimeout(() => update(step), i * delay);
  });
  setTimeout(done, actions.length * delay + 100);
}