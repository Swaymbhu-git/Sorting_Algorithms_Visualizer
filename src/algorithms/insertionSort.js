import { animate } from './visualize';

export function insertionSort(arr, update, delay) {
  const a = [...arr.array];
  let actions = [];
  for (let i = 1; i < a.length; i++) {
    let key = a[i];
    let j = i - 1;
    while (j >= 0 && a[j] > key) {
      a[j + 1] = a[j];
      j--;
    }
    a[j + 1] = key;
    actions.push({ array: [...a], highlights: [i, j + 1] });
  }
  animate(actions, update, delay);
}
