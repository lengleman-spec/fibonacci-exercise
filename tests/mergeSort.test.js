import { merge } from "../src/merge";
import { mergeSort } from "../src/mergeSort.js";

// Testing empty array
test("mergeSort works on empty array", () => {
  expect(mergeSort([])).toEqual([]);
});

test("mergeSort works on single-element array", () => {
  expect(mergeSort([73])).toEqual([73]);
});

test("mergeSort works on already sorted array", () => {
  expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});

test("mergeSort works on unsorted array", () => {
  expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([
    0, 1, 1, 2, 3, 5, 8, 13,
  ]);

  expect(mergeSort([105, 79, 100, 110])).toEqual([79, 100, 105, 110]);
});

test("mergeSort works with duplicates and negatives", () => {
  expect(mergeSort([3, -1, 2, -1, 0])).toEqual([-1, -1, 0, 2, 3]);
});
