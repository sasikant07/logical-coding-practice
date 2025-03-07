function majorityElement(nums) {
    let candidate = null;
    let count = 0;

    // Step 1: Find the candidate
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    // Step 2: Verify the candidate (not needed if we assume a majority element always exists)
    let freq = 0;
    for (let num of nums) {
        if (num === candidate) freq++;
    }

    return freq > Math.floor(nums.length / 2) ? candidate : -1;
}

// Example usage
console.log(majorityElement([3, 2, 3])); // Output: 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2
console.log(majorityElement([1, 1, 1, 2, 3, 1, 1])); // Output: 1

// Time Complexity: O(n) (single pass to find the candidate, another pass to verify).
// Space Complexity: O(1) (only a few integer variables used)

//===================================Using HashMap===================================================

function majorityElementHashMap(nums) {
    let countMap = {};
    let majorityCount = Math.floor(nums.length / 2);

    for (let num of nums) {
        countMap[num] = (countMap[num] || 0) + 1;
        if (countMap[num] > majorityCount) {
            return num;
        }
    }
    return -1;
}

// Example usage
console.log(majorityElementHashMap([3, 2, 3])); // Output: 3
console.log(majorityElementHashMap([2, 2, 1, 1, 1, 2, 2])); // Output: 2

// Time Complexity: O(n) (single pass through the array).
// Space Complexity: O(n) (hash map stores counts for n elements).

//======================Using Sorting================================
function majorityElementSorting(nums) {
    nums.sort((a, b) => a - b);
    return nums[Math.floor(nums.length / 2)];
}

// Example usage
console.log(majorityElementSorting([3, 2, 3])); // Output: 3
console.log(majorityElementSorting([2, 2, 1, 1, 1, 2, 2])); // Output: 2

// Time Complexity: O(n log n) (due to sorting).
// Space Complexity: O(1) if sorting is done in-place.

