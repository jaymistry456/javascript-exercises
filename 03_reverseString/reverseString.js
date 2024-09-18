const reverseString = function(s) {
    let reverse = '';

    for(let i = 0; i < s.length; i++) {
        reverse = s[i] + reverse;
    }

    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
