module.exports = firstNonRepeatedCharacter = function(string) {
    return string.split('').filter(x => string.indexOf(x)=== string.lastIndexOf(x))[0]
};
