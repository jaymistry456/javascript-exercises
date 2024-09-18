const removeFromArray = function(arr) {
    for(let i = 0; i < arguments.length; i++) {
        arr = arr.filter(item => item !== arguments[i]);
    }   
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
