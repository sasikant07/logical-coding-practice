//=================================Using SET==================================================
function countDistinctElements(arr) {
    return new Set(arr).size;
}

// Example usage
console.log(countDistinctElements([1, 2, 2, 3, 4, 4, 5])); // Output: 5
console.log(countDistinctElements([7, 7, 7, 7])); // Output: 1
console.log(countDistinctElements([])); // Output: 0
console.log(countDistinctElements([1, 2, 3, 4, 5])); // Output: 5

// Time Complexity: O(n) (since inserting into a Set is O(1), and we do this for n elements).
// Space Complexity: O(n) (since the Set stores unique elements separately).
//====================================Using Hashmap===========================================
function countDistinctElementsHashmap(arr) {
    let freqMap = {};
    for (let num of arr) {
        freqMap[num] = true; // Only store unique values
    }
    return Object.keys(freqMap).length;
}

// Example usage
console.log(countDistinctElementsHashmap([1, 2, 2, 3, 4, 4, 5])); // Output: 5
console.log(countDistinctElementsHashmap([7, 7, 7, 7])); // Output: 1
console.log(countDistinctElementsHashmap([])); // Output: 0
console.log(countDistinctElementsHashmap([1, 2, 3, 4, 5])); // Output: 5

// Time Complexity: O(n) (we iterate through the array once).
// Space Complexity: O(n) (hash map stores unique elements).


//================================Using Sorting==========================================
function countDistinctElementsSort(arr) {
    if (arr.length === 0) return 0;

    arr.sort((a, b) => a - b);
    let count = 1; // First element is always unique

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            count++;
        }
    }
    return count;
}

// Example usage
console.log(countDistinctElementsSort([1, 2, 2, 3, 4, 4, 5])); // Output: 5
console.log(countDistinctElementsSort([7, 7, 7, 7])); // Output: 1
console.log(countDistinctElementsSort([])); // Output: 0
console.log(countDistinctElementsSort([1, 2, 3, 4, 5])); // Output: 5


// Time Complexity: O(n log n) (due to sorting).
// Space Complexity: O(1) if sorting is done in place.