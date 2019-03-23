// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function createCharMap(str) {
    const charMap = {};
    for(let char of str) {
        if(charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1
        }
    }
    
    console.log(charMap);
    return charMap;
}
function anagrams(stringA, stringB) {
    // create maps for eac h string
    // compare sizes of maps
    // iterate through a map and check if it is equal to other map
    const charMapA = createCharMap(stringA);
    const charMapB = createCharMap(stringB);

    if(Object.keys(charMapA).length !== Object.keys(charMapB).length ) {
        return false;
    }
    for(let char in charMapA) {
        if(charMapB[char] !== charMapA[char] || !charMapB[char]) {
            return false;
        }
    }
    return true;
}

module.exports = anagrams;
