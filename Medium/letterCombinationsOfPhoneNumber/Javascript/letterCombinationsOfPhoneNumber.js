/**
 * @param {string} digits
 * @return {string[]}
 */

const numberMap = {
  '2': 'abc',
  '3': 'def',
  '4': 'ghi',
  '5': 'jkl',
  '6': 'mno',
  '7': 'pqrs',
  '8': 'tuv',
  '9': 'wxyz',
};
var letterCombinations = function (digitString) {
  if (!digitString.length) {
    return [];
  }
  let words = [];

  let letterRecurse = (word, digits) => {
    if (digits.length === 0) return words.push(word);

    let currentLetters = numberMap[digits[0]].split('');
    currentLetters.forEach((letter) => letterRecurse(word + letter, digits.slice(1)));
  };

  letterRecurse('', digitString.split(''));
  return words;
};
