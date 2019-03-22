// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    //Change to string 
    //Change to array and reverse result
    //parseInt of solution
    //Multiply by -1 if number is negative
    const reversed = n.toString().split('').reduce((reversed, char) => {
        return reversed = char + reversed;
    }, '');

    if (Math.sign(n) === -1) {
        return parseInt(reversed) * -1;
    }
    return parseInt(reversed);
    
}

module.exports = reverseInt;
