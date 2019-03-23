// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


//Common similar questions:
//What is the most common character in the string
//Does String A have the same characters as String B? (Anagrams)
//Does the given string have any repeated characters in it?
function maxChar(str) {

    //Create map object from String
    //Keep track of max and maxChar
    //Loop through map and set max char
    
    const charMap = {};
    let max = 0;
    let maxChar = '';

    for(let char of str) {
        charMap[char] = charMap[char] + 1 || 1;
    }


    for(let char in charMap) {
        if(charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;

}

module.exports = maxChar;
