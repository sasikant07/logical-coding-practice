/*
    5431 => 5 + 4 + 3 + 1 = 13
    13 => 1 + 3 = 4
*/

function addData(data) {
    let convertToString = ""+ data;

    let convertToArray = convertToString.split('').map(data => {
        return parseInt(data);
    });

    let finalOutput = convertToArray.reduce((a, b) => a + b)

    if (finalOutput > 10) {
        addData(finalOutput)
    } else {
        console.log(finalOutput)
    }
}

addData(5431);    // o/p --> 4

//=======================================================================================================================================
function addBigNumber(num) {
  const arr = Array.from(String(num), Number);

  const finalOutput = arr.reduce((a, b) => a + b);

  if (finalOutput > 10) {
    addNumber(finalOutput);
  } else {
    console.log(finalOutput);
  }
}

addBigNumber(5431);   // o/p --> 4


//======================================================================================================================================

function digitalRoot(num) {
    if (num === 0) return 0;
    return 1 + (num - 1) % 9;
}

console.log(digitalRoot(54321)); // 6
//=======================================================================================================================================


function getTotalSum(num) {
    let sum = 0;

    while (num > 0) {
        sum += num % 10;
        num = (num - (num % 10)) / 10;
    }

    // Repeat until single digit
    if (sum > 9) {
        return getTotalSum(sum);
    }

    return sum;
}

console.log(getTotalSum(54321)); // 6

