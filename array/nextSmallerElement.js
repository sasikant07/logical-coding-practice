function nextSmallerElement(arr) {
    let n = arr.length;
    let result = new Array(n).fill(-1); // Initialize result array with -1
    let stack = []; // Monotonic stack

    // Traverse from right to left
    for (let i = n - 1; i >= 0; i--) {
        // Pop elements from stack that are greater or equal to arr[i]
        while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
            stack.pop();
        }

        // If stack is not empty, the top is the next smaller element
        if (stack.length > 0) {
            result[i] = stack[stack.length - 1];
        }

        // Push current element onto stack
        stack.push(arr[i]);
    }

    return result;
}

// Example Usage:
console.log(nextSmallerElement([4, 8, 5, 2, 25])); // [2, 5, 2, -1, -1]
console.log(nextSmallerElement([13, 7, 6, 12]));   // [7, 6, -1, -1]
console.log(nextSmallerElement([1, 2, 3, 4]));     // [-1, -1, -1, -1]

// Time & space complexity: O(n)