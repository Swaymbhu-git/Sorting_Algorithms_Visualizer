import { bubbleSort } from './bubbleSort';
import { selectionSort } from './selectionSort';
import { insertionSort } from './insertionSort';
import { mergeSort } from './mergeSort';
import { heapSort } from './heapSort';

export function runSort(type, arr, setArr, speed, done) {
  const update = (newStep) => {
    if (Array.isArray(newStep)) {
      setArr({ array: newStep, highlights: [] }); // fallback
    } else {
      setArr(newStep);
    }
  };
  const delay = getDelay(speed);

  switch (type) {
    case 'Bubble':
      bubbleSort(arr, update, delay);
      break;
    case 'Selection':
      selectionSort(arr, update, delay);
      break;
    case 'Insertion':
      insertionSort(arr, update, delay);
      break;
    case 'Merge':
      mergeSort(arr, update, delay);
      break;
    case 'Heap':
      heapSort(arr, update, delay);
      break;
    default:
      done();
      break;
  }
}

function getDelay(speed) {
  switch (speed) {
    case 1: return 1000;
    case 2: return 800;
    case 3: return 400;
    case 4: return 200;
    case 5: return 100;
    case 6: return 25;
    case 7: return 10;
    case 8: return 5;
    default: return 2;
  }
}

export function animate(actions, update, delay, done) {
  actions.forEach((step, i) => {
    setTimeout(() => update(step), i * delay);
  });
  setTimeout(done, actions.length * delay + 100);

}