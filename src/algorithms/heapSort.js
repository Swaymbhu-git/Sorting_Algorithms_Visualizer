import { animate } from './visualize';

export function heapSort(arr, update, delay) {
  const a = [...arr.array];
  const actions = [];

  function heapify(n, i) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    if (l < n && a[l] > a[largest]) largest = l;
    if (r < n && a[r] > a[largest]) largest = r;

    if (largest !== i) {
      [a[i], a[largest]] = [a[largest], a[i]];
      actions.push({ array: [...a], highlights: [i, largest] });
      heapify(n, largest);
    }
  }

  for (let i = Math.floor(a.length / 2) - 1; i >= 0; i--) heapify(a.length, i);
  for (let i = a.length - 1; i > 0; i--) {
    [a[0], a[i]] = [a[i], a[0]];
    actions.push({ array: [...a], highlights: [0, i] });
    heapify(i, 0);
  }

  animate(actions, update, delay);
}
