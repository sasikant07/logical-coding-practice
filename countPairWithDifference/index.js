function countPairsWithDifference(arr, K) {
  const set = new Set(arr);
  let count = 0;

  for (let num of arr) {
    if (set.has(num + K)) {
      count++;
    }
    if (set.has(num - K)) {
      count++;
    }
    // To avoid counting the same pair twice, remove current number
    set.delete(num);
  }

  return count;
}

const arr = [3, 2, 1, 5, 4];
const K = 2;
console.log(countPairsWithDifference(arr, K)); // Output: 3

// Time & SPace complexity is O(n)