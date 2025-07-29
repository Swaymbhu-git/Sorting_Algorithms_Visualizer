import { animate } from './visualize';

export function bubbleSort(arr, update, delay, done) {
  const a = [...arr.array];
  let n = a.length;
  let actions = [];
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        actions.push({ array: [...a], highlights: [j, j + 1] });
      }
    }
  }
  animate(actions, update, delay);
}
