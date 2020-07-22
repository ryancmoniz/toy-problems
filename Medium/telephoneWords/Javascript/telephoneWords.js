const phoneDigitsToLetters = {
    0: '0',
    1: '1',
    2: 'ABC',
    3: 'DEF',
    4: 'GHI',
    5: 'JKL',
    6: 'MNO',
    7: 'PQRS',
    8: 'TUV',
    9: 'WXYZ'
};

const telephoneWords = function (digitString) {
    let words = [];

    let letterRecurse = (word, digits) => {
        if (digits.length === 0) return words.push(word);

        phoneDigitsToLetters[digits[0]].split('').forEach((letter) => letterRecurse(word + letter, digits.slice(1)));

    };
    letterRecurse('', digitString.split(''));
    return words;
};

module.exports = {
    phoneDigitsToLetters, telephoneWords
}