export function fibs(n) {
  // Handles if n = 0 or a negative number
  if (n <= 0) return [];

  // Result will store the sequence
  const result = [0];

  // If user only wants 1 number, its always 0
  if (n === 1) return result;

  // Fibonacci always starts with [0,1], so we push 1 on result (which is zero)
  result.push(1);

  // Start from index 2 because we already handled index 0 and 1
  for (let i = 2; i < n; i++) {
    // Each number is the sum of the previous two:
    const next = result[i - 1] + result[i - 2];
    // Add new fib number to array
    result.push(next);
  }

  return result;
}

// Recursive function
export function fibsRec(n) {
  if (n <= 0) return []; // No numbers
  if (n === 1) return [0]; // First number
  if (n === 2) return [0, 1]; // Two numbers

  const prev = fibsRec(n - 1);

  // prev[prev - 1] = the last number in the array
  // prev[prev - 2] = the second to last number in the array
  const next = prev[prev.length - 1] + prev[prev.length - 2];
  return [...prev, next];
}
