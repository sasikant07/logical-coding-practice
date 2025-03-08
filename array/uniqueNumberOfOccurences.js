function uniqueOccurrences(arr) {
    let freqMap = new Map();

    // Count occurrences of each element
    for (let num of arr) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    let freqSet = new Set(freqMap.values());

    // If all frequencies are unique, the size of freqSet should match freqMap size
    return freqMap.size === freqSet.size;
}

// Example usage:
console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])); // true
console.log(uniqueOccurrences([1, 2, 3]));          // false
console.log(uniqueOccurrences([4, 4, 4, 4]));       // true


// Time & Space Complexity is O(n)