function firstMissingPositive(nums) {
    let n = nums.length;

    // Place each number in its correct position if possible
    for (let i = 0; i < n; i++) {
        while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
            // Swap nums[i] with its correct position nums[nums[i] - 1]
            let correctIndex = nums[i] - 1;
            [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
        }
    }

    // Find the first missing positive
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }

    // If all numbers are in place, return n + 1
    return n + 1;
}

// Example usage
console.log(firstMissingPositive([3, 4, -1, 1])); // Output: 2
console.log(firstMissingPositive([1, 2, 0]));    // Output: 3
console.log(firstMissingPositive([7, 8, 9, 11, 12])); // Output: 1
console.log(firstMissingPositive([2, 1])); // Output: 3
console.log(firstMissingPositive([1, 1, 1])); // Output: 2
