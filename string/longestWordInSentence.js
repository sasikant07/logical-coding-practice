function findLongestWord(sentence) {
  const words = sentence.split(" ");
  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

// Example usage:
const sentence = "The quick brown fox jumped over the lazy dog";
console.log(findLongestWord(sentence)); // Output: "jumped"
