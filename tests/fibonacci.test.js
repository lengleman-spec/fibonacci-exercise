import { fibs, fibsRec } from "../src/fibonacci.js";

// Description, then function to check
// For iterative function:
test("iterative fibonacci returns correct array", () => {
  expect(fibs(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});

// For recursive function:
test("recursive fibonacci returns correct array", () => {
  expect(fibsRec(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});

// Testing for edge cases (small input)
test("handles small input", () => {
  expect(fibs(1)).toEqual([0]);
  expect(fibsRec(1)).toEqual([0]);
  expect(fibs(0)).toEqual([]);
  expect(fibsRec(0)).toEqual([]);
});
