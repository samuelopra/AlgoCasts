// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // Change string to Array
    // Reverse Array
    // Change array back to String
    let reversed = '';
    
    for(let char of str) {
        reversed = char + reversed;
    }
    return reversed;
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

module.exports = reverse;
