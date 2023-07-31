// input: [10, 20, 20]
// output: {10: 1, 20: 2}

function countFrequency (arr) {
    let count = {};

    for (const ele of arr) {
        if (count[ele]) {
            count[ele] += 1;
        } else {
            count[ele] = 1;
        }
    }

    return count;
}

const result = countFrequency([10, 20, 20]);
console.log(result);    // { '10': 1, '20': 2 }


const res =countFrequency(['a', 'b', 'a', 'a', 'c', 'c']);
console.log(res);   // { a: 3, b: 1, c: 2 }