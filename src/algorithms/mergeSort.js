import { animate } from './visualize';

export function mergeSort(arr, update, delay) {
  const a = [...arr.array];
  const actions = [];

  function merge(start, mid, end) {
    let left = a.slice(start, mid + 1);
    let right = a.slice(mid + 1, end + 1);
    let i = 0, j = 0, k = start;
    while (i < left.length && j < right.length) {
      a[k++] = left[i] < right[j] ? left[i++] : right[j++];
    }
    while (i < left.length) a[k++] = left[i++];
    while (j < right.length) a[k++] = right[j++];
    actions.push({ array: [...a], highlights: [start, end] });
  }

  function sort(start, end) {
    if (start < end) {
      const mid = Math.floor((start + end) / 2);
      sort(start, mid);
      sort(mid + 1, end);
      merge(start, mid, end);
    }
  }

  sort(0, a.length - 1);
  animate(actions, update, delay);
}
