// Input: nums = [1, 2, 3, 4, 5, 6, 7]
// output: 
//         step 1: if k=1 nums = [7, 1, 2, 3, 4, 5, 6]
//         step 1: if k=2 nums = [6, 7, 1, 2, 3, 4, 5]
//         step 1: if k=3 nums = [5, 6, 7, 1, 2, 3, 4]

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

function arrayRotation(arr, numberOfShipfts) {
    for (let i = 0; i < numberOfShipfts; i++) {
        arr.unshift(arr.pop());
        console.log(` Step ${i + 1}:`, arr);
    }
}

// another way
function arrayRotatios(arr, numberOfShipfts) {
    let deletedArray = arr.splice(arr.length - numberOfShipfts);    // [5, 6, 7]

    for (let i = 0; i < deletedArray.length; i++) {
        arr.splice(i, 0, deletedArray[i]);      //splice(0, 0, 5)   //splice(1, 0, 6)
        console.log(`step ${i + 1}:`, arr);
    }
}

// console.log("final output:", arrayRotation(nums, k));


arrayRotatios(nums, k);