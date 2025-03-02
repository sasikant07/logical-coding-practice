// Check whether the given string or expression is balanced or not
// Input: 
// Output:

function isBalancedParenthesis(str) {
    let stack = [];

    let openingBrackets = {
        '(': ')',
        '{': '}',
        '[': ']',
    }

    let closingBrackets = {
        ')': true,
        '}': true,
        ']': true,
    }

    for (let i = 0; i < str.length; i++) {
        const element = str[i];

        if (openingBrackets[element]) {
            stack.push(element);
        } else if (closingBrackets[element]) {
            if (openingBrackets[stack.pop()] !== element) {
                return false;
            }
        }
    }
    return stack.length == 0;
}

// let string = "(())";     // true
let string = "((]]"     // false
console.log(isBalancedParenthesis(string));
  
//====================================================================================================================

  function isBracketsBalanced(s) {
    const stack = [];
    const matchingBrackets = {
      ')': '(',
      ']': '[',
      '}': '{',
    };
  
    // Use a for loop to allow early return in case of unbalanced parentheses
    for (let char of s) {
      if (['(', '{', '['].includes(char)) {
        stack.push(char); // Push opening brackets onto the stack
      } else if ([')', '}', ']'].includes(char)) {
        // Check if the last element of the stack matches the closing bracket
        if (stack.pop() !== matchingBrackets[char]) {
          return false; // Return false immediately if brackets are not balanced
        }
      }
    }
  
    // If stack is empty, all brackets were balanced
    return stack.length === 0;
  }
  
  // Example usage:
  console.log(isBracketsBalanced("{[()]}"));   // Output: true (Balanced)
  console.log(isBracketsBalanced("{[(])}"));   // Output: false (Not balanced)
  console.log(isBracketsBalanced("{[({})]}")); // Output: true (Balanced)
  