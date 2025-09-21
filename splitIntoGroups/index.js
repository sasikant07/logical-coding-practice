// Implement a function splitIntoGroups(array, size = 1) that splits an array into sub-arrays of the given size.
// The last group may be smaller if there aren't enough elements. The original array must remain unchanged.


// Brute force approach
function splitIntoGroups(array, size = 1) {
    if (!Array.isArray(array) || size < 1) {
        return [];
    }

    const result = [];
    let group = [];

    for (let i = 0; i < array.length; i++) {
        group.push(array[i]);

        if (group.length === size) {
            result.push(group);
            group = []; // reset for next group
        }
    }

    // If there are leftovers
    if (group.length) {
        result.push(group);
    }

    return result;
}


// Using Javascript slice method
function splitArrayGroups(array, size = 1) {
    if (!Array.isArray(array) || size < 1) return [];

    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}

console.log(splitIntoGroups([1, 2, 3, 4], 2));   // [[1, 2], [3, 4]]
console.log(splitIntoGroups([1, 2, 3, 4, 5], 2));   // [[1, 2], [3, 4], [5]]
console.log(splitIntoGroups(["a", "b", "c", "d"]));   // [["a"], ["b"], ["c"], ["d"]]