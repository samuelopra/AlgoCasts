// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // Change string to an array
    // Reduce array back to string
    // Call function to insert char before the result
    // return string
    return str.split('').reduce((reversed, char) => {
        return char + reversed;
    }, '');
}

function reverseAlt(str) {
    // Change string to Array
    // Reverse Array
    // Change array back to String

    return str
        .split('')
        .reverse()
        .join('');
}

function reverseAlt2(str) {
    // Initiate reversed string
    // loop through each character in the string
    // Insert the char before the result
    // return string
    let reversed = '';
    
    for(let char of str) {
        reversed = char + reversed;
    }
    return reversed;
}

module.exports = reverse;
