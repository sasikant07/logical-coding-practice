// second larget in an array

function findSecondLargest(arr, len) {
    let i = 0;
    let largest = secondLargest = -12345678; // don't use zero

    if (len < 2) {
        return "Invalid Input";
    }

    for (i = 0; i < len; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] !== largest && arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }

    if (secondLargest === -12345678) {
        return "No second largest element"
    } else {
        return secondLargest;
    }
}

let arr = [12, 14, 13, 10, 5, 1]; 

console.log(findSecondLargest(arr, arr.length));    // 13