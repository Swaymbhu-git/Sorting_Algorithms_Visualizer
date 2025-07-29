import { animate } from './visualize';

export function selectionSort(arr, update, delay) {
  const a = [...arr.array];
  let n = a.length;
  let actions = [];
  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (a[j] < a[min]) min = j;
    }
    [a[i], a[min]] = [a[min], a[i]];
    actions.push({ array: [...a], highlights: [i, min] });
  }
  animate(actions, update, delay);
}
