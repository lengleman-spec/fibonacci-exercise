function merge(left, right) {
  const result = [];
  let i = 0; // Left
  let j = 0; // Right

  while (i < left.length && j < right.length) {
    // If left element is smaller than right, push value into the result array
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}
