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
