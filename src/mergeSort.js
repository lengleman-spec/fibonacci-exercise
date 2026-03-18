import { merge } from "./merge.js";

export function mergeSort(arr) {
  // Base case: if array has 0 or 1 element, it's already sorted
  if (arr.length <= 1) return arr;

  // Use Math.floor() so that if the array is odd, the left half is <= the right half
  const mid = Math.floor(arr.length / 2);
  // Creates a new array from index 0 and up
  const left = arr.slice(0, mid);
  // Creates a new array from mid to end of array
  const right = arr.slice(mid);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}
