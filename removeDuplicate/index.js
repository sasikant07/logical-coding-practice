const removeDuplicate = (arr) => {
    arr.sort();

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let exit = false;

        for (let j = 0; j < result.length; j++) {
            if (arr[i] === result[j]) {
                exit = true;
            }
        }

        if (!exit) {
            result.push(arr[i])
        }
    }
    return result;
}

const numbers = [7, 3, 5, 1, 4, 3, 8, 9, 5];

let result = removeDuplicate(numbers)

console.log(result)


let uniqueArray = [... new Set(numbers)];
console.log(uniqueArray);

let filterefArray = numbers.sort().filter((ele, index) => numbers.indexOf(ele) === index);
console.log(filterefArray);